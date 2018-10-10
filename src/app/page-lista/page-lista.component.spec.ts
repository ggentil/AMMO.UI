import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaComponent } from './page-lista.component';

describe('PageListaComponent', () => {
  let component: PageListaComponent;
  let fixture: ComponentFixture<PageListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
