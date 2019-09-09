import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import Apikey from "./Firebase.js";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import Login from "./Components/Login.js";

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...Apikey}>
      {<Login></Login>}
    </FirebaseAuthProvider>
  );
}

export default App;
