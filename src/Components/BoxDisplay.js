// import React, { useState } from  'react';

const BoxDisplay = (props) => {
    const boxStyle = {
        height: '100px',
        width: '100px',
        display:'inline-block'
    };
    return(
        <>
            {props.color.map((box,i)=>
            <div style={{...boxStyle,background:box}} key={i}>{box}</div>
            )}
        </>
    );
};
    
export default BoxDisplay;