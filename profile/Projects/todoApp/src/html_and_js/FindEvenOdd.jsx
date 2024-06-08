import React, { useState } from 'react';

export default function FindEvenOdd() {
    const [num1, setNum1] = useState('');
    const [result, setResult] = useState([]);

    function handleChar(e) {
        setNum1(e.target.value);
    }

    function FindEven_OrOdd() {
        const numberArray = num1.split(',').map(Number);
        
        const evenNumbers = numberArray.filter(item => item % 2 === 0);
        const oddNumbers = numberArray.filter(item => item % 2 !== 0);

        const evenListItems = evenNumbers.map((item, index) => (
            <li key={`even-${index}`}>{item} is even</li>
        ));
        
        const oddListItems = oddNumbers.map((item, index) => (
            <li key={`odd-${index}`}>{item} is odd</li>
        ));

        setResult([...evenListItems, ...oddListItems]);
    }

    return (
        <>
            <h2>Question No. 10</h2>
            <h3>Find even and odd</h3><br />
            <input 
                type="text" 
                onChange={handleChar} 
                value={num1} 
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={FindEven_OrOdd} className='input-button'>Find Even/Odd</button>
            <ul>{result}</ul>
        </>
    );
}
