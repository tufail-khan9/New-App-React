import React from 'react';

export default function ArrayReverseAndFactorial() {
    // Output array elements in reverse order using a for loop
    function reverseArray(arr) {
        let reversed = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            reversed += arr[i] + ' ';
        }
        return reversed.trim();
    }

    // Calculate the factorial of a given number
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
    const reversedArray = reverseArray(arr);
    const num = 5;
    const numFactorial = factorial(num);

    return (
        <div>
            <h2>Array Reverse and Factorial</h2>
            <p>Array elements in reverse order: {reversedArray}</p>
            <p>Factorial of {num} is: {numFactorial}</p>
        </div>
    );
}
