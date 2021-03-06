import React from "react";
import s from "./Post.module.css";


type PostType= {
    message:string;
    likesCount:number;
}


const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMeCyOueXNI3vrvdp6coOxOsIKxWQjIF_pA&usqp=CAU"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
            <div>
                <span>Dislike</span>
            </div>

        </div>)
}

export default Post;