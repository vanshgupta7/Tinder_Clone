// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import TinderCards from './TInderCards';
import Footer from './Footer';
import Chats from './Chats';
import MessageScreen from './MessageScreen';


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={ 
          <div> 
            
            <Header/> 
            <TinderCards /> 
            <Footer />
          </div>
          } />
          <Route path="/chat" element={ 
          <div> 
            
            <Header backButton="/"/> 
            <Chats />
          </div>
          } />
          <Route path="/chat/:person" element={ 
          <div> 
            
            <Header backButton="/chat"/> 
            <MessageScreen />
            {/* <Chats /> */}
            {/* I am here */}
          </div>
          } />

        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
