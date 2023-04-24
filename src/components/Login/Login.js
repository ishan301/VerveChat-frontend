import React, { useEffect, useState } from "react";
import "./Login.scss";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { fetchUser } from "../../utils/fetchUser";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("Please Login to use the application");
  const userInfo = fetchUser();

  useEffect(() => {
    if (userInfo) navigate("/", { replace: true });
  }, [navigate, userInfo]);

  return (
    !userInfo && (
      <div className="login_wrapper">
        <h3>{text}</h3>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const userObject = jwtDecode(credentialResponse.credential);
              localStorage.setItem("user", JSON.stringify(userObject));
              // const { name, sub, picture } = userObject;
              navigate("/");
            }}
            onError={() => {
              setText("Login Failed 😟 please try again...");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    )
  );
};

export default Login;
