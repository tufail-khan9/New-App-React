import PropsMethod from "./basicTasks";
function SpreedMethod(prop)
{
    return(

        <>
        <div className="para">
             <h2>The below are example of spreed method</h2>
             <p>Name: {person.name}</p>
             <p>Gender: {person.gender}</p>
            <p> Education: {person.education}</p>
        </div>
        <PropsMethod {...prop}/>
        </>
    )
}
export default SpreedMethod;