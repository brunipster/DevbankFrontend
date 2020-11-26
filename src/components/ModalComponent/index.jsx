import React from 'react';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import './index.scss';
const { useState, useEffect } = React;
export default (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (props.show) {
            setShow(true);
        } else {
            setShow(false);
        }
    },[props.show])

    function onCloseModal() {
        props.handleClose();
    };

    return (
        <div className={`c_modal__wrapper ${show ? '':'hide'}`}>
            <div className="c_modal">
                <div className="c_modal__header">
                    <h3 className="c_modal__header_title e-p1">{ props.title }</h3>
                    <CloseIcon className="c_modal__header_close" onClick={onCloseModal}/>
                </div>
                <div className="c_modal__body">
                    { props.children }
                </div>
                <div className="c_modal__footer">
                    { props.footer }
                </div>
            </div>
        </div>
    )
}