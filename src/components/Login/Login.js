import React, { useState } from "react";
import "./Login.scss";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { userInfo } from "../../utils/fetchUser";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("Please Login to use the application")
  return userInfo ? (
    navigate("/")
  ) : (
    <div className="login_wrapper">
      <h3>{text}</h3>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const userObject = jwtDecode(credentialResponse.credential);
            console.log(userObject.email);
          }}
          onError={() => {
            setText("Login Failed 😟 please try again...")
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
