
// import Weather from './Weather';
import './App.css';
import React from 'react';
import { useState  } from 'react';


const API_KEY = '1ded49cf4768dfef68a1742fb1367614'
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
function App() {
  // const [location,setLocation] = useState('')
  const [post, setPost] = useState(null);
  const [text,setText] = useState("")


   
  const ChangeText=(e)=>{
  setText(e.target.value)
  }
  function ChangeCity(){
  fetch(`${BASE_URL}weather?q=${text}&appid=${API_KEY}&units=metric`)
  .then(res => res.json())
  .then(res =>{
    setPost(res)
  }).catch(console.log("results not found")) 
  }
  return (
    <div>
    <header>
        <h1>Weather Application</h1>
    </header>
    <main>
        <input type='text' onChange={ChangeText} value={text}/>
        <button id="search" onClick={ChangeCity}>Search</button>
        <div id="weather">
        {post && (
        <div className="">
          <h2 className="">{post.name}</h2>
          <p>Temperature: {post.main.temp}°C</p>
          <p>Description: {post.weather[0].description}</p>
          <p>Feels like: {post.main.feels_like}°C</p>
          <p>Humidity: {post.main.humidity}%</p>
        </div>
      )}
        </div>
    </main>
    <footer>
        <p>Copyright © 2023</p>
    </footer>
    </div>
  );
}

export default App;
