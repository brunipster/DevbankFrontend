import React from 'react'
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';

import './index.scss'
import SolicitudesController from '../../../services/SolicitudesController';

const {useState, useEffect} = React;

export default (props) =>{
    const [showModal, setShowModal] = useState(false);
    const [showModalError, setShowModalError] = useState(false);


    function crear(){
        setShowModal(true);
    }

    function crearSolictitud(){
        //SESSION
        const body = {
            "soliEstado":"1",
            "soliUsu":"strngrwrld",
            "soliOperacion":"CREAR"
        }
        SolicitudesController.postProcesarSolicitud(body).then(({data}) => {
            const result = data.data;
            console.log(data)
        }).catch((error) => {
            console.log('Error', error);
            //setShowModal(false);
            setShowModalError(true);
        });
    }

    return (
        <div className="c_token__container">
            <ModalComponent 
                title="Crear Cliente"
                show={showModal}
                handleClose={()=>{console.log("wwwwww");setShowModal(false);}}                
            >         
                <div>
                <h3 className="e-h3" >Active su token para poder realizar movimientos!</h3>
                <button onClick={()=>{crearSolictitud()}} className="btn_atc c_token__button e-p3 e-p6:lg" >Activar</button>
                </div>
            </ModalComponent>
                <h3 className="e-p1"></h3>
                <button className="c_token__button e-p3 e-p6:md" onClick={()=>{crear()}} >Solicitar Código de Seguridad</button>
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