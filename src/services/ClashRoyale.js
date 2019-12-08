import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzM0NiwiaWRlbiI6IjI5NzU0NzUxMjUwMjQxOTQ1NyIsIm1kIjp7InVzZXJuYW1lIjoiS2FuZHkgS2FpbmUiLCJkaXNjcmltaW5hdG9yIjoiNDQ5OSIsImtleVZlcnNpb24iOjN9LCJ0cyI6MTU3NTY5ODIyNDUyOX0.gbU1-CELC4yYgYijVjFwj1jZ8XPU1FJCARCw4uIL_D8";

export function testingAxios() {
  // Just testing Axios, dummy test function
  var persons = [];
  axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
    persons.push(res.data);
  });
  console.log(persons);
  return true;
}

// Gets the last few games that the player has recently played, defaulted to kaine's username
export function getPlayerGames(playerName = "L8PYR99VP") {
  // will return a promise so that we can use .then for success and .catch for errors
  return new Promise((resolve, reject) => {
    // https://cors-anyware... is a solution to a CORS requirement that the api was having
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.royaleapi.com/player/${playerName}/battles`,
        {
          headers: { auth: TOKEN }
        }
      )
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function parseGameInfo() {
  // the following will return an array, there fore we can use .forEach (a for loop) to get each element
  getPlayerGames().then(battles => {
    battles.forEach((battle, index) => {
      console.log("Battle " + (index + 1) + ":");
      console.log(battle);
    });
  });
}
