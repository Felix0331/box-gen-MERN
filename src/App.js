import React, { useState } from 'react';
import BoxForm from './Components/BoxForm';
import BoxDisplay from './Components/BoxDisplay';
import './App.css';

function App() {
  const [colorArr, setColorArr] = useState([]);
  const pushColor = (newColor)=>{
    setColorArr([...colorArr,newColor]);
  }
  return (

    <div className="App">
      <BoxForm colorArr={pushColor}/>
      <BoxDisplay color={colorArr}/>
    </div>
  );
}

export default App;
