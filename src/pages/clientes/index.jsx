import React from 'react';
import HeaderComponent from '@components/HeaderComponent/';
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';
import ListaController from '@services/ListaController/';
import {ReactComponent as EditIcon} from '@icons/edit.svg'
import './index.scss';
const {useState, useEffect} = React;

export default () => {
    
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(false);
    const [tiposDocumento, setTiposDocumento] = useState(false);
    
    function crear(){
        setShowModal(true);
    }

    function crearSubmit() {
        console.log("form", form);
    }

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }

    useEffect(() => {
        ListaController.getTipoDocumento().then(({data}) => {
            const result = data.data;
            setTiposDocumento(result);
        })
    }, [])

    return (
        <div className="p_cliente">
            <HeaderComponent/>
            <div className="p_cliente__list">
                <div className="p_cliente__list_header">
                    <h2 className="e-h6">Clientes</h2>
                    <button onClick={()=>{crear()}} className="p_cliente__list_header_new e-p6">Nuevo</button>
                </div>
                <table className="p_cliente__table">
                    <thead className="p_cliente__table_head">
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
                    <tbody className="p_cliente__table_body">
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
                    <div className="p_cliente__modal_buttons">
                        <ButtonComponent theme="secondary" action={()=>{crearSubmit()}}>Guardar</ButtonComponent>
                        <ButtonComponent theme="primary" action={()=>{crearSubmit()}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Nombres:</label>
                    <input name="nombres" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Apellido Paterno:</label>
                    <input name="apellidoPaterno" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Apellido Materno:</label>
                    <input name="apellidoMaterno" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Correo:</label>
                    <input name="correo" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Dirección:</label>
                    <input name="direccion" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Celular:</label>
                    <input name="celular" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Tipo de Documento:</label>
                    <select name="tipoDocumento" onChange={handleForm} className="p_cliente__field_select e-p6">
                        { tiposDocumento &&
                            tiposDocumento.map((documento) => {
                                return (
                                    <option value={documento.tdocId}>{documento.tdocDescripcion}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Numero de Documento:</label>
                    <input name="numeroDocumento" onChange={handleForm} className="p_cliente__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_cliente__field_box">
                    <label className="p_cliente__field_label e-p4 e-p6:md">Estado:</label>
                    <select name="estado" onChange={handleForm} className="p_cliente__field_select e-p6">
                        <option value="1">ACTIVO</option>
                        <option value="0">INACTIVO</option>
                    </select>
                </div>
            </ModalComponent>
        </div>
    )
}