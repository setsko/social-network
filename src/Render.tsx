import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {stateTypes} from "./Redux/state";
import {addPost} from "./Redux/state";


export let rerenderEntireTree = (state:stateTypes) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    dialogsData={state.profile.dialogsData}
                    messageData={state.profile.messageData}
                    postDataType={state.messagesPages.postData}
                    addPost={addPost}/>

            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}