import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import logo from "./images/logo2.jpeg"
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const history = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link style={{ textDecoration: 'none'}} to="/">
        <div className="header_content">
            <img
            className="header__logo"
            src={logo}
            alt="tinder logo"
            />
            <div className="header_heading">
                Tinder    
            </div>
        </div>

      </Link>
      <Link to="/chat">
        {!backButton ? (
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton> ):(
            <IconButton style={{opacity: 0}}>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton> 
        )
        }
      </Link>
    </div>
  );
}

export default Header;