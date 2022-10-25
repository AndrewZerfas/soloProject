import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';
import './App.css';

const AllFigures = () => {

    const [allFigures, setAllFigures] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/figures")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAllFigures(res.data);
        })
        .catch((err)=>
            console.log(err))
    }, [])

    const logout = (e) => {
        axios.post("http://localhost:8000/api/users/logout",
    {},
{
    withCredentials: true,
}, )
.then((res) => {
    console.log(res);
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);

});
};
    




    return (
<div class = "background">
    <header class = "menu" ><h1>Figure List</h1>
    <Link to={"/new"} class="link">New<br/></Link>
    <Link to={"/login"} class="link">Login / Register<br/></Link>
    <button onClick={logout} class="button">Logout</button>
    </header>
    <div class="sidebar">
    <div>Movies</div>
    <div>Video Games</div>
    <div>TCG</div>
    <div>Classic TCG</div>
    <div>Miscellaneous</div>
    </div>
        {
            allFigures.map((figure, index)=>(
                <div class = "allFigs"  key={figure._id}>
                    <Link to={`/figures/${figure._id}`} class="link"><img src={figure.image1}  style={{border: "solid", width: "150px", height: "150px"}}/></Link>
                    <Link to={`/figures/${figure._id}`} class="link">{figure.name}<br/></Link>
                    <Link to={`/figures/edit/${figure._id}`} class="link">Edit</Link>
                </div>
            ))
            }
</div>

    )
}

        export default AllFigures;