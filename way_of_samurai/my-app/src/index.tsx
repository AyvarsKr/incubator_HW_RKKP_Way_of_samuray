import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state, StateProps, updateNewPostText} from './redux/state';


export const rerenderEntireTree = (state: StateProps) => {

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );

    reportWebVitals();
}
rerenderEntireTree(state);