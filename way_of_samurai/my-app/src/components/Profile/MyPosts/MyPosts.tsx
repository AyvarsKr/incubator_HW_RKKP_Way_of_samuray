import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsArrayType} from "../Profile";
import {ChangeEvent} from "react";
import {state} from "../../../redux/state";

type propsMyPosts = {
    posts: Array<postsArrayType>,
    addPost: () => void
}

export const MyPosts = (props: propsMyPosts) => {


    const newChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value;
        state.profilePage.newPostText = newText;
        console.log(newText)
    }

    const addPost = () => {
        props.addPost()
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={() => addPost()}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(el => {
                    return (
                        <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}