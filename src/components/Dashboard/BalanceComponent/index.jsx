import React, {useState, useEffect} from 'react'
import TransferenciaController from '@services/TransferenciaController/';
import ClienteController from '@services/ClienteController/';
import ListaController from '@services/ListaController/';
import ButtonComponent from '@components/ButtonComponent/';
import './index.scss'

export default (props) =>{

    const [form, setForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [listTipoServicios, setListTipoServicios] = useState([]);
    const [listCuentas, setListCuentas] = useState([]);
    const [listServicios, setListServicios] = useState([]);

    function submitPagar() {
        const body = {
            trfrnConcepto: form.concepto,
            trfrnCuentaReceptora: form.cuenta,
            trfrnCuentaRemitente: form.cuenta,
            trfrnMonto: form.monto,
            trfrnServicio:form.servicio,
            trfrnTipoMovimientoDes: "",
            trfrnTipoMovimientoId: 1,
            trfrnTipoServicio: form.tipo_servicio
        }
        setIsLoading(true);
        TransferenciaController.postRegister(body).then(()=>{
            setIsSuccess(true);
        }).catch(()=>{
            setIsSuccess(false);
        }).finally(()=>{
            setIsLoading(false);
        })
    }

    function handleForm(event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        if(inputName === "tipo_servicio"){
          console.log("inputValue", inputValue)
          handleTipoServicio(inputValue)
        }
        setForm({...form, [inputName]: inputValue})
    }

    function handleTipoServicio(tipo) {
      setListServicios([]);
      ListaController.getServicios(tipo).then(({data}) => {
          console.log(data.data)
        setListServicios(data.data);
      }).catch(error=> console.log(error)).finally()
    }

    function resetForm(){
        setIsLoading(false)
        setIsSuccess(false)
    }

    useEffect(()=>{
      ListaController.getTiposServicios().then(({data}) => {
        console.log(data)
        if(data.data){
            setListTipoServicios(data.data)
        }
      }).catch(error=> console.log(error)).finally()
      console.log("sessionStorage.getItem",sessionStorage.getItem("user_id"))
      ClienteController.getCuentas().then(result =>{
        const resultado = result.data.data;
        setListCuentas(resultado);
        console.log(result);
      })
    },[])

    return (
        <div className="c_transfer__container">
            <h3 className="e-p1">Pagos de Servicios</h3>
            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Cuenta</label>
                <select name="cuenta" onChange={handleForm} className="c_transfer__select e-p6">
                    <option>Seleccione una Cuenta</option> 
                    {listCuentas.length > 0 &&
                        listCuentas.map((serv,index) =>{
                            return (<option key={index} value={serv.ctaNuCuenta}>{serv.ctaNuCuenta}</option> )
                          }
                        )
                    }
                </select>
            </div>
            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Tipo de Servicios</label>
                <select name="tipo_servicio" onChange={handleForm} className="c_transfer__select e-p6">
                    <option>Seleccione un Tipo de Servicio</option> 
                    {listTipoServicios.length > 0 &&
                        listTipoServicios.map((serv,index) =>{
                            return (<option key={index} value={serv.tserlId}>{serv.tserDescripcion}</option> )
                          }
                        )
                    }
                </select>
            </div>

            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Servicios</label>
                <select name="servicio" onChange={handleForm} className="c_transfer__select e-p6">
                    <option>Seleccionar un Servicio</option> 
                    {
                        listServicios.map((serv,index) =>{
                            return(<option  key={index} value={serv.servId}>{serv.servNombre}</option>)}
                        )
                        
                    }
                </select>
            </div>

            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Codigo de Servicio</label>
                <input  name="codigo" onChange={handleForm} className="c_transfer__input e-p6" placeholder="0000-0000-00000000000"></input>
            </div>

            <div className="c_transfer__accounts_input_group">
                <label className="e-p5">Monto</label>
                <input name="monto" onChange={handleForm} className="c_transfer__input e-p6" placeholder=""></input>
            </div>

            <div className="c_transfer__footer">
                <input  name="terminos" onChange={handleForm} type="checkbox" name="" id=""/><label className="e-p4 e-p6:md">Acepto los terminos y condiciones</label>
                <ButtonComponent className="c_transfer__button e-p3 e-p6:md" action={()=>{submitPagar()}} isLoading={isLoading}>Pagar</ButtonComponent>
            </div>
            {(isLoading || isSuccess) &&
                <div className="c_transfer__layer">
                    {isLoading &&
                        <div className="c_transfer__loader"></div>
                    }
                    {isSuccess &&
                        <>
                          <p className="e-p2">Se realizó el pago de manera Exitosa</p>
                          <ButtonComponent action={()=>{resetForm()}}>Entendido</ButtonComponent>
                        </>
                    }
                </div>
            }
        </div>
    )
}