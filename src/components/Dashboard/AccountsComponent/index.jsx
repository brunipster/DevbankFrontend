import React from 'react';
import CardComponent from '@components/Dashboard/CardComponent'
import './index.scss'

export default (props) => {
    return (
        <section className="c_accounts__section">
            <div className="c_accounts__balance">
                <div className="c_accounts__balance_total">
                    <h4>Saldo</h4>
                    <p>S/780.00</p>
                </div>
                <div className="c_accounts__balance_limit">
                    <h4>Limite de Credito</h4>
                    <p>S/1500.00</p>
                </div>
            </div>
            <div className="c_accounts__numbers">
                <div className="c_accounts__share_content">
                    <h4>Numero de Cuenta:</h4>
                    <div className="c_accounts__share_number">
                        <p>0011-0138-02000546489</p>
                        <button className="">share</button>
                    </div>
                </div>
                <div className="c_accounts__share_content">
                    <h4>CCI:</h4>
                    <div className="c_accounts__share_number">
                        <p>011-138-02000546489-52</p>
                        <button className="">share</button>
                    </div>
                </div>
            </div>
            <div className="c_accounts__card_selected">
                <CardComponent/>
            </div>
        </section>
    )
}