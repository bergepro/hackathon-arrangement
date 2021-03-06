import React from 'react';
import "./Arrangement.css";
import { Avatar } from "@material-ui/core";
import Post from './Post.js';

function Arrangement({bilde, profilKilde, tittel, dato}) {
    return (
        <div style={{ backgroundImage: `url(${bilde})` }} 
        className="arrangement">
            <Avatar className="arrangement__avatar" src={profilKilde} />
            <h4>{tittel}</h4>
            <h3>{dato}</h3>  
        <div className="arrangement__post">
        
        </div>
    </div>
        
    
        
    )
}

export default Arrangement;