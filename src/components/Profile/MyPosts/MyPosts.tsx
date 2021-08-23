import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";




/*type postDataType = {
    id:number
    message:string
    likesCount:string
}

type postDataTypeProps = {
    postData:Array<postDataType>
}*/

const MyPosts = (/*props: /!*postDataTypeProps*!/*/) => {

    let postData = [
        {id:1, message:"Hi, how are you?", likesCount:0},
        {id:2, message:"It's, my first post", likesCount:23}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    </div>
}

export default MyPosts;