import React , {useEffect} from 'react';
import AccountsComponent from '@components/Dashboard/AccountsComponent/';
import MovementsComponent from '@components/Dashboard/MovementsComponent/';
import TranferComponent from '@components/Dashboard/TransferComponent/';
// import BalanceComponent from '@ExchangeComponentBalanceComponent/';
import HeaderComponent from '@components/HeaderComponent/';
import ExchangeComponent from '@components/Dashboard/ExchangeComponent/';
import { useHistory } from 'react-router-dom';
import './index.scss';
export default () => {

    const history = useHistory();
    
    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            history.push('/login');
        }
    },[])
    return (
        <div className="dashboard">
            <HeaderComponent/>
            <div className="wrapper">
                <div className="container">
                    <div className="accounts">
                        <AccountsComponent/>
                    </div>
                    <div className="transaction">
                        <MovementsComponent/>
                    </div>
                    <div className="transfer">
                        <TranferComponent/>
                    </div>
                    <div className="exchange">
                        <ExchangeComponent/>
                    </div>
                    <div className="balance">
                        {/* <BalanceComponent/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}