import React from 'react'
import './App.css';

function App() {

  const [num, setNum] = React.useState(1)

  return (
    <div className="App">
        <h1>COUNTER</h1>
        <div id="wrapper"  >
          <button id="minusButton" onClick={() => setNum(num - 1)} >-</button>
          <p id="number" >{num}</p> 
          <button id="plusButton" onClick={() => setNum(num + 1)} >+</button>
        </div>
        <div id="madeBy"></div>
    </div>
  );
}

export default App;
