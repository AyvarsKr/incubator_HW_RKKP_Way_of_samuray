import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsArrayType} from "../Profile";

type propsMyPosts = {
    posts: Array<postsArrayType>;
}

export const MyPosts = (props: propsMyPosts) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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