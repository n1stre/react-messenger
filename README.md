# Messenger app

###### by Nikita Strelets

---

## Installation

To get the app running you need to `node` and `npm` installed on your system and run:

```console
$ npm i
```

This should install all of the dependencies needed for the project.
From here you're good to go to start using available scripts.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/).
It'll automatically open [http://localhost:8080](http://localhost:8080) in your browser and will reload when you make changes.
You may also see any lint errors in the console.

### `npm start:prod`

Runs the app in the production mode using [`express`](https://expressjs.com/).
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Behind the scenes `npm run build` command gets executed.

### `npm run build`

Runs [`webpack`](https://webpack.js.org) in `production` mode to bundle all of the source code into `dist` folder ready to be deployed.

### `npm run lint`

Runs [`eslint`](https://eslint.org/) for all the `.js`, `.ts`, `.tsx` files with `quiet` flag

### `npm run test`

Runs unit tests specs for all the files matching `"**/*.(test|spec).(js|ts|tsx)"` regex. Launches [`jest`]() as a test runner in the interactive watch mode. Additionally `npm run test:cov` can be used to collect code coverage and place it into `tests/__coverage__`.

## Technologies
Webpack configura
For the application core there are only five dependencies are being used:

```json
{
  "dependencies": {
    "date-fns": "^2.22.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-query": "^3.17.2",
    "react-router-dom": "^5.2.0"
  }
}
```

out of which:

- `date-fns` is used as a lighter in size alternative to `moment`
- `react-query` as a powerfull way to handle data fetching in the app.

For the actual commits graph I've decided to move along with my own implementation only in sake of personal interest.
