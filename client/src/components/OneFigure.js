import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams} from 'react-router-dom'
import './App.css';

const OneFigure = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    
    const [season, setSeason] = useState("");
    
    const [category, setCategory] = useState("");

    const [region, setRegion] = useState("");

    const [rating, setRating] = useState("");

    const [image1, setImage1] = useState("");

    const [image2, setImage2] = useState("");

    const [image3, setImage3] = useState("");

    const navigate = useNavigate();
  
    console.log(id);
  
    useEffect(() => {
      axios.get(`http://localhost:8000/api/figures/${id}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setName(res.data.name);
          setSeason(res.data.season);
          setCategory(res.data.category);
          setRegion(res.data.region);
          setRating(res.data.rating);
          setImage1(res.data.image1);
          setImage2(res.data.image2);
          setImage3(res.data.image3);
        })
        .catch((err)=>{console.log(err)
        });
    }, []);



    return (
        <div class = "background" style = {{height:"1000px"}}>
        <header class = "menu" ><h1>Details</h1>
                 <Link to={"/"} class="link">Home<br/></Link>
                 <Link to={"/login"} class="link">Login / Register</Link>
                 </header>
                 <div class = "details">
                    <div >
                        <img src={image1} style={{border: "solid", width: "250px"}}/>
                        <img src={image2} style={{border: "solid", width: "250px", marginLeft: "25px"}}/>
                        <img src={image3} style={{border: "solid", width: "250px", marginLeft: "25px"}}/>
                    </div>
                    <div>
                        <label>Name: {name}</label>
                    </div>
                    <div>
                    <label>Season: {season}</label>
                    </div>
                    <div>
                    <label>Category: {category}</label>
                    </div>
                    <div>
                    <label>Region: {region}</label>
                    </div>
                    <div>
                    <label>Rating: {rating}</label>
                    </div>
                    <Link to={`/figures/edit/${id}`} class="link">Edit</Link>
            </div>
            </div>
        )
    };

export default OneFigure;