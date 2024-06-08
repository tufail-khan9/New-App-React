import React, { useState } from 'react'

export default function TakingLastThreeChar() {
    const [originalChar, setOrignalChar] = useState('');
    const [resultChar, setResultChar] = useState('');
    function handleChar(e){
        setOrignalChar(e.target.value);
    }
    function pushData()
    {
        if(originalChar.length <= 3)
            {
                setResultChar("string must be greater than three character")
            }else{
                
                var lastThree = originalChar.substr(originalChar.length -3);
               let resultedChar = lastThree + originalChar + lastThree;
               setResultChar(resultedChar);
            }
            
    }
  return (
    <>
    <h2>Question No. 06</h2>
    <h3>taking last three character and add them at the fron and back of string</h3><br />
    <input type="text" value={originalChar} onChange={handleChar}/>
    <button onClick={pushData} id="btn_py" className='input-button'>Click Here</button>
    <p>{resultChar}</p>
    </>
  )
}
