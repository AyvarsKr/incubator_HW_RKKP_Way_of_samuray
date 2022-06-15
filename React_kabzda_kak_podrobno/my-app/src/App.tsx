import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <>
            Article 1
            <Rating value={4}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
            Article 2
            <Rating value={5}/>
        </>
    );
}


export default App;
