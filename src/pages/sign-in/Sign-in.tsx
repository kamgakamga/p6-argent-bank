import React, { FunctionComponent, useState, useEffect } from 'react';
import '../../styles/main.css';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { RootState } from './../../reducers/types';




const SignIn: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const message = useSelector((state: RootState) => state.message);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>)  : void  => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    const user = {
      email,
      password
    };
    setLoading(true);
      console.log('username:',email);
      console.log('password:',password);

      dispatch(login(user))
      .unwrap()
      .then(() => {
        navigate("/user");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  }
  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }


  return (
    <main className="main bg-dark">
  
  <div>
  <section className="sign-in-content">
      <i className="fa fa-user-circle  sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input type="text" id="email" name='email' onChange={e => handleUsernameChange(e)}/>
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

