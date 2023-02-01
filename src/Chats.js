import React from 'react';
import Chat from './Chat';
function Chats() {
  return (
    <div className='chats' style={{backgroundColor:"rgb(98, 97, 97)",minHeight:"95vh"}}>
    <Chat name="Kriti Sanon" message="How are you?" profilePic="https://superstarsbio.com/wp-content/uploads/2021/05/Kriti-Sanon.jpg"></Chat> 
    <Chat name="Esha Gupta" message="Heyyy" profilePic="https://wikibio.in/wp-content/uploads/2019/05/Esha-Gupta-Photo.jpg"></Chat> 
    <Chat name="Nita Ambani" message="What are you doing?" profilePic="http://starsunfolded.com/wp-content/uploads/2016/10/Nita-Ambani.jpg"></Chat> 
    <Chat name="Shiv Shukla" message="Will come in 5 mins" profilePic="https://media.licdn.com/dms/image/C4D03AQEaq8fX8iC3iA/profile-displayphoto-shrink_800_800/0/1653620496523?e=1680739200&v=beta&t=-FwOsoZ7CFYAhVNpNAnR1nSsCRzWdrSHY9zjEzuY83E"></Chat> 


    </div>
  )
}

export default Chats;