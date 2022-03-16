import React from "react";
import Navigation from  "../components/Navigation";

const Favoris = () => {
    const remove = () => {
        localStorage.removeItem('');
     };
     let JokeFav ={};
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
        // JokeFav.push(localStorage.getItem(localStorage.key(i)));
        JokeFav[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }
    console.log(JokeFav);
    return (
        <div>
            <Navigation/>
            <h1>FAVORIS</h1>
            <p>{JokeFav['joke8']}</p>
        <div>
            <button onClick={remove}>Remove</button>
         </div>
        </div>
        
        
    )
}

export default Favoris;