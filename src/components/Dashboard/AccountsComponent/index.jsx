import React from 'react';
import CardComponent from '@components/Dashboard/CardComponent'
import {ReactComponent as ShareIcon} from '@icons/share-link.svg'
import './index.scss'

export default (props) => {
    return (
        <div className="c_accounts__container">
            <div>
                <div className="c_accounts__balance">
                    <div className="c_accounts__balance_total">
                        <h4 className="e-p1">Saldo</h4>
                        <p className="e-p2 e-p3:md">S/780.00</p>
                    </div>
                    <div className="c_accounts__balance_limit">
                        <h4 className="e-p3 e-p5:md">Limite de Credito</h4>
                        <p className="e-p4 e-p6:md">S/1500.00</p>
                    </div>
                </div>
                <div className="c_accounts__numbers">
                    <div className="c_accounts__share_content">
                        <h4 className="e-p4">Numero de Cuenta:</h4>
                        <div className="c_accounts__share_number">
                            <p className="e-p2 e-p5:md">0011-0138-02000546489</p>
                            <button className="c_accounts__share_button"><ShareIcon/></button>
                        </div>
                    </div>
                    <div className="c_accounts__share_content">
                        <h4 className="e-p4">CCI:</h4>
                        <div className="c_accounts__share_number">
                            <p className="e-p2 e-p5:md">011-138-02000546489-52</p>
                            <button className="c_accounts__share_button"><ShareIcon/></button>
                        </div>
                    </div>
                </div>
                <div className="c_accounts__card_selected">
                    <CardComponent type={1}/>
                </div>
            </div>
            <div className="c_accounts__cards">
                <div className="c_accounts__card_list">
                    <CardComponent type={2} minimized={true}/>
                    <CardComponent type={3} minimized={true}/>
                    <CardComponent type={4} minimized={true}/>
                </div>
                <div className="c_accounts__card_list_shadow"></div>
            </div>
        </div>
    )
}