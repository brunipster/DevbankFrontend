import React from 'react'

import './index.scss'

export default (props) =>{
    return (
        <div className="c_transfer__container">
            <h3 className="e-p1">Transferencias</h3>

            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Cuenta Origen</label>
                <select className="c_transfer__select e-p6">
                    <option>Debito Sueldo S/.1500</option>
                </select>
            </div>

            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Cuenta Destino</label>
                <input className="c_transfer__input e-p6" placeholder="0000-0000-00000000000"></input>
            </div>

            <div className="c_transfer__footer">
                <input type="checkbox" name="" id=""/><label className="e-p4 e-p6:md">Acepto los terminos y condiciones</label>
                <button className="c_transfer__button e-p3 e-p6:md">Transferir</button>
            </div>

        </div>
    )
}