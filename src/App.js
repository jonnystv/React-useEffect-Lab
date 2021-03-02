import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

   return (

    <>
    
      <button value={counter} onClick={handleIncrement}>Increase number by one</button>
        <h2>Output: {counter}</h2>
    </>

  );

}

export default App;
