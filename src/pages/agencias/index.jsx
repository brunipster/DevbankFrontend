import React from 'react';
import HeaderComponent from '@components/HeaderComponent/';
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';
import {ReactComponent as EditIcon} from '@icons/edit.svg'
import './index.scss';
const {useState} = React;

export default () => {
    
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(false);
    
    function crear(){
        setShowModal(true);
    }

    function crearSubmit() {
        console.log("fprm", form);
    }

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }


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
                            <td>Numero de Cuenta</td>
                            <td>CCI</td>
                            <td>Saldo</td>
                            <td>Estado</td>
                            <td>Tipo</td>
                            <td>Usuario</td>
                            <td>Producto</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="p_agencias__table_body">
                        <tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
                        <tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
                        <tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
<tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
<tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
<tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
<tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>
<tr>
                            <td>48580293840221</td>
                            <td>123485802938402217976</td>
                            <td>S/.4500</td>
                            <td>Activo</td>
                            <td>Debito</td>
                            <td>Bruno Reyes</td>
                            <td>LatamPass</td>
                            <td><EditIcon height="20px"/></td>
                        </tr>

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
                    <label className="p_agencias__field_label e-p4 e-p6:md">Numero de Cuenta:</label>
                    <input name="nrocuenta" onChange={handleForm} className="p_agencias__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">CCI:</label>
                    <input name="cci" onChange={handleForm} className="p_agencias__field_input e-p2 e-p4:md"></input>
                </div>
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">Tipo de Cuenta:</label>
                    <select name="tipocuenta" onChange={handleForm} className="p_agencias__field_select e-p6">
                        <option value="4">Debito Sueldo S/.1500</option>
                        <option value="5">Debito Sueldo S/.1500</option>
                    </select>
                </div>
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">Usuario:</label>
                    <select name="usuario" onChange={handleForm} className="p_agencias__field_select e-p6">
                        <option value="4">Debito Sueldo S/.1500</option>
                        <option value="5">Debito Sueldo S/.1500</option>
                    </select>
                </div>
                <div className="p_agencias__field_box">
                    <label className="p_agencias__field_label e-p4 e-p6:md">Producto:</label>
                    <select name="producto" onChange={handleForm} className="p_agencias__field_select e-p6">
                        <option value="4">Debito Sueldo S/.1500</option>
                        <option value="5">Debito Sueldo S/.1500</option>
                    </select>
                </div>
            </ModalComponent>
        </div>
    )
}