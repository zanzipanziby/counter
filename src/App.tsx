import React, {useState} from 'react';

import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const[number, setNumber] = useState(0)
    const changeNumber = () => {
        if (number < 5) {
            setNumber(number + 1)
        }
    }
    const resetNumber = () => {
        setNumber(0)
    }
    return (
        <div className="App">
            <Counter
                number = {number}
                changeNumber={changeNumber}
                resetNumber = {resetNumber}/>
        </div>
    );
}

export default App;
//------
