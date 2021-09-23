import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataTypeProps} from "../Profile";


const MyPosts = (props: postDataTypeProps) => {


    let postDataElements =
        props.postDataType.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value="";
        }
    }


    return <div className={s.content}>
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
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