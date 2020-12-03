import React from 'react';
import ButtonComponent from '@components/ButtonComponent/';
import SeguridadController from '@services/SeguridadController/';
import ModalComponent from '@components/ModalComponent/';
import './index.scss'
import { useHistory } from 'react-router-dom';


const {useState, useEffect} = React;

export default (props) => {
    const [form, setForm] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [disabledForm, setDisabledForm] = useState(false);
    const history = useHistory();

    const redirectDashboard = () => {
        history.push('/dashboard');
    }

    useEffect(() => {
        console.log(sessionStorage.getItem("token"));
        if(sessionStorage.getItem("token") && sessionStorage.getItem("token").length > 0) {
            history.push('/dashboard');
        }
    },[])

    function loginSubmit() {
        const body = {
                username: form.username,
                password: form.password,
                grant_type: "password"
        }
        setIsLoading(true);
        setDisabledForm(true);
        SeguridadController.postLogin(body).then((result) => {
            if(result.status === 200){
                setForm({});
                console.log(result);
                sessionStorage.setItem("token", result.data.access_token);
                redirectDashboard();
            }
        }).catch((error) => {
            console.log('Error', error);
            setShowModalError(true);
        }).finally(() => {
            setIsLoading(false);
            setDisabledForm(false);
        });
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
                        <input disabled={disabledForm} onChange={handleForm}  name="username" className="p_login__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_login__field_box">
                        <label className="p_login__field_label e-p4 e-p6:md">Contraseña:</label>
                        <input disabled={disabledForm} onChange={handleForm}  name="password" className="p_login__field_input e-p2 e-p4:md" type="password"></input>
                    </div>
                    <div className="p_login__field_box">
                        <ButtonComponent theme="primary" action={()=>{loginSubmit()}} isLoading={isLoading}>Ingresar</ButtonComponent>
                    </div>
                </div>
            </div>
            <ModalComponent
                title=""
                show={showModalError}
                handleClose={()=>{setShowModalError(false);}}
                footer={
                    <div className="p_cuentas__modal_buttons">
                        <ButtonComponent theme="primary" action={()=>{setShowModalError(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <h3 className="e-h3">Intente de nuevo</h3>
            </ModalComponent>
        </div>
    )
}