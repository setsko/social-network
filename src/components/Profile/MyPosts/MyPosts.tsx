import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataTypeProps} from "../Profile";



const MyPosts = (props: postDataTypeProps) => {


    let postDataElements =
        props.postDataType.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={s.content}>
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    </div>
}

export default MyPosts;