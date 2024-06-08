import React, { useState } from 'react'

export default function SumTwo() {
    const [inputnum, setInputnum] = useState('');
    const [inputnum2 , setInputnum2] = useState('');
    const [resultnum, setResultnum] = useState('');
    function handleChar(e){
        setInputnum(e.target.value);
    }
    function handleChar2(e){
        setInputnum2(e.target.value);
    }
    function SumofTwo()
    {
        const num1 = parseFloat(inputnum);
        const num2 = parseFloat(inputnum2);
        
        let sum1 = num1 + num2;
        if(sum1 > 50 && sum1 < 80)
            {
                setResultnum("The sum of your provided numbers is in the range of 50 and 80")
            }else{
                setResultnum("Sorry not in range of 50 and 80")
            }

    }
       
  return (
    <>
    <h2>Question No. 09</h2>
    <h3>Sum of two number and apply condition on it</h3><br />
    <input type="text" value={inputnum} onChange={handleChar}/><br />
    <input type="text" value={inputnum2} onChange={handleChar2}/>
    <button onClick={SumofTwo} id="btn_py" className='input-button'>Click Here</button>
    <p>{resultnum}</p>
    </>
  )
}
