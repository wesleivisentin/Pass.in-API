# pass.in | API NodeJs
Feito na trilha Node da NLW Unite | Rocketseat🚀




![image](https://github.com/wesleivisentin/Pass.in-API/assets/78518664/8d0f0f1e-68ed-4278-963e-5a6edbff72ea)



O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**. 

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;



### Utilização:
Instale as dependências:
```sh
npm install
```
Execute as migrations:
```sh
npm run db:migrate
```
Execute o servidor de desenvolvimento:
```ts
npm run dev
```


