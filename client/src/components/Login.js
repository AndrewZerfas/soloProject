import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Login = (props) =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = (event)=>{
        event.preventDefault();

        axios.post("http://localhost:8000/api/users/login",
        {
            email: email,
            password: password,
        },
        {
            withCredentials: true,
        },
        )
        .then((res)=>{
            console.log(res, "res");
            console.log(res.data, "is res data");
            navigate("/");
        })
        .catch((err)=>{
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        });
    };


    return(
    <div>

        <h1 class="loginWord">Login</h1>
        <h2 class="error"> {errorMessage ? errorMessage: ""}</h2>
        <form class= "login" onSubmit={login}>
            <div>
                <label>Email: </label>              
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </div>
            <div>
                <label>Password: </label>              
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
            </div>
            <div>
                <button class="button" type="submit">Login!</button>
            </div>
        </form>
    </div>
    )}

export default Login;