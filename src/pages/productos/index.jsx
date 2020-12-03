import React from 'react';
import HeaderComponent from '@components/HeaderComponent/';
import ModalComponent from '@components/ModalComponent/';
import ButtonComponent from '@components/ButtonComponent/';

import ListaController from '@services/ListaController/';
import ClienteController from '@services/ClienteController/';
import {ReactComponent as EditIcon} from '@icons/edit.svg';
import './index.scss';

const {useState, useEffect} = React;


export default () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [form, setForm] = useState(false);
    const [productos, setProductos] = useState(false);

    function crear(){
        setShowModal(true);
    }

    function crearSubmit() {
        const body = {
            producto: {
                //prodId: form.prodId,
                prodDescripcion: form.prodDescripcion,
                prodEstId: form.prodEstId
            }
        }

    }
    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }
    useEffect(() => {
        ListaController.getProductos().then(({data}) => {
            const result = data.data;
            console.log(result)
            setProductos(result);
        })
    }, [])
    return (
        <div className="p_productos" >
            <HeaderComponent/>
            <div className="p_productos__list">
                <div className="p_productos__list_header">
                    <h2 className="e-h6">Productos</h2>
                    <button onClick={()=>{crear()}} className="p_productos__list_header_new e-p6">Nuevo</button>
                </div>
                <table className="p_productos__table">
                    <thead className="p_productos__table_head">
                        <tr>
                            <td>ID</td>
                            <td>Producto</td>
                            <td>Estado</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="p_productos__table_body">

                            { productos &&
                                productos.map((p,index) => {
                                    return (
                                        <tr key={index} value={p.prodId}> 
                                            <td>{p.prodId}</td>                                     
                                            <td>{p.prodDescripcion}</td>
                                            <td><EditIcon height="20px"/></td>                                   
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
            <ModalComponent 
                title="Crear Producto"
                show={showModal}
                handleClose={()=>{setShowModal(false);}}
                footer={
                    <div className="p_productos__modal_buttons">
                        <ButtonComponent theme="secondary" action={()=>{crearSubmit()}}>Guardar</ButtonComponent>
                        <ButtonComponent theme="primary" action={()=>{setShowModal(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <form>

                    <div className="p_productos__field_box">
                        <label className="p_productos__field_label e-p4 e-p6:md">Descripción:</label>
                        <input name="prodDescripcion" onChange={handleForm} className="p_productos__field_input e-p2 e-p4:md"></input>
                    </div>


                    <div className="p_productos__field_box">
                        <label className="p_productos__field_label e-p4 e-p6:md">Estado:</label>
                        <select name="prodEstId" onChange={handleForm} className="p_productos__field_select e-p6">
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
                    <div className="p_productos__modal_buttons">
                        <ButtonComponent theme="primary" action={()=>{setShowModalSuccess(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <h3 className="e-h3">Se registro correctamente el producto</h3>
            </ModalComponent>
            <ModalComponent
                title=""
                show={showModalError}
                handleClose={()=>{setShowModalError(false);}}
                footer={
                    <div className="p_productos__modal_buttons">
                        <ButtonComponent theme="primary" action={()=>{setShowModalError(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <h3 className="e-h3">Ha ocurrido un error al registrar el producto</h3>
            </ModalComponent>
        </div>
    )
}