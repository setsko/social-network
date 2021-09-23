import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { postDataType } from "../../Redux/state";


export type postDataTypeProps = {
    postDataType:Array<postDataType>
    addPost: (postMessage:string) => void

}


const Profile = (props:postDataTypeProps) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postDataType={props.postDataType} addPost={props.addPost}/>
    </div>
}

export default Profile;