import React from 'react';
import AccountsComponent from '@components/Dashboard/AccountsComponent/';
import MovementsComponent from '@components/Dashboard/MovementsComponent/';
import TranferComponent from '@components/Dashboard/TransferComponent/';
// import BalanceComponent from '@ExchangeComponentBalanceComponent/';
import HeaderComponent from '@components/HeaderComponent/';
import ExchangeComponent from '@components/Dashboard/ExchangeComponent/';
import './index.scss';
export default () => {
    return (
        <div className="dashboard">
            <HeaderComponent/>
            <div className="wrapper">
                <div class="container">
                    <div class="accounts">
                        <AccountsComponent/>
                    </div>
                    <div class="transaction">
                        <MovementsComponent/>
                    </div>
                    <div class="transfer">
                        <TranferComponent/>
                    </div>
                    <div class="exchange">
                        <ExchangeComponent/>
                    </div>
                    <div class="balance">
                        {/* <BalanceComponent/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}