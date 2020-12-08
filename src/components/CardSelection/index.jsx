import React, {useState, useEffect} from 'react';
import './index.scss';

export default (props) => {
    
    const [selectedId, setSelectedId] = useState();

    function seleccionar(id){
        console.log("ID", id);
        setSelectedId(id);
        props.handleSelected(id);
    }

    return (
        <div className="c_cards">
            {
                props.colecctions.map((p, index) => {
                    return (
                        <div onClick={()=>{seleccionar(p.id)}} className={`c_cards__item ${selectedId === p.id ? 'selected':''}`}>
                            <p className="e-p5">{p.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}