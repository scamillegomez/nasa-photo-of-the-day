import React, {useEffect,useState} from "react";
import "./App.css";
import Widget from "./Widget";
import axios from 'axios';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  justifySelf: 'center',
  width: '90%'
}

function App() {
  const [data,setData] = useState('');

  useEffect(()=>{
    const fetchData = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=6FB9nBzjZDiVRO53lSdVVOHGToAH4ohYvJJlsyMF`)
        // .then(res=>console.log(res.data))
        .then((res)=>{
          setData(res.data);
          // console.log(res.data);
        })
        .catch(err=>console.log(err));
    }
    fetchData();
  },[]);

  return (
    <div className="App" style={appStyle}>
      <Widget data={data} />
    </div>
  )
};

export default App;
