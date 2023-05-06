import React, { useState } from "react";
import { postData } from '../serverApi/server';
import Header from "../components/Header";
import Footer from "../components/Footer";

export function LoginMessagePage() {
  
    return (
        <>
        <Header/>
        <div class="topLevel">
          
          <div style={{minHeight: "90vh", color: "black", padding:"10%"}}>

            <p>Login Successful </p>
           
            <p>User profile</p>
            <hr/>
            <p>Name {localStorage.name}</p>
            <p>age {localStorage.age}</p>
            <p>username {localStorage.username}</p>
            <p>email {localStorage.email}</p>
            
          </div>
        </div>
        <Footer/>
        </>
    )
}