import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message:'Hi, how are you?', likesCount:12},
        {id:2, message:'It\'s my first post', likesCount:11},
        {id:2, message:'It\'s my first post', likesCount:11},
        {id:2, message:'It\'s my first post', likesCount:11}
    ]

    let postsElement = posts.map( p => <Post message={p.message} likeCount={p.likesCount}/> )

    return (
        <div className={classes.content}>
            <div className={classes.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts