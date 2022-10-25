import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';
import './App.css';

const Digivolving = () => {
    const [allDigivolving, setAllDigivolving] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/category/digivolving")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAllDigivolving(res.data);
        })
        .catch((err)=>
            console.log(err))
    }, [])

    const DigivolveFilter = {
        filters: {category: "digivolving"}
    }

return (
    <div class = "background">
        <header class = "menu" ><h1>Digivolving List</h1>
        </header>

        {
                allDigivolving.map((figure, index)=>(
                    
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
    
    export default Digivolving;