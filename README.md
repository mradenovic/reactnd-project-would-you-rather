# Udacity React Nanodegree: Would You Rather Project

**Would You Rather** is the second project built during completion of the [Udacity's](https://www.udacity.com/) [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

It is a simple client web app that lets a user play the “Would You Rather?” game.

## Tools and technologies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

State of the app is managed with [Redux](https://redux.js.org/) and implementation is done with [Redux Toolkit](https://redux-toolkit.js.org/), the official toolset for Redux. The bindings bwtween the app and the state are establisehd throutgh [React Redux](https://react-redux.js.org/).

Routing was implemented with [React Router](https://reacttraining.com/react-router/).

[Material-UI](https://material-ui.com/) was used for building the user interface.

## Develop (or review project)

The prefered way to work with the project is `yarn`, although `npm` will work too:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Available commands

* `yarn start` - start the development server
* `yarn build` - build the prodaction version of the app
* `yarn test` - run react tests
* `yarn lint` - run eslint against the `src` folder

## Backend Server

Backend server is simulated through `src/utils/_DATA.js` file. When the web page is reloaded, the backend resets.

## License

[MIT License](LICENSE.md)
