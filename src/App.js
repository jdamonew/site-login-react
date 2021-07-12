import imagem from './assets/img-background.png';
import logo from './assets/logo.png';
import logoRoxo from './assets/logo-roxo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*BLOCO ESQUERDO*/}
      <div className="containerOne">
        <img alt="logo" src={logo} className='logo1'/>
        <h1>welcome to my site.</h1>
        <img alt={`Baz taking a ${imagem}`} src={imagem} className="image-background"/>
      </div>

      {/*BLOCO DIREITO*/}
      <div className="containerTwo">
        <img alt="logo" src={logoRoxo} className='logo2'/>

        <h1 className="login-title">log in</h1>
        <p className="login-subtitle">enter with your credentials ou sign up in our site.</p>

        <div className="containerLogin">

          <label>e-mail</label>
          <input type='email'></input>

          <label>password</label>
          <input type='password'></input>

          <button type='button'>enter</button>

          <p>don't have an account? <a href="true" onClick={()=>console.log("Open Page")}>sign up</a> </p>

        </div>
     
     
      </div>


    </div>
  );
}

export default App;
