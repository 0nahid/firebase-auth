import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import './App.css';
import firebaseConfig from './Firebase/firebase.config';
initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider();
const handleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
}
function App() {
  return (
    <div className="App">
      <button onClick={handleSignIn}>Sign In With Google</button>
    </div>
  );
}

export default App;
