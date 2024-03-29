import React, { FunctionComponent } from "react";

export const LoginForm: FunctionComponent = () => {

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle  sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input type="text" id="email"/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        <a href="./user.html" className="sign-in-button">Sign In</a>
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        {/* <!--  --> */}
      </form>
    </section>
  );
}
export default LoginForm;