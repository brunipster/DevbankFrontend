import React from 'react';
import {ReactComponent as NotificationIcon} from '@icons/notification.svg';
import {ReactComponent as UserIcon} from '@icons/user.svg';
import './index.scss';

export default () =>{
    return (
        <section className="c_header__section">
            <div className="c_header__logo">DevBank</div>
            <ul className="c_header__options">
                <li  className="c_header__notificacion_icon">
                    <NotificationIcon/>
                </li>
                <li className="c_header__user_icon">
                    <UserIcon />
                </li>
                
            </ul>
        </section>
    )
}