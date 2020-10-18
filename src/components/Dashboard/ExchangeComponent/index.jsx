import React, { Component } from 'react'
import {ReactComponent as SwipeIcon} from '@icons/repeat.svg'

import './index.scss'

export default () =>{
    return (
        <section className="c_exchange__container">
            <h3>Cambio de Moneda</h3>
            <div className="c_exchange__titles">
                <p>Envías</p>
                <p>Recibes</p>
            </div>
            <div className="c_exchange__form">
                <div className="c_exchange__form_currency_origin">
                    <div className="c_exchange__input_group">
                        {/* <label className="c_exchange__form_label">
                            Envío
                        </label> */}
                        <input type="number" className="c_exchange__form_currency_mount" value={100}/>
                    </div>
                    <select className="c_exchange__form_currency_select">
                        <option value="USD">Dolares</option>
                        <option value="PEN">Soles</option>
                    </select>
                </div>
                <button className="c_exchange__button_swipe">
                    <SwipeIcon/>
                </button>
                <div className="c_exchange__form_currency_end">
                    <select className="c_exchange__form_currency_select">
                        <option value="USD">Dolares</option>
                        <option value="PEN">Soles</option>
                    </select>
                    <div className="c_exchange__input_group">
                        {/* <label className="c_exchange__form_label">
                            Recibo
                        </label> */}
                        <input type="number" className="c_exchange__form_currency_mount" value={358}/>
                   </div> 
                </div>
            </div>
        </section>
    )
}