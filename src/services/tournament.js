import firebase from "services/firebaseService";
import { parseGameInfo } from "services/ClashRoyale";

export function registerTourn(tourn_title, tourn_prize, tourn_time, tourn_url) {
  firebase
    .firestore()
    .collection("tourn")
    .doc()
    .set({
      title: tourn_title,
      prize: tourn_prize,
      time: tourn_time,
      url: tourn_url
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}

export function getBDInfo(folder = "tourn", id = "ad") {
  firebase
    .firestore()
    .collection(folder)
    .doc(id)
    .get()
    .then(info => {
      if (!info.exists) {
        console.log("No such document!");
      } else {
        console.log("Document data:", info.data());
      }
    })
    .catch(err => {
      console.log("Error getting document", err);
    });
}

export function addPlayerToTourn(tournID = "CL1k1sf3fNOM4pc4GUvV", tag = "L8PYR99VP") {
  //CL1k1sf3fNOM4pc4GUvV
  var player1 = "LY8PJJ20"
  var player2 = "PPG909CJ"
  var player3 = "L9QCPVCPJ"
  var player4 = "L8PYR99VP"
  firebase
  .firestore()
  .collection("tourn")
  .doc(tournID)
  .update({
    player1,
    player2,
    player3,
    player4
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

export function checkWinner(player1, player2, gameID ="CL1k1sf3fNOM4pc4GUvV") {
  let battle = parseGameInfo(player1);
  console.log(battle)
  
  
  // console.log(battles)
  // if (player2 === battles["opponentNam"]) {
  //   let player1Win = true
  //   if (battles[0][1] < battles[0][2]) {
  //     player1Win = false
  //   }

  //   firebase
  //     .firestore()
  //     .collection("tourn")
  //     .doc(gameID)
  //     .get()
  //     .then(info => {
  //       if (!info.exists) {
  //         console.log("No such document!");
  //       } else {
          


        
        
        
        
        
  //       }
  //     })
  //     .catch(err => {
  //       console.log("Error getting document", err);
  //     });
  
  //   firebase
  //     .firestore()
  //     .collection("tourn")
  //     .doc(gameID)
  //     .get()
  //     .then(info => {
  //       if (!info.exists) {
  //         console.log("No such document!");
  //       } else {
  //         console.log("Document data:", info.data());
  //       }
  //     })
  //     .catch(err => {
  //       console.log("Error getting document", err);
  //     });
  // }
}