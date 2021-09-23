import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsDataType, messageDataType, postDataType} from "./Redux/state";
import {stateTypes} from "./Redux/state";


const App = (props: any) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"} render={() => <Dialogs
                    dialogsData={props.dialogsData}
                    messageData={props.messageData}/>}/>
                <Route path={"/profile"} render={() => <Profile
                    postDataType={props.postDataType}
                    addPost={props.addPost}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
