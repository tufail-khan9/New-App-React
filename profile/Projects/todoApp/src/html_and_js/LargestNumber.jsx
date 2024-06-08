import React, { useState } from 'react';

export default function LargestNumber() {
    const [item1, setItem1] = useState('');
    const [resultItem, setResultItem] = useState('');

    function handleChar(e) {
        setItem1(e.target.value);
    }

    function largeNumber() {
        const numberArray = item1.split(',').map(Number);
        if (numberArray.length <= 1) {
            setResultItem("The length of numbers array must be greater than 1");
        } else {
            let largest = 0;
            //if numberArray[i] not greater than largest and still more values are remains the largest variable has no change in the value and i goes for next value.for example if array is arr = [3,2,4,1] so first value store in largest is 3 now when the 2 is come and check condition arr[i] > largest so here condition is false so largest in not changed the previous value which is 3 and i goes for next item which is 4 and 4 is greate than privious largest value which is 3 so this time largest update and new value get 4.etc
            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] > largest) {
                    largest = numberArray[i];
                }
            }
            setResultItem(largest);
        }
    }

    return (
        <>
            <h2>Question No.07</h2>
            <h3>Find highest Number in given series</h3><br />
            <input 
                type="text" 
                onChange={handleChar} 
                value={item1} 
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={largeNumber} className='input-button'>Find Largest</button>
            <p>{resultItem}</p>
        </>
    );
}
