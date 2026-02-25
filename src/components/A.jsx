import B from "./B";

export default function A({name,age}){
    return(
        <>
           <h1>This is A Component</h1>
           {/* <p>Username is {name} and 
            His/Her Age is {age}</p> */}
            <B n={name} a={age}/>
        </>
    )
}