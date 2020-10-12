import React from 'react';
import AccountsComponent from '@components/Dashboard/AccountsComponent/';
import MovementsComponent from '@components/Dashboard/MovementsComponent/';
import TranferComponent from '@components/Dashboard/TransferComponent/';
import BalanceComponent from '@components/Dashboard/BalanceComponent/';
import HeaderComponent from '@components/HeaderComponent/';
import './index.scss';
export default () => {
    return (
        <>
            <HeaderComponent/>
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
                    Cambio de Dolares
                </div>
                <div class="balance">
                    <BalanceComponent/>
                </div>
            </div>
        </>
    )
}