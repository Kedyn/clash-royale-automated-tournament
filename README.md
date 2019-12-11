# Clash Royale Automated Tournament

This simple application that allows competitive players find a place to compete in. This project allows tournament creators or players to create automate tournament brackets. This means that the system self manages tournament rounds by checking players battle history to determine who has won and lost.

## Features

- Automated tournaments

## Dependencies

- NodeJS
  - create-react-app
  - firebase
- Firebase
  - Authentication
  - Firestore

## Installation

To install this project on your own server, first you must create a _Firebase_ project with Authentication `Email and Password` and a Firestore database. Then you must clone this project. Call `npm install` on the root folder of your cloned repository to install all dependencies. Afterwards, call `npm start` to run the project locally. Finally, you can call `npm run build` to build the project. A `dist` folder will be created, which you can add to your server.

## How to use it

To start using this project, open a browser and go onto the domain where the project is hosted. Register an account. In your account page click create tournament or join a tournament. After creating a tournament give the url of your tournament to others so they or yourself may join. One you join a tournament you all you have to do is play agains your openent, which can be found in the bracket of the tournament.

## Contributing & Development Process

If you would like to contribute to the project I ask that you use _variable_names_ with all lower case, _camelCase_ for all functions and _PascalCase_ for all classes.

## License

This project is made available under the MIT License.
