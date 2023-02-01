import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import db from './firebase';



function TinderCards(){
    function onSwipe(direction){
        console.log(direction);
    }

    const [data,setData] = React.useState([
        
        // {
        //     name:"Aishwarya Rai",
        //     image_url:'http://starsunfolded.com/wp-content/uploads/2014/06/Aishwarya-Rai-1.jpg',
        //     age: 29,

        // },
        // {
        //     name:"Tara Sutaria",
        //     image_url:"https://w0.peakpx.com/wallpaper/848/542/HD-wallpaper-tara-sutaria.jpg",
        //     age: 29,

        // },
        // {
        //     name:"Disha Patani",
        //     image_url:'https://wikibio.in/wp-content/uploads/2017/11/Disha-Patani-e1511782496281.jpg',
        //     age: 29,
        // },
    ])
    React.useEffect(() => {
        db
          .collection("data")
          .onSnapshot((snapshot) =>
            setData(snapshot.docs.map((doc) => doc.data()))
          );
        console.log("1");
        // console.log(data);
        // return () => {
        //   unsubscribe();
        // };
      }, []);
    return(
        <div className="tinder_card">
            {/* Your potential match */}
            {data.map(d => (
                <TinderCard className="container-card" onSwipe={onSwipe} preventSwipe={["up","down"]} key={d.image_url}>
                    {/* Lorem ipsum */}
                    <div style={{backgroundImage: `url(${d.image_url})` } } className="card">
                        <span className="card-name">{d.name}</span>
                        <span className="card-age">{d.age}</span>
                    </div>
                </TinderCard>
            ))}
            
        </div>

    )

    
}

export default TinderCards;