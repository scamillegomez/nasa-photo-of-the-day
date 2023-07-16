import React, {useEffect,useState} from "react";
import axios from 'axios';

const imgStyle = {
    height: '25rem',
    width: 'auto',
    border: 'solid 0.1px',
    borderRadius: '20px'
  };
  
  const headStyle = {
    fontSize: '1.5rem',
    width: 'auto'
  };
  
  const spanStyle = {
    fontSize: '1.9rem',
    width: 'auto'
  };

function Widget(props){
   return (
    <>
    <h1 style={headStyle}>NASA Photo of the Day: <br/> <span style={spanStyle}>{props.data.title}</span></h1>
    <div className="image">
      <img src={props.data.url} alt=""  style={imgStyle}/>
      <h4>{props.data.explanation}</h4>
    </div>
    </>
   ) 
}

export default Widget;