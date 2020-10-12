import React from 'react';
import AccountsComponent from '@components/Dashboard/AccountsComponent/';
import MovementsComponent from '@components/Dashboard/MovementsComponent/';
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
                <div class="balance">
                    Balance
                </div>
                <div class="transaction">
                    <MovementsComponent/>
                </div>
                <div class="transfer">
                    Trasnferencias
                </div>
                <div class="exchange">
                    Cambio de Dolares
                </div>
            </div>
        </>
    )
}