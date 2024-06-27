import { useState } from "react";

export function Challenge() {
  const [Person, setPerson] = useState({
    FirstName: "Tufail",
    LastName: "khan",
    FatherName: "Ali",
  });

  function handleFirstName(e) {
    setPerson({
      ...Person,
      FirstName: e.target.value,
    });
  }
  function handleLastName(e) {
    setPerson({
      ...Person,
      LastName: e.target.value,
    });
  }
  function handleFatherName(e) {
    setPerson({
      ...Person,
      FatherName: e.target.value,
    });
  }

return (
  <>

    <label>First Name</label>
    <input type="text" value={Person.FirstName} onChange={handleFirstName} />
    <br />
    <label>Last Name</label>
    <input type="text" value={Person.LastName} onChange={handleLastName} />
    <br />
    <label>Father Name</label>
    <input type="text" value={Person.FatherName} onChange={handleFatherName} /><br />
    <p><label htmlFor="">Person Bio:</label>
    {Person.FirstName}{' '}
        {Person.LastName}{' '}
        {Person.FatherName}</p>
  </>
)}
