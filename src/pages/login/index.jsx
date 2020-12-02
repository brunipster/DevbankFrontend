import React from 'react';
import ButtonComponent from '@components/ButtonComponent/';

import './index.scss'
const {useState, useEffect} = React;

export default (props) => {
    const [form, setForm] = useState(false);

    function loginSubmit() {
        console.log("loguear")
    }

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }

    return (
        <div className="p_login">
            <div className="p_login__content">
                <div className="p_login__image">
                    <img src="./images/user.png" alt="login_user"></img>
                </div>
                <h3 className="e-p1">Ingresar</h3>
                <div className="p_login__form">
                    <div className="p_login__field_box">
                        <label className="p_login__field_label e-p4 e-p6:md">Usuario:</label>
                        <input name="username" className="p_login__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_login__field_box">
                        <label className="p_login__field_label e-p4 e-p6:md">Contraseña:</label>
                        <input name="password" className="p_login__field_input e-p2 e-p4:md" type="password"></input>
                    </div>
                    <div className="p_login__field_box">
                        <ButtonComponent theme="primary" action={()=>{loginSubmit()}}>Ingresar</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}