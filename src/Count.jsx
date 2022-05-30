import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Count = () => {
    const value = useSelector(state => state.count);
    const dispatch = useDispatch();

    const plus =() =>{
        dispatch({type: 'plus'})
    };

    const minus =()=>{
        dispatch({type:'minus'})
    }

    return (
        <>
            <div>
                <div>
                    <button style={{color:'red',  marginLeft:'20px'}} onClick={plus}>+</button>
                </div>
              {value}
                <div>
                    <button style={{color:'red',  marginLeft:'20px'}} onClick={(minus)}>-</button>
                </div>
            </div>
       </>
    );
};

export default Count;