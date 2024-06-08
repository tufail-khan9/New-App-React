import React, { useState } from 'react'

export default function FindGrade() 
{
    // const [name , setName] = useState('');
    const [marks , setMarks] = useState('');
    const [result , setResult] = useState('');
    const [marks2 , setMarks2] = useState('');
    const [resultmarks2 , setResultMarks2] = useState('');
    function handleinput(e)
    {
        setMarks(e.target.value);
    }
    function handleinput2(e)
    {
        setMarks2(e.target.value);
    }
    function FindGradeSystem()
    {
        if(marks >= 89 && marks <= 100 )
            {
                setResult("You have got A+ Grade");
            }
            else{
                setResult('you can not take high grade') 
            }

    }
    function FindGrade2 ()
    {
        if(marks2 >= 89 && marks2 <= 100 )
            {
                setResultMarks2("You have got A+ Grade");
            }
            else{
                setResultMarks2('you can not take high grade') 
            }

    }
  return (
   <>
   <h2>Question No.08</h2>
   <h3>Find A+ Grade in two exams</h3><br />
   <p>Exame Type: Middle Exame</p>
    <input type="text" onChange={handleinput} value={marks} />
    <button onClick={FindGradeSystem} className='input-button'>Submit</button>
    <p>{result}</p>
    <p>Exame Type: Final Exame</p>
    <input type="text" onChange={handleinput2} value={marks2} />
    <button onClick={FindGrade2} className='input-button'>Submit</button>
    <p>{resultmarks2}</p>

   </>
  )
}



