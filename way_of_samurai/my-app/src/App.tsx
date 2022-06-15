import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Navbar} from "./Components/Navbar";
import {Profile} from "./Components/Profile";


function App() {
    return (
        <div >
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
