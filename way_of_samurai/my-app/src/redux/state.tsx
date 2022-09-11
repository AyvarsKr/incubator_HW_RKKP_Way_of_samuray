import {v1} from "uuid";
import {rerenderEntireTree} from "../index";

// let rerenderEntireTree = () => {
//     console.log('State changed');
// }

type PostsType = {
    id: string,
    message: string,
    likesCount: number
}

type DialogsType = {
    id: string,
    name: string
}

type MessagesType = {
    id: string,
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type StateProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let state = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 15},
            {id: v1(), message: 'It\'s my first post', likesCount: 1},
            {id: v1(), message: 'It\'s my 2 post', likesCount: 3},
            {id: v1(), message: 'It\'s my 3 post', likesCount: 4}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Ayvars'},
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Lev'},
            {id: v1(), name: 'Katya'},
        ],
        messages: [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How is your it-kamasutra?"'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'bye bye'},
            {id: v1(), message: '^_^'},
        ]
    },
    sidebar: {}
}

// window.state = state;

export const addPost = () => {
    let newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = () => {

}
