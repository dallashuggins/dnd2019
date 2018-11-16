# Dallas & Drew Autumn Wedding Celebration 2019

## Setup

### Getting started
1. Run `npm install`
2. Create config files.
  * `config.json`
  * `src/config.json`
3. Add the proper variables to the config files. wedding-5qb9t.mongodb.net
    a. `config.json`
        * `mongodb_un`: MongoDB username.
        * `mongodb_pw`: MongoDB password.
        * `mongodb_cluster`: MongoDB cluster in srv address: `@<mongodb_cluster>.mongodb.net`.
    b. `src/config.json`
        * `regCode`: Lever API key.
4. Use `npm start` in development and `npm run build` for production; official documentation [here](https://github.com/facebook/create-react-app).

  * **Example**: 
```npm run build```