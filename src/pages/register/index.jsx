import React from 'react';

import './index.scss'

export default (props) => {
    return (
        <div className="p_register">
            <div className="p_register__content">
                <div className="p_register__image">
                    <img src="./images/user.png"></img>
                </div>
                <h3 className="e-p1">Registrar</h3>
                <div className="p_register__form">
                    <div className="p_register__field_box">
                        <label className="p_register__field_label e-p4 e-p6:md">Usuario:</label>
                        <input className="p_register__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_register__field_box">
                        <label className="p_register__field_label e-p4 e-p6:md">Contraseña:</label>
                        <input className="p_register__field_input e-p2 e-p4:md" type="password"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}