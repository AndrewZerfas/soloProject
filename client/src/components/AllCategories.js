import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllCategories = () => {

    const [allFigures, setAllFigures] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/figures/categories")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAllFigures(res.data);
        })
        .catch((err)=>
            console.log(err))
    }, []);




    return (
<div style ={{backgroundImage: 'url(https://cdn.wallpapersafari.com/59/68/Nr1Kut.jpg)' }}>
    <header class = "menu"><h1>Figure List</h1>
    <Link to={"/new"}>New</Link>
    </header>

        {
            allFigures.map((figure, index)=>(
                <div key={figure.category}>
                    <Link to={`/figures/${figure.categories}`}>{figure.category}</Link>
           
                </div>
            ))
            }
            
</div>

    )
}

        export default AllCategories;