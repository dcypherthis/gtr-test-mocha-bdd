# gtr-test-mocha-bdd

The mocha example of testing a guitar practice app.

## Related Links

- Application under test - (AdonisJS + VueJS) https://guitar-practice-app.herokuapp.com/
- Test Library - https://github.com/dcypherthis/gtr-test-xray
- Cucumber test example - https://github.com/dcypherthis/gtr-test-cucumber
- Mocha test example - https://github.com/dcypherthis/gtr-test-mocha-bdd

## Setup

This project uses node 6x and npm 3x.  We recommend using NVM (for Mac) to manage
you node version. The most compatible version will be in he .nvmrc

```
nvm use
npm install
```

Next you will need to install selenium:
```
npm run selenium-install
```
Start your local selenium server:
```
npm run selenium
```

### Running Tests

```
npm run test-local-dev
```

