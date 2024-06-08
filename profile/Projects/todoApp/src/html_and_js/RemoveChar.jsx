import { useState } from "react";

export default function RemoveChar() {
    const [inputItem, setInputItem] = useState('');
    const [index, setIndex] = useState('');
    const [resultItem, setResultItem] = useState('');

    function getInputString(e) {
        setInputItem(e.target.value);
    }

    function setIndexValue(e) {
        setIndex(parseInt(e.target.value));
    }

    function setData() {
        if (index < 0 || index >= inputItem.length) {
            setResultItem("Invalid Index");
            return;
        }
            setResultItem(inputItem.slice(0, index) + inputItem.slice(index + 1));
    }

    return (
        <>
            <h2>Question No. 02</h2>
            <h3>Remove character from desired index</h3> <br />
            <input type="text" value={inputItem} style={{ width: '150px' }} onChange={getInputString} />

            <br /><br />

            <label htmlFor="index_input">Enter index to remove character:</label><br />
            <input type="number" id="index_input" value={index} onChange={setIndexValue} />
            <button className='input-button' onClick={setData} id="btn_py">Click Here</button>
            {/* <input type="text" value={resultItem} style={{ width: '150px' }} /> */}
            <p>{resultItem} </p>
        </>
    )
}
