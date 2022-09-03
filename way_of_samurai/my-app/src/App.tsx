import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {v1} from "uuid";

type propsApp = {}

let postData = [
    {id: v1(), message: 'Hi, how are you?', likesCount: 15},
    {id: v1(), message: 'It\'s my first post', likesCount: 12},
]


let dialogsData = [
    {id: v1(), name: 'Ayvars'},
    {id: v1(), name: 'Artem'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Lev'},
    {id: v1(), name: 'Katya'},

]

let messageData = [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'How is your it-kamasutra?"'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'bye bye'},
    {id: v1(), message: '^_^'},
]



function App(props: propsApp) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs*" element={<Dialogs dialogs={dialogsData} message={messageData}/>}/>
                        <Route path="/profile*" element={<Profile posts={postData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
