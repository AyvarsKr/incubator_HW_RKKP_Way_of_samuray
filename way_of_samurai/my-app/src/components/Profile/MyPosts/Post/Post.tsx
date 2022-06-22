import s from './Post.module.css'


export const Post = () => {
    return (
   <div>
    <div className={s.item}>
        <img src="https://avatars.mds.yandex.net/i?id=c8b3607c2857bd49501e1697afb4ceb9-5688986-images-thumbs&n=13" alt=""/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>
</div>
    )
}