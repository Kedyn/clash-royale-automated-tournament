// import React, { Component } from "react";
import axios from "axios"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzM0NiwiaWRlbiI6IjI5NzU0NzUxMjUwMjQxOTQ1NyIsIm1kIjp7InVzZXJuYW1lIjoiS2FuZHkgS2FpbmUiLCJkaXNjcmltaW5hdG9yIjoiNDQ5OSIsImtleVZlcnNpb24iOjN9LCJ0cyI6MTU3NTY5ODIyNDUyOX0.gbU1-CELC4yYgYijVjFwj1jZ8XPU1FJCARCw4uIL_D8"

export function testingAxios() { // Just testing Axios, dummy test function
      var persons = []
      axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                  persons.push(res.data)
            })
            console.log(persons);
      return true
}

// Gets the last few games that the player has recently played, defaulted to kaine's username
export function getPlayerGames(playerName = "L8PYR99VP") { 
      let request = axios.create({
            headers: {"auth": TOKEN}
      });
      // https://cors-anyware... is a solution to a CORS requirement that the api was having
      request.get(`https://cors-anywhere.herokuapp.com/https://api.royaleapi.com/player/${playerName}/battles`)
            .then(res => {
                  let data = (res.data);
                  console.log(data)
                  return data
            })


}

export function parseGameInfo() {
      let data = getPlayerGames();
      for (var key in data) {
            console.log(data[key])
      }


}