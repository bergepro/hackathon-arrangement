import React, { useState } from 'react';
import "./Feed.css";
import Arrangement from "./Arrangement";
import bild from "./kroaikon.jpg";
import bg from "./kroa.jpg";
import Post from "./Post.js";
import "./Post.css";
import morten from "./Morten.jpg";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import useEffect from "./reducer";
import firebase from "firebase";

function Feed() {
    const [arrangements, setArrangements] = useState([]);
    
    useEffect(() => {
        db.collection('arrangements').onSnapshot(snapshot => {
          setArrangements(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })
      }, [])

    return (
        <div className="feed">
            {/* Hoved, her vises arrangementer/lages nye */}
            {arrangements.map((arrangements)=> (
                <Arrangement
                bilde={arrangements.data.bilde}
                tittel={arrangements.data.tittel}
                profilKilde={arrangements.data.profilKilde}
                dato={arrangements.data.dato}
                />
            ))}
            <Arrangement
            bilde="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            tittel="Stå forferdelig fort på ski!"
            profilKilde={morten}
            dato="10.03.2021"
            />
            <Arrangement
            bilde={bg}
            tittel="En helt alminnelig fredag må feires!"
            profilKilde={bild}
            dato="12.03.2021"
            />
            
            <Arrangement
            bilde="https://cdn.wallpapersafari.com/14/56/wqYDt1.jpg"
            tittel="Tour dè Breisås"
            profilKilde={"https://sosialnytt.com/wp-content/uploads/2015/10/vindu.jpg"}
            dato="19.03.2021"
            />
            
            <Arrangement
            bilde={bg}
            tittel="En helt alminnelig fredag må feires!"
            profilKilde={bild}
            dato="26.03.2021"
            />
            <Arrangement
            bilde={bg}
            tittel="En helt alminnelig fredag må feires!"
            profilKilde={bild}
            dato="02.04.2021"
            />
            <Arrangement
            bilde={bg}
            tittel="En helt alminnelig fredag må feires!"
            profilKilde={bild}
            dato="09.04.2021"
            />
            
            {arrangements.map((arrangement) => (
                <Arrangement
                bilde={arrangements.data.bilde}
                tittel={arrangements.data.tittel}
                profilKilde={arrangements.data.profilKilde}
                dato={arrangements.data.dato}
                />
            ))} 
        </div>
    );
}

export default Feed