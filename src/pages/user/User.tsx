import React, { FunctionComponent } from 'react';
import "../../styles/main.css";
import {DATA} from './../../account';
import Account from '../../composants/account/Account';
import Buttom from '../../composants/buttom/Buttom';

const User: FunctionComponent = () => {
     
        const EDIT_NAME = 'Edit Name';

  return (
    <main className="main bg-dark">
        <div className="header">
           <h1>Welcome back<br />Tony Jarvis!</h1>
              <Buttom title={EDIT_NAME} />  
        </div>
         {

           DATA.map((data) => (
                        <Account key={data.id} data ={data} />
                ))
         }  
    </main>
  );
}

export default User;