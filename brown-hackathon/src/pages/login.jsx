import React, {useState} from "react";
import {postData} from '../serverApi/server';
<h1>Proof that login works</h1>



export function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    return(
        <div class ="topLevel">
            <div class="username">
                <label>username:</label>
                <input type="text" name="username" onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />   
            <p>username text: {username}</p>
            </div>

            <div class="password">
                <label>password: </label>
                <input type="text" name="password" onChange={(event) =>{
                    setPassword(event.target.value)
                    }}
                 />
            </div>
            <p>password: {password}</p>

            <input type="button" value="save" onClick={async (event) => {
                let result = await postData("http://localhost:4000/login/", 
                {username : username, password : password})

                console.log(result)}}
                />
        </div>
    )
}
export default Login;