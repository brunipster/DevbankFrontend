import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
export default (props) => {

    const history = useHistory();

    function clickEvent(){
        if(props.link) {
            history.push(props.link);
        } else {
            props.action();
        }
    }

    return (
        <button onClick={()=>{clickEvent()}} className={`c_button ${props.theme}`} disabled={props.isLoading}>
            {!props.isLoading ?
                props.children
                :
                "cargando..."
            }
        </button>
    )
}