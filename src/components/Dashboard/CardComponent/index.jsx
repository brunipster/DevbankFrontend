import React from 'react';

import './index.scss'

export default () => {
    return (
        <div className="c_card__container">
            <h3 className="c_card__name">Debito Sueldo</h3>
            <img className="c_card__chip" src="/icons/chip.svg"/>
            <p className="c_card__number">4223 5502 3542 4645</p>
            <p className="c_card__expired_date">09/23</p>
            <img className="c_card__brand" src="brand"/>
        </div>
    )
}