import React , {useState, useEffect} from 'react';
import {ReactComponent as NotificationIcon} from '@icons/notification.svg';
import {ReactComponent as UserIcon} from '@icons/user.svg';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './index.scss';

export default () =>{

    const history = useHistory();
    const [rol, setRol] = useState(0);


    useEffect(() => {
        setRol(sessionStorage.getItem("rol"))
    },[])

    function logout(){
        sessionStorage.clear()
        history.push("/login");
    }

    return (
        <section className="c_header__section">
            <div className="c_header__logo e-h4">DB</div>
            <nav className="c_header__navbar">
                {rol == 1 &&
                    <>
                        <Link to='/clientes' className="c_header__navbar_item e-text-medium e-p4">Clientes</Link>
                        <Link to='/agencias' className="c_header__navbar_item e-text-medium e-p4">Agencias</Link>
                        <Link to='/productos' className="c_header__navbar_item e-text-medium e-p4">Productos</Link>
                        <Link to='/cuentas' className="c_header__navbar_item e-text-medium e-p4">Mis Cuentas</Link>
                    </>
                }
            </nav>
            <ul className="c_header__options">
                <li  className="c_header__notificacion_icon">
                    <NotificationIcon/>
                </li>
                <li styles={{cursor: 'pointer'}} className="c_header__user_icon">
                    <UserIcon onClick={()=>{logout()}} />
                </li>
                
            </ul>
        </section>
    )
}