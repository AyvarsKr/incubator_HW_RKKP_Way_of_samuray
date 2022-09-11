import s from './Profile.module.css'
import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postsArrayType = {
    id: string,
    message: string,
    likesCount: number
}


type propsProfile = {
    posts: Array<postsArrayType>,
    addPost: () => void,
    updateNewPostText: () => void
}


export const Profile = (props: propsProfile) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </>
    )
}