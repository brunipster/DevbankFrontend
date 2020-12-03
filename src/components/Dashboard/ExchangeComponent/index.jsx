import React, { Component } from 'react'
import {ReactComponent as SwipeIcon} from '@icons/repeat.svg'

import './index.scss'

export default () =>{
    return (
        <section className="c_exchange__container">
            <h3 className="e-p1">Cambio de Moneda</h3>
            <div className="c_exchange__field">
                <div className="c_exchange__field_box">
                    <label className="c_exchange__field_label e-p4 e-p6:md">Envio:</label>
                    <input onClick={()=>{}} className="c_exchange__field_input e-p2 e-p4:md" defaultValue="1500"></input>
                </div>
                <div className="c_exchange__field_currency">
                    <p className="c_exchange__field_currency_text e-p3 e-p4:md">Dolares</p>
                </div>
            </div>
            <div className="c_exchange__swipe_currency">
                <button className="c_exchange__swipe_currency_button"><SwipeIcon/></button>
            </div>
            <div className="c_exchange__field">
                <div className="c_exchange__field_box">
                    <label className="c_exchange__field_label e-p4 e-p6:md">Recibo:</label>
                    <input onClick={()=>{}} className="c_exchange__field_input e-p2 e-p4:md" defaultValue="1500"></input>
                </div>
                <div className="c_exchange__field_currency">
                    <p className="c_exchange__field_currency_text e-p3 e-p4:md">Soles</p>
                </div>
            </div>
        </section>
    )
}