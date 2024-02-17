import React, {FunctionComponent} from 'react';
import Footer from './composants/footer/Footer';
import Header from './composants/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import PageNotFound from './pages/page-not-found/PageNotFound';
import SignIn from './pages/sign-in/Sign-in';
import User from './pages/user/User';

const App: FunctionComponent = () => {

        //const name: String = 'React';

       return ( 
            <Router> 
              <Header/>
                <Routes>
                      <Route path="/"  Component={Welcome} />
                      <Route path="/sign-in.html"  Component={SignIn} />
                      <Route path="/user"  Component={User} />
                      <Route path="*"  Component={PageNotFound} />
                </Routes> 
                <Footer />   
            </Router>
         );
}

export default App;