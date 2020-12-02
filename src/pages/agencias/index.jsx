import React from 'react';
import HeaderComponent from '@components/HeaderComponent/';
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';
import {ReactComponent as EditIcon} from '@icons/edit.svg'
import ListaController from '@services/ListaController/';
import './index.scss';
const {useState, useEffect} = React;

export default () => {
    
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(false);
    const [agencias, setAgencias] = useState(false);
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
        ListaController.getAgencias().then(({data}) => {
            const result = data.data;
            setAgencias(result);
        })
    }, [])

    return (
        <div className="p_agencias">
            <HeaderComponent/>
            <div className="p_agencias__list">
                <div className="p_agencias__list_header">
                    <h2 className="e-h6">Agencias</h2>
                    <button onClick={()=>{crear()}} className="p_agencias__list_header_new e-p6">Nuevo</button>
                </div>
                <table className="p_agencias__table">
                    <thead className="p_agencias__table_head">
                        <tr>
                            <td>ID</td>
                            <td>Descripción</td>
                            <td>Dirección</td>
                            <td>Estado</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="p_agencias__table_body">
                    { agencias &&
                                agencias.map((a) => {
                                    return (
                                        <tr value={a.agenId}>                                        
                                        <td>{a.agenId}</td>
                                        <td>{a.agenDescripcion}</td>
                                        <td>{a.agenDireccion}</td>
                                        <td>{(a.agenEstado == "1") ? "Activo" : "Desactivado"}</td>
                                        <td><EditIcon height="20px"/></td>
                                        </tr>
                                    )
                                })
                            }

                    </tbody>
                </table>
            </div>
            <ModalComponent 
                title="Crear Agencia"
                show={showModal}
                handleClose={()=>{setShowModal(false);}}
                footer={
                    <div className="p_agencias__modal_buttons">
                        <ButtonComponent theme="secondary" action={()=>{crearSubmit()}}>Guardar</ButtonComponent>
                        <ButtonComponent theme="primary" action={()=>{crearSubmit()}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">Descripción:</label>
                    <input name="agenDescripcion" onChange={handleForm} className="p_agencias__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">Dirección:</label>
                    <input name="agenDireccion" onChange={handleForm} className="p_agencias__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_agencias__field_box">
                        <label className="p_agencias__field_label e-p4 e-p6:md">Estado:</label>
                        <select name="agenEstado" onChange={handleForm} className="p_agencias__field_select e-p6">
                            <option value="1">ACTIVO</option>
                            <option value="0">INACTIVO</option>
                        </select>
                    </div>
            </ModalComponent>
        </div>
    )
}