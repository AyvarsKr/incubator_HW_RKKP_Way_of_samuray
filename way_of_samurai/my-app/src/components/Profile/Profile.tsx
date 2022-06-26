import s from './Profile.module.css'
import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://boek.pro/image/catalog/blog/acticle_open_boek_1.png" alt=""/>
            </div>
            <div>
                ava + descripstion
            </div>
            <MyPosts/>
        </div>
    )
}