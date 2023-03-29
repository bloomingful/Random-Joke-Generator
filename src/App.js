import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Axios from 'axios';

function App() {
    const [joke, setJoke] = useState("")

    const getJoke = () => {
      Axios.get("https://official-joke-api.appspot.com/random_joke").then(
        (response) => {
          console.log(response);
          setJoke(response.data.setup + "..." + response.data.punchline); 
        }
      );
    };

    return (
        <div className="App">
          <div>{joke}</div>
          <div><button onClick={() => getJoke()}>I want a joke now!</button></div>
        </div>
    );
}

export default App;
