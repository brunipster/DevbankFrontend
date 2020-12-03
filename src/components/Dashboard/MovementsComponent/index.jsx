import React from 'react';

import './index.scss'

export default (props)=>{

    let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    return (
        <div className="c_movements__container">
            <h3 className="e-p1">Movimientos</h3>
            <ul className="c_movements__list">
                {
                    list.map((elm, index)=>(
                        <li key={index} className="c_movements__item">
                            <p className="c_movements__item_description e-p2 e-p5:md">
                                Pago de Netflix
                                {elm.processing &&

                                    <span className="c_movements__item_description_flag e-p5">Procesando</span> 
                                }
                                <br/>
                                <span className="c_movements__item_description_date e-p4 e-p6:md">12/03 10:30am</span>
                            </p>
                            <p className="c_movements__item_mount e-p3 e-p5:md e-text-light">S/.45.00</p>
                        </li> 
                    ))
                }
                
            </ul>
        </div>
    )
}