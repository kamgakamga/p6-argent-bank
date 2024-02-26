import React, { FunctionComponent, useState } from 'react';
import '../../styles/main.css';
import { useDispatch } from 'react-redux';
import { postLoginUser } from '../../actions/user.action';
import LoginForm from '../../composants/login-form/LoginForm';

const SignIn: FunctionComponent = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');

  /*** Fonction d'autentification d'un utilisateur***/
  const handleLigin = async () =>{
    const user = {
      email,
      password
    };
    dispatch(await postLoginUser(user));
  }
  //const name: String = 'React';
  return (
    <main className="main bg-dark">
  
  <div>
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLigin}>Login</button>
      {/* <LoginForm></LoginForm> */}
    </div>
    </main>
  );
}

export default SignIn;

