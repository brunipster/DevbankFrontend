import React from 'react'

import './index.scss'

export default (props) =>{
    return (
        <div className="c_transfer__container">
            <h3>Trasnferencias</h3>

            <div className="c_transfer__accounts_input_group">
                <label>Cuenta Origen</label>
                <select className="c_transfer__select">
                    <option>Debito Sueldo S/.1500</option>
                </select>
            </div>

            <div className="c_transfer__accounts_input_group">
                <label>Cuenta Destino</label>
                <input className="c_transfer__input" placeholder="0000-0000-00000000000"></input>
            </div>

            <div className="c_transfer__footer">
                <label><input type="checkbox" name="" id=""/>Acepto los terminos y condiciones</label>
                <button className="c_transfer__button">Transferir</button>
            </div>

        </div>
    )
}