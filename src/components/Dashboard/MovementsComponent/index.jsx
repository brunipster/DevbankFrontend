import React from 'react';

import './index.scss'

export default (props)=>{

    let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    return (
        <div className="c_movements__container">
            <h3>Movimientos</h3>
            <ul className="c_movements__list">
                {
                    list.map((elm)=>(
                        <li className="c_movements__item">
                            <div className="c_movements__item_description">
                                Pago de Netflix
                                {elm.processing &&

                                    <span className="c_movements__item_description_flag">Procesando</span> 
                                }
                                <br/>
                                <span className="c_movements__item_description_date">12/03 10:30am</span>
                            </div>
                            <p className="c_movements__item_mount">S/.45.00</p>
                        </li> 
                    ))
                }
                
            </ul>
        </div>
    )
}