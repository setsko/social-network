import {rerenderEntireTree} from "../Render";




export type messageDataType = {
    id: number
    message: string
}
export type dialogsDataType = {
    id: number
    name: string
}
export type postDataType =   {
    id: number
    message: string
    likesCount: number
}

export type profileTypes = {
    messageData:Array<messageDataType>
    dialogsData:Array<dialogsDataType>
}

export type messagesPagesTypes = {
    postData:Array<postDataType>
}

export type stateTypes = {
    profile: profileTypes
    messagesPages: messagesPagesTypes
}



let state:stateTypes = {
        profile: {
        messageData: [
            {id: 1., message: "Hi"},
            {id: 2., message: "How are u?"},
            {id: 3., message: "Yo"},
        ],
        dialogsData: [
            {id: 1., name: "Egor"},
            {id: 2., name: "Nastya"},
            {id: 3., name: "Elena"},
            {id: 4., name: "Volodya"},
            {id: 5., name: "Valentina"},
            {id: 6., name: "Valeriy"},
        ],
    },
    messagesPages:{
        postData: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 2, message: "It's, my first post", likesCount: 23},
            {id: 3, message: "It's, my first post", likesCount: 15},
            {id: 4, message: "It's, my first post", likesCount: 182}
        ]
    }
}



export let addPost = (postMessage:string) => {
    let newPost:postDataType = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.messagesPages.postData.push (newPost);
    rerenderEntireTree(state);
}



export default state;