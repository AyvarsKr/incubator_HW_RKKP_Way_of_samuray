import s from './Post.module.css'


type propsPost = {
    likesCount: number;
    message: string;
}


export const Post = (props:propsPost) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=c8b3607c2857bd49501e1697afb4ceb9-5688986-images-thumbs&n=13"
                    alt=""/>
                {props.message}
                <div>
                    <span>like:{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}