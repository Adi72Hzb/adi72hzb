import React,{useState} from 'react';
import '../App.css';

const Aboutme = () => {
    const [col,setcol]=useState('green');
    const iam="I am currently a CSE undergrad from NIT ROURKELA."
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
    const Updatecol=()=>{
        setcol(getRandomColor());
    }
    setTimeout(Updatecol,500);

    const bs={boxShadow:"0px 0px 2px 3px",color:col};
    return (
        <div className="main-About-me" style={bs}>
         <p className="About-me-text">{iam}</p>   
         {/* <p className="About-me-text">"I tried so hard and got so far IN THE END it doesnt even matter"</p> */}
        </div>
    )
}

export default Aboutme;
