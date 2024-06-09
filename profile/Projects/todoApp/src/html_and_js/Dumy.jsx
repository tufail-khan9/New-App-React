import React, { useState } from 'react';

export default function Dumy() {
    const [inputNum1, setInputNum] = useState('');
    const [result, setResult] = useState([]);

    function handleInput(e) {
        setInputNum(e.target.value);
    }

    function ArmstrongNUmbers() {
        const numbers = inputNum1.split(',').map(num => num.trim());
        const armstrongResults = [];

        numbers.forEach(element => {
            const digits = element.toString().split('');
            const firstDigit = digits.at(0);
            const secondDigit = digits.at(1);
            const thirdDigit = digits.at(2);
            const Total = Math.pow(firstDigit, 3) + Math.pow(secondDigit, 3) + Math.pow(thirdDigit, 3);
            if (Total === parseInt(element)) {
                armstrongResults.push(element + ' is armstrong');
            }
        });

        setResult(armstrongResults);
    }

    return (
        <>
            <h2>Question No. 12</h2>
            <h3>Find Armstrong Numbers</h3>
            <p>Enter three-digit numbers separated by commas</p>
            <input
                type="text"
                onChange={handleInput}
                value={inputNum1}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={ArmstrongNUmbers} className="input-button">
                Find Multiple
            </button>
            <ul>
                {result.map((res, index) => (
                    <li key={index}>{res}</li>
                ))}
            </ul>
        </>
    );
}
