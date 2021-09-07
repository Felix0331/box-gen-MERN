import React, { useState } from  'react';
    
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const handleColor = (e) => {
        e.preventDefault();
        setColor(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.colorArr(color);
        setColor('');
    };
    return(
        <>
        <form onSubmit={ handleSubmit }>
                Color: <input type="text" onChange={handleColor} value={color}/>
            <input type="submit" value="Add" />
        </form>
        </>
    );
};
    
export default BoxForm;