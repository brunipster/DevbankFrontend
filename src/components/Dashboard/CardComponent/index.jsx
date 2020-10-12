import React from 'react';
import {ReactComponent as ChipIcon} from '@icons/chip.svg';
import {ReactComponent as VisaIcon} from '@icons/visa.svg';

import './index.scss'

export default (props) => {
    return (
        <div className={`c_card__container ${props.minimized ? "minimized" : ""}`}>
            <div className="c_card__container_head">
                <h3 className="c_card__name">Debito Sueldo 
                    {props.minimized &&
                        <>
                            <br/>
                            <span className="c_card__mount_minimized">S/780.00</span>
                        </>
                    }
                </h3>
                <VisaIcon className="c_card__brand"/>
            </div>
            {!props.minimized &&
                <>
                    <ChipIcon className="c_card__chip"/>
                    <p className="c_card__number">4223 5502 3542 4645</p>
                    <p className="c_card__expired_date">09/23</p>
                </>
            }
        </div>
    )
}