import axios from "axios";
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let {loginUser} = useContext(AuthContext)

  const submitForm = async ()=>{
    await axios.post('http://127.0.0.1:8000/api/auth/login',{
      'email': email,
      'password': password
    })
    .then(res=>{
      console.log(res)
    })
    // console.log(email + ' ' + password)
    // preventDefault();
  }

  return (
    <>
    <form onSubmit={loginUser}>
      <div
        style={{ width: "30rem" }}
        className="mb-3 width-30 position-relative top-0 start-50 translate-middle-x"
      >
        <label className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div
        style={{ width: "30rem" }}
        className="mb-3 position-relative top-0 start-50 translate-middle-x"
      >
        <label className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      {/* <div className="mb-3 form-check mb-3 width-30 position-relative top-0 start-50 translate-middle-x">
        <input type="checkbox" className="form-check-input mb-3 width-30 position-relative top-0 start-50 translate-middle-x" id="exampleCheck1" />
        <label className="form-check-label  " for="exampleCheck1">
          Check me out
        </label>
      </div> */}
      <button  type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
};

export default Login;
