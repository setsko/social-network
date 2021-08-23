import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


type ContactsBarProps = {
    name: string;
    id: number;
}

type DialogBarProps = {
    message: string;

}


const ContactsBar = (props: ContactsBarProps) => {
    let path = "/dialogs/" + props.id;
    return (

        <div className={s.dialogsItems}>
            <div className={s.Items + " " + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const DialogBar = (props: DialogBarProps) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}



type dialogsDataType = {
    id: number
    name: string
}

let dialogsData = [
    {id: 1., name: "Egor"},
    {id: 2., name: "Nastya"},
    {id: 3., name: "Elena"},
    {id: 4., name: "Volodya"},
    {id: 5., name: "Valentina"},
    {id: 6., name: "Valeriy"},
]

type messageDataType = {
    id: number
    message: string
}

let messageData = [
    {id: 1., message: "Hi"},
    {id: 2., message: "How are u?"},
    {id: 3., message: "Yo"},
]

type DialogPropsType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
}

const Dialogs = (props: DialogPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <ContactsBar name={dialogsData[0].name} id={dialogsData[1].id}/>
                <ContactsBar name={dialogsData[1].name} id={dialogsData[2].id}/>
                <ContactsBar name={dialogsData[2].name} id={dialogsData[2].id}/>
                <ContactsBar name={dialogsData[3].name} id={dialogsData[2].id}/>
                <ContactsBar name={dialogsData[4].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <DialogBar message={messageData[0].message}/>
                <DialogBar message={messageData[1].message}/>
                <DialogBar message={messageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;