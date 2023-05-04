//Christina Zimmer entire page
import React, { useState } from "react";
import { postData } from '../serverApi/server';
import Header from "../components/Header";
import Footer from "../components/Footer";
export function Registration() {
  
    return (
        
        <div class="topLevel">
         
            <p>Congradulations, you have successfully registered! </p>
            <a href='/'><button>Return home</button></a>
            <a href='/loginMessagePage'> <button> Return to userprofile</button></a>
       
        </div>
    )
}