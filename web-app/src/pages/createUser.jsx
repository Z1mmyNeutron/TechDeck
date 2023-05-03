import React, { useState } from "react";
import { postData } from '../serverApi/server';

export function CreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    return (
        <div class="topLevel">

            <label>username:</label>
            <input type="text" name="username" onChange={(event) => {
                setUsername(event.target.value)
            }}
            />

            <label>name: </label>
            <input type="text" name="name" onChange={(event) => {
                setName(event.target.value)
            }}
            />

            <label>age:</label>
            <input type="number" name="age" onChange={(event) => {
                setAge(event.target.value)
            }}
            />
        
            <label>password: </label>
            <input type="text" name="password" onChange={(event) =>{
                    setPassword(event.target.value)
                    }}
             />
              <label>email: </label>
            <input type="text" name="email" onChange={(event) =>{
                    setEmail(event.target.value)
                    }}
             />


            <input type="button" value="save" onClick={async (event) => {
                let result = await postData("http://localhost:4000/createUser/",
                    { username: username, password: password, age : age, name : name, email : email })

                console.log(result)
            }}
            />
        </div>
    )
}