import Navigation from  "../components/Navigation";
import Joke from  "../components/Joke";
import React, { useEffect, useState } from "react";





const Accueil = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
    const url = "https://geek-jokes.sameerkumar.website/api?format=json";
   
    
    fetch(url).then(res => res.json())
    .then(
        (data) => {
        //console.log(data)
        setItems(data);
    },
        (error) => {
            setError(error);
         }
        ) 
    },  [])
    
        return (
            <div>
            <Navigation/>
            <h1>ACCUEIL</h1>
            <Joke/>
        </div>
        );
}



export default Accueil;