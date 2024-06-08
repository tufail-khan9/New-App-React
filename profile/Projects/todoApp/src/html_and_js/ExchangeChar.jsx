import { useState } from "react";

export default function ExchangeChar() {
    const [exchangeItem, setExchangeItem] = useState('');
    const [resultItem, setResultItem] = useState('');

    function getInput(e) {
        setExchangeItem(e.target.value);
    }

    function changData() {
        if (exchangeItem.length <= 1) {
            setResultItem("Character must be greater than 1");
        } else {
            const mid_char = exchangeItem.substring(1, exchangeItem.length - 1);
            const exchangedStr = exchangeItem.charAt(exchangeItem.length - 1) + mid_char + exchangeItem.charAt(0);
            setResultItem(exchangedStr);
        }
    }

    return (
        <>
            <h2>Question No. 03</h2>
            <h3>Exchange position of first and last character</h3><br />
            <input type="text" value={exchangeItem} style={{ width: '150px' }} onChange={getInput} />
            <button onClick={changData} id="btn_py" className='input-button'>Click Here</button>
            <p>{resultItem}</p>
        </>
    );
}
