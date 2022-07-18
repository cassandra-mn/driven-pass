# DrivenPass  <a href="https://github.com/cassandra-mn/driven-pass.git"><img src="https://camo.githubusercontent.com/9fc043de59486391ea60800bb55c0442838a476a434a63aff152768f4d172f66/68747470733a2f2f6e6f74696f6e2d656d6f6a69732e73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f70726f642f7376672d747769747465722f31663531322e737667" alt="readme-logo" width="30" height="30"></a>

## Usage

```bash
$ git clone https://github.com/cassandra-mn/driven-pass.git

$ cd driven-pass

$ npm install

$ npm run dev
```

## API

```bash
# Rotas de autenticação:

- POST /sign-up
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "password"
      }
    
- POST /sign-in
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "password"
      }
    
    
# Rotas de credenciais:

- POST /credentials/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "title": "title",
        "url": "http://",
        "username": "username",
        "password": "password"
      }
      
- GET /credentials
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /credentials/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- DELETE /credentials/delete/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
    
# Rotas de notas seguras:

- POST /notes/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "title": "title",
        "note": "note"
      }
    
- GET /notes
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /notes/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- DELETE /notes/delete/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
    
# Rotas de cartões:

- POST /cards/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "title": "title",
        "number": "1234123412341234",
        "name": "name",
        "cvc": "123",
        "expirationDate": "10/27",
        "password": "1234",
        "type": "both"
      }
      
- GET /cards
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /cards/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- DELETE /cards/delete/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
    
# Rotas de wi-fi:

- POST /wifi/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "title": "title",
        "name": "name",
        "password": "password"
      }
      
- GET /wifi
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /wifi/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- DELETE /wifi/delete/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    

# Rotas de documentos:

- POST /docs/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "fullName": "full name",
        "emissionDate": "01/01/21",
        "validity": "10/31",
        "number": "0123456",
        "issuer": "SSP",
        "type": "RG"
      }
      
- GET /docs
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /docs/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- DELETE /docs/delete/:id
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
```
