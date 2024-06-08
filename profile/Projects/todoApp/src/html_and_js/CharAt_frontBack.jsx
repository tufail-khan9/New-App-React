import { useState } from "react";

export default function CharAt_frontBack()
{
    const [firstChar, setFirstChar] = useState('');
    const [resultChar, setResultChar] = useState('');
    function handleChar(e)
    {
        setFirstChar(e.target.value);
    }
    function getData(){
        
        if(firstChar.length <=1)
            {
               setResultChar("string must be greate than 1");
            }
            // let text = document.getElementById("input_add").value;
            let initialChar = firstChar.charAt(0);
               let finalChar=  initialChar + firstChar + initialChar;
           // document.getElementById('input_add').value = "";
           setResultChar(finalChar);
    }
    return(
        <>
             
    <h2>Question No. 04</h2>
    <h3>adding first character to front and back</h3><br />
    <input type="text" value={firstChar}  onChange={handleChar}/> 
    <button onClick={getData} className='input-button'>Click Here</button>
    <p>{resultChar}</p>
        </>
    )
}