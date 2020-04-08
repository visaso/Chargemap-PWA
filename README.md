# Chargemap
- create .env
  - `DB_URL=mongodb://username:password@localhost:27017/chargemap`
- `npm i`
- run `localhost:3000`
- create user(s) with `locahost:3000/graphql`
  ```graphql
   mutation {
     registerUser(username:"someUser", password:"somePasswd", full_name: "Full Name"){
       id
       username
       full_name
       token
     }
   }
   ```
