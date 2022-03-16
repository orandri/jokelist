import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <button>Accueil</button>
                </NavLink>
                <NavLink to="/Favoris">
                    <button>Favoris</button>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation;