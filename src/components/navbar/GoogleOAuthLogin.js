import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const GoogleOAuthLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <GoogleOAuthProvider clientId="741243194624-98504o77llan3l2kpsfftd2rev13qcui.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleOAuthLogin;
