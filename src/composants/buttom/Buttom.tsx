import React, { FunctionComponent } from 'react';
import "../../styles/main.css";

type Props ={
        title:string
}

const Buttom: FunctionComponent<Props> = (title) => {
        return (
              <div className="account-content-wrapper cta">
                     <button className="transaction-button edit-button">{title.title}</button>
              </div>);
}

export default Buttom;