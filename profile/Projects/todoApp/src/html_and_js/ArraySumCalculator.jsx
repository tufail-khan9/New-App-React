import React from 'react';

export default function ArraySumCalculator() {
    const arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
    const arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

    function calculateArraySum(arr) {
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    const sum1 = calculateArraySum(arr_1);
    const sum2 = calculateArraySum(arr_2);
    const totalSum = sum1 + sum2;

    const labelStyle = {
        marginRight: '10px', // Adjust this value to create the desired gap
    };

    return (
        <div>
            <h2>Array Sum Calculator</h2>
            <div>
                <h4 style={labelStyle}>Array First:</h4>
                <span>[{arr_1.toString()}]</span>
            </div>
            <div>
                <h4 style={labelStyle}>Array Second:</h4>
                <span>[{arr_2.toString()}]</span>
            </div><br />
            <p>Sum of first array: {sum1}</p>
            <p>Sum of second array: {sum2}</p>
            <p>Total sum: {totalSum}</p>
        </div>
    );
}
