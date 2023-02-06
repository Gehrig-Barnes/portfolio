import React from "react";
import pdf from '../resume/Barnes_Resume.png'

function Resume(){
    return(
        <div className= "resume">
            <img src = {pdf} width="50%" height="80%"/>
        </div>
    )
};

export default Resume;