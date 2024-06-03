export default function HtmlTask_inReact({carType})
{
    console.log(carType)
    return (
            <>
            <div className="para">
            <h2>This Method Is Used For Property By Name</h2>
                <p>{carType.model}</p>
                <p>{carType.color}</p>
                <p>{carType.size}</p>
                </div>
                <hr />
            </>  
            )
        }
        
        
        
        
    




