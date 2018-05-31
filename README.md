Projet de base React
====================

## Utilisation

``` sh
git clone git@github.com:O-clock-Teach/React-modele.git
cd React-modele
yarn # installe les dépendances du projet
yarn start # compile le projet avec Parcel
# rdv sur http://localhost:1234/
```

## Configuration

Les commandes ci-dessous sont simplement indiquées pour mémoire, ne pas les lancer !

### Babel (ES6/JSX -> ES5)

``` sh
yarn add --dev babel-preset-env # vocabulaire ES6 -> ES5 de base
yarn add --dev babel-plugin-transform-class-properties
yarn add --dev babel-plugin-transform-object-rest-spread
yarn add --dev babel-preset-react
yarn add react react-dom
```

* .babelrc

### ESLint

``` sh
yarn add --dev eslint eslint-config-airbnb babel-eslint
yarn add --dev eslint-import-resolver-alias
yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

* eslintrc
* .eslintignore

### CSS (Stylus, PostCSS, Autoprefixer)

``` sh
yarn add --dev stylus postcss-modules autoprefixer stylint
```

* .stylintrc
* .postcssrc
* .browserslistrc

### Utilitaires

``` sh
yarn add --dev babel-polyfill
```

