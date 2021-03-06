import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import logo from "./arrangement.png";
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, IconButton } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStateValue } from "./StateProvider";
// rydd opp plz ^




function Header() {
    const [{ user }, dispatch] = useStateValue();
    
    return <div className="header">
            <div className="header__venstre">
            <img src={logo}alt="Nettside Logo"/>
            <div className="header__input">
                <SearchIcon />
                <input type="text"></input>
            </div>
            </div>
            
            <div className="header__midten">
                <div className="header__option 
                header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <PostAddIcon fontSize="large" />
                </div>    
            </div>

            <div className="header__hoyre"></div>
            
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
        </div>
        }

export default Header;
