import React, { FunctionComponent, useState } from 'react';
import '../../styles/main.css';
import LoginForm from '../../composants/login-form/LoginForm';
import { useDispatch } from 'react-redux';
import { postLoginUser } from '../../actions/user.action';

const SignIn: FunctionComponent = () => {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');

  /*** Fonction d'autentification d'un utilisateur***/
  const handleLigin = () =>{
    const user = {
      username,
      password
    };
    dispatch(postLoginUser(user));
  }
  //const name: String = 'React';
  return (
    <main className="main bg-dark">
  
  <div>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLigin}>Login</button>
    </div>

    </main>
  );
}

export default SignIn;

// function postLoginUser(user: { username: string; password: string; }): any {
//   throw new Error('Function not implemented.');
// }
