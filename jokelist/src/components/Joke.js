import React, { useEffect, useState, useReducer } from "react";
import Navigation from  "../components/Navigation";
import axios from "axios"

const Joke = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => setData(res.data))
    }, [])

    
    const handle = () => {
        localStorage.setItem(data.id, data.value);
        refreshPage()
     };
     
    const refreshPage = () =>{
        window.location.reload(); 
    };
    
    
    return (
        <div>
            <h2>JOKE</h2>
            <p>Joke: {data.value}</p>
            <div>
                <button onClick={handle}>Like</button>
            </div>
            <button type="button" onClick={ refreshPage }> <span>Next</span> </button> 
        
            
        </div>
    )
}

export default Joke;