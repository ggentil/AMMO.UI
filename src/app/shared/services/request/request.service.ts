import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    //private BASE_API_URL: string = "https://ammo-api.herokuapp.com";
    private BASE_API_URL: string = "http://localhost:3000";
    private internalRequest: boolean = false;

    constructor(private _http: HttpClient) { }

    requestMethod(requestURL: string, method: string, itsInternal: boolean, data?: any): any {
        this.internalRequest = itsInternal;

        let header = {"Content-Type": "application/json"};
        let url = itsInternal ? this.BASE_API_URL + requestURL : requestURL;

        let option = {
            headers: header,
            responseType: "json",
            //observe: "response"
        };

        if (method.toUpperCase() == "POST" && data) {
            return this.throughPost(url, JSON.stringify(data), option);
        } else if(method.toUpperCase() == "POSTFILE" && data) {
            return this.throughPost(url, data);
        } else {
            return this.throughGet(url, option);
        }
    }

    private throwObservableSuccess(dataToReturn: any) {
        return {
            success: true,
            message: null,
            data: dataToReturn
        };
    }

    private throughPost(url: string, data: any, option?: any) {
        return this._http.post(url, data, option)
            .pipe(map(response => {
                return this.internalRequest ? response : this.throwObservableSuccess(response);
            }));
    }

    private throughGet(url: string, option?: any) {
        return this._http.get(url, option)
            .pipe(map(response => {
                return this.internalRequest ? response : this.throwObservableSuccess(response);
            }));
    }
}