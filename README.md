# AMMO.UI
Este projeto está publicado no Netlify (https://www.netlify.com), e pode ser acessado através da URL (https://ammoui.netlify.com).
Seu código fonte pode ser visto no GitHub (https://github.com/ggentil/AMMO.UI).

## Rodar projeto local
Com os arquivos já baixados, navegue para o diretório alvo do projeto, use "npm install" (já com node instalado) pra instalar os pacotes necessários.
Talvez seja necessário instalar também o Angular-CLI globalmente, use "npm install -g @angular/cli".
Em seguida use "ng serve" para emular localmente o projeto, ele estará disponível em ((http://localhost:4200)).
Este projeto quando emulado localmente tentar acessar as APIs localmente pela URL (http://localhost:3000) do projeto AMMO.API (https://github.com/ggentil/AMMO.API), caso queira mudar isso, mude o valor de API_URL no arquivo (/src/environments/environment.ts).