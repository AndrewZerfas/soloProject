import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import './App.css';

const NewFigure = () => {

    const [name, setName] = useState("");
    
    const [season, setSeason] = useState("");
    
    const [category, setCategory] = useState("");

    const [region, setRegion] = useState("");

    const [rating, setRating] = useState("");

    const [image1, setImage1] = useState("");

    const [image2, setImage2] = useState("");

    const [image3, setImage3] = useState("");

    const navigate = useNavigate();

    const [errors, setError] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/figures", {name, season, category, region, rating, image1, image2, image3},
        {withCredentials: true}
        )    
          .then((res)=>{
            console.log(res);
              console.log(res.data);
              navigate("/");
          })
          .catch((err) => {
              console.log(err);
              navigate("/");
              console.log("err.response:", err.response);
              console.log("err.response.data:", err.response.data);
              console.log("err.response.data.errors:", err.response.data.errors);
              setError(err.response.data.errors)
          })

    }


return(
       
    <div style ={{height: "1000px", backgroundImage: 'url(https://w7.pngwing.com/pngs/998/609/png-transparent-numbers-illustration-technology-binary-file-euclidean-computer-file-binary-background-blue-other-angle.png)' }} >
         <header class = "menu"><h1>Add Figure</h1>
         <Link to={"/"} class="link">Home<br/></Link>
         <Link to={"/login"} class="link">Login / Register</Link>
         </header>

        <form class= "form" onSubmit={submitHandler}>
            <div>        
                <label>Name: </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
            {
            errors.name?
            <span>{errors.name.message}</span>
            :null
            }
            </div>
            <div>
                <label>Season: </label>
                <select value ={season} name="season" onChange={(e) => setSeason(e.target.value)} >
                <option defaultValue hidden>Select a Season</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "N/A">N/A</option>
                    </select>
                                {
            errors.season?
            <span>{errors.season.message}</span>
            :null
            }
            </div>
            <div>
                <label>Category:</label>
                <select value ={category} name="category" onChange={(e) => setCategory(e.target.value)} >
                <option defaultValue hidden>Select a Category</option>
                    <option value = "digivolving">digivolving</option>
                    <option value = "d-arts/figuarts">d-arts / figuarts</option>
                    <option value = "d-real">d-real</option>
                    <option value = "miniatures">miniatures</option>
                    <option value = "other">other</option>
                    </select>
                                {
            errors.category?
            <span>{errors.category.message}</span>
            :null
            }
            </div>
            <div>
                <label>Region</label>
                <select value ={region} name="region" onChange={(e) => setRegion(e.target.value)} >
                <option defaultValue hidden>Select a Region</option>
                    <option value = "JP/US">JP/US</option>
                    <option value = "US">US</option>
                    <option value = "JP">JP</option>
                    <option value = "KOR">KOR</option>
                    </select>
                                {
            errors.region?
            <span>{errors.region.message}</span>
            :null
            }
            </div>
            <div>
                <label>Rating:</label>
                <select value ={rating} name="rating" onChange={(e) => setRating(e.target.value)} >
                <option defaultValue hidden>Select a Rating</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    </select>
            </div>
            <span>Images</span>
            <div>
                <label>Image 1:</label>
                <input
                    value={image1}
                    onChange={(e) => setImage1(e.target.value)}
                    type="text"
                />
                                                {
            errors.image1?
            <span>{errors.image1.message}</span>
            :null
            }
            </div>
            <div>
                <label>Image 2:</label>
                <input
                    value={image2}
                    onChange={(e) => setImage2(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <label>Image 3:</label>
                <input
                    value={image3}
                    onChange={(e) => setImage3(e.target.value)}
                    type="text"
                />
            </div>
            
            <button class = "button">Create</button>
        </form>
    </div>
)
}


export default NewFigure;