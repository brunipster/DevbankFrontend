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
    const [listClientes, setListClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [base64Image, setBase64Image] = useState("")
    const [framebase64Image, setFrameBase64Image] = useState("")
    
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
                cliFoto: base64Image,
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

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        if(inputName == "image"){
            toBase64(event.target.files[0]).then((result)=>{
                inputValue = result;
                setBase64Image(result.split(",")[1])
                setFrameBase64Image(result)
            }).catch((error)=>{
                console.log('Error', error);
            });
        }
        setForm({...form, [inputName]: inputValue})
    }

    useEffect(() => {
        setIsLoading(true);
        ClienteController.getListarClientes().then((result)=>{
            if(result.status == 200){
                setListClientes(result.data);
            }
        }).catch((error)=>{
            console.log('Error', error);
        }).finally(()=>{
            setIsLoading(false)
        });
        ListaController.getTipoDocumento().then(({data}) => {
            const result = data.data;
            setTiposDocumento([{tdocId:1, tdoc_descripcion: "DNI"}, {tdocId:2,tdoc_descripcion:  "CARNET DE EXTRANJERÍA"}]);
            //setTiposDocumento(result);
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
                        {listClientes && 
                            listClientes.map((cliente, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{cliente.cliId}</td>
                                        <td>{`${cliente.cliNombres} ${cliente.cliApePaterno} ${cliente.cliApeMaterno}`}</td>
                                        <td>{cliente.cliCorrreo}</td>
                                        <td>{cliente.cliFecNac}</td>
                                        <td>{cliente.tipoDocumento.tdocDescripcion}</td>
                                        <td>{cliente.cliNumDocumento}</td>
                                        <td>APROBADO</td>
                                        <td><EditIcon height="20px" /></td>
                                    </tr>
                                )
                            })
                        }
                        {isLoading && <tr><td colSpan="8" className="p_cliente__table_body_row_loading">Cargando...</td></tr>}
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
                        <ButtonComponent theme="primary" action={()=>{setShowModal(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <div className="p_cliente__modal_body">
                    <form>
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
                            <label className="p_cliente__field_label e-p4 e-p6:md">Clave:</label>
                            <input name="clave" onChange={handleForm} type="password" className="p_cliente__field_input e-p2 e-p4:md"></input>
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
                                <option value="">Seleccionar</option>
                                { tiposDocumento &&
                                    tiposDocumento.map((documento, index) => {
                                        return (
                                            <option key={index} value={documento.tdocId}>{documento.tdoc_descripcion}</option>
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
                        
                    </form>
                    <div>
                        <div className="p_cliente__field_box">
                            <label className="p_cliente__field_label e-p4 e-p6:md">Imagen:</label>
                            <input onChange={handleForm} type="file" name="image" accept=".jpeg, .png, .jpg">
                            </input>
                        </div>
                        {framebase64Image &&
                            <iframe src={framebase64Image} className="p_cliente__iframe_image"></iframe>
                        }
                    </div>
                 
                </div>
                
            </ModalComponent>
            <ModalComponent
                title=""
                show={showModalSuccess}
                handleClose={()=>{setShowModalSuccess(false);}}
                footer={
                    <div className="p_cliente__modal_buttons">
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
                    <div className="p_cliente__modal_buttons">
                        <ButtonComponent theme="primary" action={()=>{setShowModalError(false);}}>Cerrar</ButtonComponent>
                    </div>
                }
            >
                <h3 className="e-h3">Ha ocurrido un error al registrar el cliente</h3>
            </ModalComponent>
        </div>
    )
}