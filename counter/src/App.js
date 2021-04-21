import React from 'react'
import './App.css';

function App() {

  const [num, setNum] = React.useState(1)

  return (
    <div className="App">
        <h1>COUNTER</h1>
        <div style={{height:'100%', padding:'10%'}} >
          <button style={{height:'250px', width:'250px', fontSize:'150px'}}  onClick={() => setNum(num - 1)} >-</button>
          <p style={{fontSize:'250px', display:'inline-block', margin:'50px'}} > {num} </p> 
          <button style={{height:'250px', width:'250px', fontSize:'150px'}} onClick={() => setNum(num + 1)} >+</button>
        </div>
        {(num < 50) ? '' : 'I LOVE DEVOPS'}
    </div>
  );
}

export default App;
