import imagem from './assets/img-background.png';
import logo from './assets/logo.png';
import logoRoxo from './assets/logo-roxo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*BLOCO ESQUERDO*/}
      <div className="containerOne">
        <img src={logo} className='logo'/>
        <h1>welcome to my site.</h1>
        <img src={imagem}/>
      </div>

      {/*BLOCO DIREITO*/}
      <div className="containerTwo">
        <img src={logoRoxo} className='logo'/>

        <h1 className="login-title">log in</h1>
        <p className="login-subtitle">enter with your credentials ou sign up in our site.</p>

        <div className='containerLogin'>

          <label>e-mail</label>
          <input type='email'></input>

          <label>password</label>
          <input type='password'></input>

          

        </div>
     
     
      </div>


    </div>
  );
}

export default App;
