import React from 'react';
import {ReactComponent as ChipIcon} from '@icons/chip.svg';
import {ReactComponent as VisaIcon} from '@icons/Visa2.svg';
import {ReactComponent as AmexIcon} from '@icons/amex.svg';
import {ReactComponent as MastercardIcon} from '@icons/mastercard.svg';
import {ReactComponent as PaypalIcon} from '@icons/paypal.svg';

import './index.scss'

let types = {
    1:{
        brandIcon: <VisaIcon className="c_card__brand"/>
    },
    2:{
        brandIcon: <AmexIcon className="c_card__brand"/>
    },
    3:{
        brandIcon: <MastercardIcon className="c_card__brand"/>
    },
    4:{
        brandIcon: <PaypalIcon className="c_card__brand"/>
    }
}

export default (props) => {
    

    return (
        <div className={`c_card__container ${props.minimized ? "minimized" : ""} c_card__container_bg_gradient_${props.type || 1}`}>
            <div className="c_card__container_head">
                <h3 className="c_card__name e-p2 e-text-medium">Debito Sueldo 
                    {props.minimized &&
                        <>
                            <br/>
                            <span className="c_card__mount_minimized e-p3">S/780.00</span>
                        </>
                    }
                </h3>
                {
                    types[props.type || 1].brandIcon
                }
            </div>
            {!props.minimized &&
                <>
                    <ChipIcon className="c_card__chip"/>
                    <p className="c_card__number e-p3">4223 5502 3542 4645</p>
                    <p className="c_card__expired_date e-p5">09/23</p>
                </>
            }
        </div>
    )
}