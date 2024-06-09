
import React, { useState } from 'react'

export default function MultipleOfNumbers() {
    const [inputNum , setInputNum] = useState('');
    const [resultNum , setResultNum] = useState('');
    function handleInput(e)
    {
        setInputNum(e.target.value);
    }
    function FindMultiples_Of()
    {
        const ArrayLIst = inputNum.split(",").map(Number);
        if(ArrayLIst.length <= 2 )
        {
            setResultNum("The length of array must be start with 3")
        }else
        {
            let multipleOfThree = ArrayLIst.filter(item => item%3 === 0);
            let multipleOfFive = ArrayLIst.filter(item => item%5 === 0);
            let multipleOfBoth = ArrayLIst.filter(item => item%3 === 0 && item%5 === 0);

           let resultOfThree = multipleOfThree.map((item , index) =>
           <li key={`multiple fo three-${index}`}>{item} Fizz</li> );

           let resultOfFive = multipleOfFive.map((item , index) =>
            <li key={`multiple fo five-${index}`}>{item} Buzz</li> );

           let resultOfBoth = multipleOfBoth.map((item , index) =>
            <li key={`multiple fo both-${index}`}>{item} FizzBuzz</li> );

           setResultNum([...resultOfThree, ...resultOfFive, ...resultOfBoth]);

        }
        
    }
  return (
    <>
        <h2>Question No. 11</h2>
      <h3>Find multiple of 3,5 and both but print some string instead of numbers</h3>
      <p>Enter numbers separated by commas</p>
      <input
        type="text"
        onChange={handleInput}
        value={inputNum}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={FindMultiples_Of} className="input-button">
        Find Multiple
      </button>
      <ul>{resultNum}</ul>
    </>
  )
}
