import React from 'react';

import './index.scss'

export default () => {
    return (
        <div className="p_login">
            <div className="p_login__content">
                <div className="p_login__image">
                    <img src="./images/user.png"></img>
                </div>
                <h3 className="e-p1">Ingresar</h3>
                <div className="p_login__form">
                    <div className="p_login__field_box">
                        <label className="p_login__field_label e-p4 e-p6:md">Usuario:</label>
                        <input className="p_login__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_login__field_box">
                        <label className="p_login__field_label e-p4 e-p6:md">Contraseña:</label>
                        <input className="p_login__field_input e-p2 e-p4:md" type="password"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}