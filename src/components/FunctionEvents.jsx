export default function FunctionEvents(){
    function handleEve(){
          alert("This is Internal Events")
    }
    return(
        <>
          <button onClick={()=>alert("Functional Events")}>Function Event</button>
          <button onClick={handleEve}>Internal Events</button>
        </>
    )
}