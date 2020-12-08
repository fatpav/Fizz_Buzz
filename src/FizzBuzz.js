import {useState, useEffect} from 'react';

const FizzBuzz = () => {

    const [currentNumber, setCurrentNumber] = useState(1);

const calculate = () => {
      
    if (currentNumber % 15 === 0){
        return "FizzBuzz"
    }
    else if (currentNumber % 5 === 0){
        return "Buzz"
    }
    else if (currentNumber % 3 === 0) {
        return "Fizz"
    }
    return currentNumber.toString();
}   

const handleInc = () => {
    setCurrentNumber(currentNumber + 1);
  }

return (
        <>
        <h1>FizzBuzz component</h1>
        <h2>Input: {currentNumber}</h2>
        <h2>Output: {calculate()}</h2>
        <button onClick={() => handleInc()}>Increment</button>
        </>
    )
}


export default FizzBuzz;