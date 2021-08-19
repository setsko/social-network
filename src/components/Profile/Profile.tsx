import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://ega.ee/wp-content/uploads/2020/06/cyber_hacker.jpg"/>
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;