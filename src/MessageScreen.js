import React from 'react';
import db from './firebase';
import Avatar from "@material-ui/core/Avatar";
import "./MessageScreen.css";

function MessageScreen() {

    const curr_link = document.URL;
    const arr=curr_link.split("/");
    const id=arr[4];
    const names= id.match(/[A-Z][a-z]+/g);
    const [dateOfMatch,setDateOfMatch]=React.useState(["22/01"]);

    const [message,setMessage]= React.useState([]);
    const [input,setInput]= React.useState("");
    // let a=0;
    // const [index,setIndex] = React.useState(0);
    React.useEffect(()=>{
        db.collection("people").doc("chats").collection(id).onSnapshot((snapshot)=> setMessage(snapshot.docs.map((doc) => doc.data())));
        console.log(1);
    },[]);
    
    function handleSend(e){
        if(input!==""){
        e.preventDefault();
        setMessage([...message,{message:input}]);
        db.collection("people").doc("chats").collection(id).doc("KSmessage"+(message.length+1).toString()).set({message: input});
        setInput("");
        console.log(message.length);
        }
        else{
            e.preventDefault();
            setInput("");

        }
    }
    return (
        <div className='messages'>
            {/* MessageScreen */}
            <div className='match-details'>You matched with 
                <span className='match-name'>{names[0]+ " "+ names[1]} </span> on 
                <span className='match-name'>{dateOfMatch}</span>
            </div>
            {/* <div>{message.length}</div> */}
            {message.map(m =>
                m.profilePic?(
                <div key={m.message} className='message-received'> 
                <Avatar src={m.profilePic} alt={names[0]} ></Avatar>
                <div className='message-content'>{m.message} </div>
                </div>):(
                <div key={m.message} className="message-received">
                    <div className="message-sent">{m.message} </div>
                </div>

                )
            )}
            <form className="message-form">
                <input
                className="message-input"
                type="Type your text here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button
                onClick={handleSend}
                type="submit"
                className="message-button"
                >
                SEND
                </button>
            </form>

        </div>

    )
}

export default MessageScreen