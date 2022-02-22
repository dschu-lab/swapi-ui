<p align="center">
  <h1 align="center">SWAPI UI</h1>
  <p align="center">A simple ui for the Star Wars api written in TypeScript using React.js</p>
  <p align="center">
    <a href="https://github.com/dschu-lab/swapi-ui/actions/workflows/pr-check.yml">
      <img src="https://github.com/dschu-lab/swapi-ui/actions/workflows/pr-check.yml/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/dschu-lab/swapi-ui">
      <img src="https://codecov.io/gh/dschu-lab/swapi-ui/branch/main/graph/badge.svg?token=RV3LHBDCBH"/>
    </a>
    <a href="https://swapi-ui.surge.sh">
      <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fswapi-ui.surge.sh">
    </a>
    <a href="https://github.com/prettier/prettier">
      <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
    </a>
  </p>
</p>

## In action

![swapi-ui-preview](https://user-images.githubusercontent.com/3493187/155501762-28010f38-0fc8-4ae1-b25d-006fad9700e0.gif)

[Open the live version](https://swapi-ui.surge.sh)

## Quick Overview

This project was bootstrapped using the TypeScript template of the [Create React App](https://github.com/facebook/create-react-app).

```bash
npm i # Install dependencies
npm run start # Starts the development server on localhost:3000
```

## Available scripts

Use `npm run [COMMAND]` to execute available scripts.

| Command     | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| `start`     | _Starts the development server_                                       |
| `build`     | _Build the app for production_                                        |
| `postbuild` | _Runs automatically after the build. Creates a 200.html for surge.sh_ |
| `test`      | _Launches the test runner_                                            |
| `coverage`  | _Analyzes test coverage_                                              |
| `lint`      | _Checks for linting errors_                                           |
| `eject`     | _Ejects from react-scripts_                                           |

## Backend

The Star Wars API backend is hosted on [swapi.py4e.com](https://swapi.py4e.com/api).

## Deployment

The deployment is automated using Github Actions and pushes the production build automatically to [surge.sh](https://surge.sh/).
