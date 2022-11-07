import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllFigures = () => {

    const [allFigures, setAllFigures] = useState([]);

    const [search, setSearch] = useState('');
    console.log(search)

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

    
    <Container>
    <header class = "menu" ><h1>Figure List</h1>
    <Link to={"/"} class="link">Home<br/></Link>
    <Link to={"/new"} class="link">New<br/></Link>
    <Link to={"/login"} class="link">Login / Register<br/></Link>
    <button onClick={logout} class="button">Logout</button>
    </header>
    <Form>
        <InputGroup className='my-3 shadow p-3 mb-5 bg-secondary rounded'>
            <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeHolder='Search Figures'/>
        </InputGroup>
    </Form>
    <div class="sidebar">
    <div><h3>Categories</h3></div>
    <div><Link to={'/category/digivolving'} class="link">Digivolving</Link></div>
    <div><Link to={'/category/figuarts'} class="link">Figuarts</Link></div>
    <div><Link to={'/category/d-real'} class="link">D-Real</Link></div>
    <div><Link to={'/category/miniatures'} class="link">Miniatures</Link></div>
    <div><Link to={'/category/other'} class="link">Other</Link></div>
    </div>
        {
            allFigures.filter((figure)=>{
                return search.toLowerCase() === '' 
                ? figure
                : figure.name.
                toLowerCase().includes(search);
            }).map((figure, index)=>(
                <div class = "allFigs"  key={figure._id}>
                    <Link to={`/figures/${figure._id}`} class="link"><img src={figure.image1}  style={{border: "solid", width: "150px", height: "150px"}}/></Link>
                    <Link to={`/figures/${figure._id}`} class="link">{figure.name}<br/></Link>
                    <Link to={`/figures/edit/${figure._id}`} class="link">Edit</Link>
                </div>
            ))
            }
        </Container>
</div>

    )
}

        export default AllFigures;