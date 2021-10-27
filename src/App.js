import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import './App.css';
import firebaseConfig from './Firebase/firebase.config';

initializeApp(firebaseConfig)

function App() {
  const [user, setUser] = useState({})
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName: userName, photoURL: photo, email } = result.user;
        const loadUSer = {
          name: userName,
          email: email,
          photo: photo
        }
        setUser(loadUSer)
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <button onClick={handleSignIn}>Sign In With Google</button>
      <div>
        {
          user.email && <div>
            <h1>Welcome {user.name}</h1>
            <p>Email : {user.email}</p>
            <img style={{height:"100px", width:"100px", borderRadius:"50%"}} src={user.photo} alt="" />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
