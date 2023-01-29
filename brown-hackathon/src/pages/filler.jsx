import React from "react";

<h1>Proof that filler works</h1>



export function Filler(){
    return(
        <div>
            <input type="text" name="username" onChange={(event) => {
                console.log("a",event)
            }}
           />   
        </div>
    
    )
}
export default Filler;