import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { postDataType } from "../../Redux/state";


export type postDataTypeProps = {
    postDataType:Array<postDataType>
}


const Profile = (props:postDataTypeProps) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postDataType={props.postDataType}/>
    </div>
}

export default Profile;