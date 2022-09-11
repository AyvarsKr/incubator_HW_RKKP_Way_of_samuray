import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateProps} from "./redux/state";


type AppState = {
    state: StateProps,
    addPost: () => void,
    updateNewPostText: () => void
}


function App(props: AppState) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs*"
                               element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                 message={props.state.dialogsPage.messages}/>}/>
                        <Route path="/profile*"
                               element={<Profile posts={props.state.profilePage.posts}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
