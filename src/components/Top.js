import Typed from 'react-typed';
import React,{useState} from 'react';
import '../App.css';

const Top = () => {
    const [col,setcol]=useState('white');
    const carr=['#ffd32a','#d2dae2','#0be881','#ff3f34','#575fcf'];

    const change=()=>{
        let n=Math.floor(Math.random()*5);
        setcol(carr[n]);
    }
    const sss={
        color:col
    }
    setTimeout(change,1000);
    return (
        <>
        <div className="firstpicdiv">
            <img className="firstpic" src="pics1.jpg" alt="myimage" />
            <Typed className="typedd" style={sss}
                strings={['HTML','CSS','JavaScript','Python','C','React','C++',]}
                typeSpeed={80}
                backSpeed={100}
                loop
            />
        </div>
        </>
    );
}

export default Top;
