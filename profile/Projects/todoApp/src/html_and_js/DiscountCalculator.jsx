import React, { useState } from 'react';

export default function DiscountCalculator() {
    const [purchaseAmount, setPurchaseAmount] = useState('');
    const [discount, setDiscount] = useState(null);

    function handleInput(e) {
        setPurchaseAmount(e.target.value);
    }

    function calculateDiscount() {
        const amount = parseFloat(purchaseAmount);
        
        if (isNaN(amount)) {
            setDiscount('Invalid amount');
            return;
        }

        let discountValue;

        if (amount >= 100) {
            discountValue = 20;
        } else if (amount >= 50) {
            discountValue = 10;
        } else {
            discountValue = 0;
        }

        setDiscount(discountValue);
    }

    return (
        <div>
            <h2>Discount Calculator</h2>
            <p>Enter your purchase amount to calculate the discount:</p>
            <input
                type="text"
                onChange={handleInput}
                value={purchaseAmount}
                placeholder="Enter purchase amount"
            />
            <button onClick={calculateDiscount}>
                Calculate Discount
            </button>
            {discount !== null && (
                <p>The discount is: {discount}%</p>
            )}
        </div>
    );
}
