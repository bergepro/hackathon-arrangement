import { Avatar } from "@material-ui/core";
import "./LeggUt.css";
import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function LeggUt() {
    const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageURL, setImageUrl] = useState("");
    const [datotekst, setDato] = useState("");
    const sendInn = (e) => {
      e.preventDefault(); 

        db.collection('arrangements').add({
            tittel: input,
            profilKilde:user.photoURL,
            dato: datotekst,
            bilde: imageURL,
        })


        // db
      setInput("");
      setImageUrl("");
      setDato("");

    };


    return (
        <div className="leggUt">
        <div className="leggUt__top">
            <Avatar src={user.photoURL} />
            <form>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className="leggUt__input"
                    placeholder={"Legg til en tittel / Kort beskrivelse."}
                />

            <input
            value={imageURL}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <input
            value={datotekst}
            onChange={(e) => setDato(e.target.value)}
            type="text"
            placeholder="Dato"
          />
                <button onClick={sendInn} type="submit">
                    Gjemt Send Inn knapp
                </button>
            </form>
        </div>  

        <div className="leggUt__bunn">

        </div>
    </div>
    );
}

export default LeggUt;