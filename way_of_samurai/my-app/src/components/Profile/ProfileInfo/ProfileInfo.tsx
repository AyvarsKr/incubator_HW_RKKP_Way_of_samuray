import s from './ProfileInfo.module.css'
import React from "react";
import {MyPosts} from "../MyPosts/MyPosts";


export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://boek.pro/image/catalog/blog/acticle_open_boek_1.png" alt=""/>
            </div>
            <div  className={s.descriptionBlock}>
                ava + descripstion
            </div>
        </>
    )
}