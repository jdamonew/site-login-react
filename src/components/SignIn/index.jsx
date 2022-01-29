import React from 'react';
import "./style.scss";

const SignIn = () => {
  return (  
        <div style={{zIndex:2, position:"relative"}}>
          <img alt="logo" src="logo-roxo.png" className='logo'/>

          <h1 className="login-title">log in</h1>
          <p className="login-subtitle">enter with your credentials ou sign up in our site.</p>

          <div className="login-card">
            <label>e-mail</label>
            <input type='email'></input>
            
            <label>password</label>
            <input type='password'></input>
            
            <button type='button'>enter</button>
            <p>don't have an account? <a href={null} onClick={()=>console.log("Open Page")}>sign up</a> </p>
          </div>
     
      </div> 
  );
}

export default SignIn;


