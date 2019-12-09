import firebase from "services/firebaseService";

let user = null;

export function getCurrentUser() {
  return user;
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

export function login(email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        let current_user = firebase.auth().getCurrentUser;

        firebase
          .firestore()
          .collection("users")
          .doc(current_user.uid)
          .get()
          .then(doc => {
            user = { ...doc.data(), ...current_user };

            resolve();
          })
          .catch(err => {
            reject(err.message);
          });
      })
      .catch(err => {
        reject(err.message);
      });
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        user = null;

        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}
