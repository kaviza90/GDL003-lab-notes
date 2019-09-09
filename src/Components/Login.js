import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

class Login extends Component {
  onGoogleSignInClicked = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        console.log("google singin was successful");
      })
      .catch(error => {
        console.log(error);
      });
  };
  onLogoutClicked = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("log out has been successful");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.onGoogleSignInClicked()}>
          Sign in with google
        </button>
        <button onClick={() => this.onLogoutClicked()}>Log out</button>
      </React.Fragment>
    );
  }
}

export default Login;
