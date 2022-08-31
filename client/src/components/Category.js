import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';
import './App.css';

const Category = () => {
    const [allFigures, setAllFigures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

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
function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
 }

 function getFilteredList() {
    if (!selectedCategory) {
      return allFigures;
    }
    return allFigures.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, allFigures]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
    return (
        <div style ={{backgroundImage: 'url(https://w7.pngwing.com/pngs/998/609/png-transparent-numbers-illustration-technology-binary-file-euclidean-computer-file-binary-background-blue-other-angle.png)' }}>
            <header class = "menu" ><h1>Figure List</h1>
            <Link to={"/new"} class="link">New<br/></Link>
            <Link to={"/login"} class="link">Login / Register<br/></Link>
            <button onClick={logout} class="button">Logout</button>
            </header>
            <div>
                <select
                name="category-list"
                id="category-list"
                onchange={handleCategoryChange}
                >
            <option value="">All</option>
            <option value='${figure.digivolving}'>digivolving</option>
            <option value="figure.d-arts/figuarts">d-arts/figuarts</option>
            <option value="d-real">d-real</option>
            <option value="miniatures">miniatures</option>
            <option value="other">other</option>
                </select>                
            </div>            

     
            {allFigures.map((figure, index)=>(
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

export default Category;
/*            <div class= "allCats" key={figure.category}>
            <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
      >
          <option value="figure.category">{figure.category}</option>
          </select>
          </div>*/