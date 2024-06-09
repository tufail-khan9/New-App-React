import React, { useState } from 'react';

export default function SumOfNumbers() {
    const numbersArray = [1, 13, 22, 123, 49];

    
    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div>
            <h3>Sum of Numbers [{numbersArray.toString()}]</h3>
            <p>The sum of the numbers in the array is: {sum}</p>
        </div>
    );
}
