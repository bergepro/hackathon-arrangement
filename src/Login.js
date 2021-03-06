import { Button } from "@material-ui/core";
import React from 'react';
import "./Login.css";
import  logo from "./arrangement.png";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        // Logger inn...
        auth
        .signInWithPopup(provider)
        .then(result=> {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className= "login">
            <div className="login__logo">
            <img
              src={logo}
              alt=""
            />
        </div>
        <Button type="submit" onClick={signIn}>
            Logg Inn
        </Button>
        </div>
        
);
}


export default Login;