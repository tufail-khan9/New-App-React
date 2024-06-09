import React, { useState } from 'react';

export default function TicketsBased_onAge() {
    const [age, setAge] = useState('');
    const [ticketPrice, setTicketPrice] = useState(null);

    function handleInput(e) {
        setAge(e.target.value);
    }

    function calculateTicketPrice() {
        const ageNum = parseInt(age, 10);
        
        if (isNaN(ageNum)) {
            setTicketPrice('Invalid age');
            return;
        }

        let price;

        if (ageNum < 12) {
            price = 5;
        } else if (ageNum < 18) {
            price = 10;
        } else if (ageNum < 60) {
            price = 20;
        } else {
            price = 15;
        }

        setTicketPrice(price);
    }

    return (
        <div>
            <h2>Ticket Price Calculator</h2>
            <p>Enter your age to calculate the ticket price:</p>
            <input
                type="text"
                onChange={handleInput}
                value={age}
                placeholder="Enter your age"
            />
            <button onClick={calculateTicketPrice} className="input-button">
                Calculate Price 
            </button>
            {ticketPrice !== null && (
                <p>The ticket price is: {ticketPrice}</p>
            )}
        </div>
    );
}
