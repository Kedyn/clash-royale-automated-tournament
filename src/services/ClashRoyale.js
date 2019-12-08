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
export function getPlayerGames(playerName) {
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

export function parseGameInfo(playerName  = "L8PYR99VP") {
  // the following will return an array, there fore we can use .forEach (a for loop) to get each element
  getPlayerGames(playerName).then(battles => {
    var info = []

    battles.forEach((battle, index) => {
      var battlestuff = []
      console.log("Battle " + (index + 1) + ":");
      if (true) {console.log(battle);}

        for (var key in battle) {
        
          if (key === "utcTime") {
            battlestuff.unshift(battle[key])
          }
          if (key === "team" || key === "opponent") {  
            for (var key2 in battle[key][0]) {
              if (key2 === "name") {
                battlestuff.push(battle[key][0][key2])
              }
            }
          }
          if (key === "opponentCrowns" || key === "teamCrowns") {
            battlestuff.push(battle[key])
          }
        } //End of battle's main sections
      info.push(battlestuff)
      }); //End of recent battle's
  console.log(info)
  }); // End of getPlayerGames()
} // End of Function
