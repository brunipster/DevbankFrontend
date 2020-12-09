import React, {useState, useEffect} from 'react';
import CardComponent from '@components/Dashboard/CardComponent'
import ModalComponent from '@components/ModalComponent'
import ButtonComponent from '@components/ButtonComponent'
import CardSelection from '@components/CardSelection'
import ListaController from '@services/ListaController/';
import ClienteController from '@services/ClienteController/';
import {ReactComponent as ShareIcon} from '@icons/share-link.svg'
import './index.scss'

export default (props) => {
    const [form, setForm] = useState({});
    const [tipoCuenta, setTipoCuenta] = useState([]);
    const [productos, setProductos] = useState([]);
    const [showModalAccount, setShowModalAccount] = useState(false);
    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setForm({...form, [inputName]: inputValue})
    }

    useEffect(()=>{
        ListaController.getTipoCuenta().then(({data}) => {
            const result = data.data;
            setTipoCuenta(result);
        })

        ListaController.getProductos().then(({data}) => {
            const result = data.data;
            console.log(result)
            setProductos(result);
        })
    }, [])

    function crearCuenta(){
        const body =  {
                ctaNuCuenta: "0011013802000546489",
                ctaNuCuentaCci: "0111380200054648952",
                ctaSaldo: 0,
                ctaEstId: true,
                tipoCuenta: {
                    tctaId: form.tipo_cuenta
                },
                usuario: {
                    usuId: form.tipoUsuario
                },
                producto: {
                    prodId: form.producto
                }
            }
        ClienteController.postRegisterCuenta(body).then((result) => {
            if(result.status === 200){
                setForm({});
                setShowModalAccount(false);
            }
        }).catch((error) => {
            console.log('Error', error);
            setShowModalAccount(false);
        });
    }

    return (
        <div className="c_accounts__container">
            <div>
                <div className="c_accounts__balance">
                    <div className="c_accounts__balance_total">
                        <h4 className="e-p1">Saldo</h4>
                        <p className="e-p2 e-p3:md">S/780.00</p>
                    </div>
                    <div className="c_accounts__balance_limit">
                        <h4 className="e-p3 e-p5:md">Limite de Credito</h4>
                        <p className="e-p4 e-p6:md">S/1500.00</p>
                    </div>
                </div>
                <div className="c_accounts__numbers">
                    <div className="c_accounts__share_content">
                        <h4 className="e-p4">Numero de Cuenta:</h4>
                        <div className="c_accounts__share_number">
                            <p className="e-p2 e-p5:md">0011-0138-02000546489</p>
                            <button className="c_accounts__share_button"><ShareIcon/></button>
                        </div>
                    </div>
                    <div className="c_accounts__share_content">
                        <h4 className="e-p4">CCI:</h4>
                        <div className="c_accounts__share_number">
                            <p className="e-p2 e-p5:md">011-138-02000546489-52</p>
                            <button className="c_accounts__share_button"><ShareIcon/></button>
                        </div>
                    </div>
                </div>
                <ButtonComponent className="c_accounts__button_create" action={()=>{setShowModalAccount(true)}}>Crear nueva cuenta</ButtonComponent>
                <div className="c_accounts__card_selected">
                    <CardComponent type={1}/>
                </div>
            </div>
            <div className="c_accounts__cards">
                <div className="c_accounts__card_list">
                    <CardComponent type={2} minimized={true}/>
                    <CardComponent type={3} minimized={true}/>
                    <CardComponent type={4} minimized={true}/>
                </div>
                <div className="c_accounts__card_list_shadow"></div>
            </div>
            <ModalComponent handleClose={()=>{setShowModalAccount(false)}} show={showModalAccount} title="Agregar Cuenta" footer={
                <ButtonComponent action={()=>{crearCuenta()}}>Agregar</ButtonComponent>
            }>
                <div className="p_cuentas__field_box">                    
                    <p className="e-p2">Productos</p>
                    <CardSelection handleSelected={(id)=>{setForm({...form, producto: id})}} colecctions={
                        productos.map((p)=>{return ({title:p.prodDescripcion, id: p.prodId})})}
                    />
                </div>
                <div className="p_cuentas__field_box">                    
                    <p className="e-p2">Tipo de Cuenta</p>
                    <CardSelection handleSelected={(id)=>{setForm({...form, tipo_cuenta: id})}} colecctions={
                        tipoCuenta.map((p)=>{return ({title:p.tctaDescripcion, id: p.tctaId})})}
                    />
                </div>
            </ModalComponent>
        </div>
    )
}