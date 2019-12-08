import firebase from "services/firebaseService";

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function registerUser(email, password, tag = "L8PYR99VP") {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .set({
            tag
          })
          .then(() => {
            resolve();
          })
          .catch(err => {
            data.user
              .delete()
              .then(() => {
                reject(
                  "An error occurred while creating your profile, please try again later."
                );
              })
              .catch(err => {
                reject("Unknown error, please try again later.");
              });
          });
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

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

export function getBDInfo(folder="tourn", id="ad") {
  firebase
    .firestore()
    .collection(folder)
    .doc(id)
    .get()
    .then(info => {
      if (!info.exists) {
        console.log('No such document!');
      } 
      else {
        console.log('Document data:', info.data());
      }
    })
      .catch(err => {
        console.log('Error getting document', err);

    });

}