import React, { useState } from 'react';

export default function SumOf_MultipleThree() {
    const [inputNumber, setInputNumber] = useState('');
    const [resultnum, setResultnum] = useState('');

    function handleInput(e) {
        setInputNumber(e.target.value);
    }

    function SumOfMultiples() {
        
        let SplitArr = inputNumber.split(',').map(num => num.trim());

        if (SplitArr.length === 0 || SplitArr.some(isNaN)) {
            setResultnum('Invalid Number');
        } else {
            let multipleOfThreeAndFive = SplitArr
            .map(Number)
            .filter(item => item % 3 === 0 && item % 5 === 0);
           let sum = multipleOfThreeAndFive.reduce((acc, num1) => acc + num1);
          
            // const sum = multipleOfThreeAndFive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log(sum);



            setResultnum(sum.toString());
        }
    }

    return (
        <>
            <h2>Question No. 13</h2>
            <h3>Find multiples of three and five, and sum them</h3>
            <p>Enter digits separated by commas</p>
            <input
                type="text"
                onChange={handleInput}
                value={inputNumber}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={SumOfMultiples} className="input-button">
                Find Multiple
            </button>
            <ul>
                <li>{resultnum}</li>
            </ul>
        </>
    );
}
