import React, { FunctionComponent } from 'react';
import "../../styles/main.css";
import Buttom from '../buttom/Buttom';

type Props = {
        data : {
                id:number,
                intitule:string,
                amount:string,
                balance:string
        }
}

const Account: FunctionComponent<Props> = ({data}) => {

  const VIEW_TRANSACTIONS: string = 'View transactions';

  return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{data.intitule}</h3>
          <p className="account-amount">{data.amount}</p>
          <p className="account-amount-description">{data.balance}</p>
        </div>
        <Buttom title={VIEW_TRANSACTIONS} />
      </section>
  );
}

export default Account;