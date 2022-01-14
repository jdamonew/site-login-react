import React, {useEffect} from 'react';
import ApresentationContainer from "../../components/ApresentationContainer";
import LoginContainer from "../../components/LoginContainer";
import "./style.scss";

const Login = () => {
    useEffect(()=>{
        //document.title='Login';
    })
  return (
    <div className="login-page">
        <ApresentationContainer/>
        <LoginContainer/>
    </div>
  );
}

export default Login;


