import React from 'react';
import HeaderComponent from '@components/HeaderComponent/';
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';

import ListaController from '@services/ListaController/';
import ClienteController from '@services/ClienteController/';
import {ReactComponent as EditIcon} from '@icons/edit.svg'
import './index.scss';
const {useState, useEffect} = React;

export default () => {
    
    const [showModal, setShowModal] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [form, setForm] = useState(false);
    const [tiposDocumento, setTiposDocumento] = useState(false);
    
    function crear(){
        setShowModal(true);
    }

    function crearSubmit() {
        const body = {
            cliente: {
                agencia: {
                    agenId: 1
                },
                cliApeMaterno: form.apellidoMaterno,
                cliApePaterno: form.apellidoPaterno,
                cliCorrreo: form.correo,
                cliDireccion: form.direccion,
                cliFecNac: '2020-12-02T00:08:53.114Z',
                cliNombres: form.nombres,
                cliNumCelular: form.celular,
                cliNumDocumento: form.numeroDocumento,
                
                tipoDocumento: {
                    tdocId: form.tipoDocumento
                }
            },
            roles: [
                {
                    rolId: 2,
                }
            ],
            usuClave: form.clave,
            usuEstado: 1,
            usuNombre: `${form.nombres} ${form.apellidoPaterno} ${form.apellidoMaterno}`
        }
        ClienteController.postRegister(body).then((result) => {
            if(result.status === 200){
                setForm({});
                setShowModal(false);
                setShowModalSuccess(true);
            }
        }).catch((error) => {
            console.log('Error', error);
            setShowModal(false);
            setShowModalError(true);
        });
    }

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }

    useEffect(() => {
        ListaController.getTipoDocumento().then(({data}) => {
            const result = data.data;
            setTiposDocumento([{tdocId:1, tdoc_descripcion: "DNI"}, {tdocId:2,tdoc_descripcion:  "CARNET DE EXTRANJERÍA"}]);
            //setTiposDocumento(result);
        })
    }, [])

    return (
        <div className="p_cuentas">
            <HeaderComponent/>
            <div className="p_cuentas__list">
                <div className="p_cuentas__list_header">
                    <h2 className="e-h6">Clientes</h2>
                    <button onClick={()=>{crear()}} className="p_cuentas__list_header_new e-p6">Nuevo</button>
                </div>
                <table className="p_cuentas__table">
                    <thead className="p_cuentas__table_head">
                        <tr>
                            <td>Id</td>
                            <td>Numero Completo</td>
                            <td>Correo</td>
                            <td>Direccion</td>
                            <td>Celular</td>
                            <td>Tipo de Documento</td>
                            <td>Numero de Documento</td>
                            <td>Estado</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="p_cuentas__table_body">
                        <tr>
                            <td>123</td>
                            <td>Bruno Reyes</td>
                            <td>brunorebu12@gmail.com</td>
                            <td>997919677</td>
                            <td>DNI</td>
                            <td>70287443</td>
                            <td>APROBADO</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ModalComponent 
                title="Crear Cliente"
                show={showModal}
                handleClose={()=>{setShowModal(false);}}
                footer={
                    <div className="p_cuentas__modal_buttons">
                        <ButtonComponent theme="secondary" action={()=>{crearSubmit()}}>Guardar</ButtonComponent>
                        <ButtonComponent theme="primary" action={()=>{setShowModal(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <form>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Nombres:</label>
                        <input name="nombres" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Apellido Paterno:</label>
                        <input name="apellidoPaterno" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Apellido Materno:</label>
                        <input name="apellidoMaterno" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Correo:</label>
                        <input name="correo" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Clave:</label>
                        <input name="clave" onChange={handleForm} type="password" className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Dirección:</label>
                        <input name="direccion" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Celular:</label>
                        <input name="celular" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Tipo de Documento:</label>
                        <select name="tipoDocumento" onChange={handleForm} className="p_cuentas__field_select e-p6">
                            <option value="">Seleccionar</option>
                            { tiposDocumento &&
                                tiposDocumento.map((documento) => {
                                    return (
                                        <option value={documento.tdocId}>{documento.tdoc_descripcion}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Numero de Documento:</label>
                        <input name="numeroDocumento" onChange={handleForm} className="p_cuentas__field_input e-p2 e-p4:md"></input>
                    </div>
                    <div className="p_cuentas__field_box">
                        <label className="p_cuentas__field_label e-p4 e-p6:md">Estado:</label>
                        <select name="estado" onChange={handleForm} className="p_cuentas__field_select e-p6">
                            <option value="1">ACTIVO</option>
                            <option value="0">INACTIVO</option>
                        </select>
                    </div>
                </form>
            </ModalComponent>
            <ModalComponent
                title=""
                show={showModalSuccess}
                handleClose={()=>{setShowModalSuccess(false);}}
                footer={
                    <div className="p_cuentas__modal_buttons">
                        <ButtonComponent theme="primary" action={()=>{setShowModalSuccess(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <h3 className="e-h3">Se registro correctamente el cliente</h3>
            </ModalComponent>
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
                <h3 className="e-h3">Ha ocurrido un error al registrar el cliente</h3>
            </ModalComponent>
        </div>
    )
}