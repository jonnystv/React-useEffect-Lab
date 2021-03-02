import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);
  let [modifiedCounter, setModifiedCounter] = useState(1);


  useEffect(() => {
    console.log("useEffect Triggered");
    setModifiedCounter(executeFizzBuzz)
  }, [modifiedCounter])

  const executeFizzBuzz = () => {

    if (counter % 3 == 0 && counter % 5 == 0) {
      setModifiedCounter = "FizzBuzz";
    }
    else if (counter % 5 == 0) {
      setModifiedCounter = "Buzz";
    }
    else if (counter % 3 == 0) {
      setModifiedCounter = "Fizz";
    }
    else {
      setModifiedCounter = counter;
    }
  }
  // useEffect(() => {
  //   setDoubleNumber(number * 2)
  // },[number]


  // if (time < 10) {
  //   greeting = "Good morning";
  // } else if (time < 20) {
  //   greeting = "Good day";
  // } else {
  //   greeting = "Good evening";
  // }  


  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (

    <>

      <button value={counter} onClick={handleIncrement}>Increase number by one</button>
      <h2>Output: {counter}</h2>
      <h2>Modified Counter: {modifiedCounter}</h2>
    </>

  );

}

export default App;







