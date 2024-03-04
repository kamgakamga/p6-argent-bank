import React, { FunctionComponent, useState, useEffect } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { clearMessage } from "../../actions/message";



const SignIn: FunctionComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>)  : void  => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setPassword(event.target.value);
  };

  const isLoggedIn = false;

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };
  
  const handleLogin = async () => {
    const user = {
      username,
      password
    };
      console.log(username);
      console.log(password);

    try {
      login(user);
      dispatch(clearMessage());
      // Connexion réussie, effectuez les actions nécessaires ici (par exemple, redirection, rechargement de la page, etc.)
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Gérez l'erreur de connexion ici (par exemple, affichez un message d'erreur à l'utilisateur)
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }


  return (
    <main className="main bg-dark">
  
  <div>
  <section className="sign-in-content">
      <i className="fa fa-user-circle  sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name='username' onChange={e => handleUsernameChange(e)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' onChange={e => handlePasswordChange(e)}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me"  />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button 
          type='submit'
           className="sign-in-button"
            >
                Sign In
          </button> 
        {/* <!--  --> */}
      </form>
    </section>
    </div>
    </main>
  );
}

export default SignIn;

