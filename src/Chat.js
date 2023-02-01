import React from 'react';
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

function Chat({name,message,profilePic}) {
    const chat_link= useNavigate(); 
    const first_name= name.split(" ");
    return (
        <IconButton onClick={() => chat_link( "/chat/"+first_name[0]+first_name[1])} className="chat-button">
    <div className='chat'>

            <Avatar src={profilePic} alt={name} ></Avatar>
            <div className='chat-details'>
            <div className='chat-name'>{name}</div>
            <div className='chat-message'>{message}</div>
            </div>

    </div>
        </IconButton>
  )
}

export default Chat