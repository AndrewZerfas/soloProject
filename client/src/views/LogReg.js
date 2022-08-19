import React, {useState, useEffect} from 'react';
import Login from "../components/Login";
import Register from "../components/Register";




const LogReg = (props) =>{
return(
    <div style ={{height: "1000px", backgroundImage: 'url(https://w7.pngwing.com/pngs/998/609/png-transparent-numbers-illustration-technology-binary-file-euclidean-computer-file-binary-background-blue-other-angle.png)' }}>
        <Login/>
        <Register/>
    </div>
)}

export default LogReg;