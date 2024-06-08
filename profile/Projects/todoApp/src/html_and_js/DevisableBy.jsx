import { useState } from "react"

export default function DevisableBy()
{
    const [num1, setnum1] = useState('');
    const [resultNum, setresultNum] = useState('');
    function handleEvent(e)
    {
        setnum1(e.target.value);
    }
    function divisibleBy()
    {
        // debugger;
        if(num1 <=0){
            setresultNum("The number should be greater than 0!");
        }else{
            if(num1%3===0 && num1%7===0){
                setresultNum("The given number is divisible ");
            }
            else{
                setresultNum("The given number is not divisible!");
            }
        }

    }
    return(
        <>
        <h2>Question No.05</h2>
        <h3>Check whether a number divisable by 3 and 7</h3><br />
        <input type="number" value={num1} onChange={handleEvent} />
        <button onClick={divisibleBy} className='input-button' >Submit</button>
        <p>{resultNum}</p>
        </>
    )
}