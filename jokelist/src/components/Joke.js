import React, { useEffect, useState } from "react";
import Navigation from  "../components/Navigation";
import axios from "axios"

const Joke = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("https://geek-jokes.sameerkumar.website/api?format=json")
        .then((res) => setData(res.data))
    }, [])
    return (
        <div>
            <h1>JOKE</h1>
            <p>{data.joke}</p>
        </div>
    )
}

export default Joke;