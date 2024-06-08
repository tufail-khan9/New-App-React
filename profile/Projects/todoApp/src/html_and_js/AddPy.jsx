import { useState } from 'react';

export default function AddPy() {
    const [inputStr, setInputStr] = useState("");
    const [resultStr, setResultStr] = useState("");

    function getInputString(e) {
        setInputStr(e.target.value);
    }

    function AddPyToString() {
        if (inputStr.startsWith('py')) {
            setResultStr(inputStr + " ");
        } else {
            setResultStr("py" + inputStr);
        }
    }

    return (
        <>
        <h2>Question No. 01</h2>
        <h3>Add py at the start of string if does not exists</h3><br />
            <input
                type='text'
                placeholder="Enter String"
                value={inputStr}
                onChange={getInputString}
            />
            <button className='input-button' onClick={AddPyToString}>Click Here</button>
            <p>{resultStr}</p> {/* Move the result paragraph here */}
        </>
    );
}
