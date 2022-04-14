# cypress-auto-alert-accept-bypass-example

:bug: Minimal reproducible example of breaking alert auto acceptance of Cypress

## Steps

1. Install dependencies
```sh
yarn install
```

2. Start server
```sh
yarn start &
```

3. Run Cypress as open mode
```sh
yarn open  # cypress open equivalent
```

4. Click `Run 1 integration spec`

5. **boo!**