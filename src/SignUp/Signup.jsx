import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleEmailSignUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      const user = res.user;
      console.log(user);
    });
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="row">
      <div className="col-6 m-auto">
        <h1>Please signup here</h1>
        <form onSubmit={handleEmailSignUp}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="false"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="false"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
