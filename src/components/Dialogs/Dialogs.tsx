import React from "react";
import s from "./Dialogs.module.css";
import ContactsBar from "./ContactsBar/ContactsBar";
import DialogBar from "./DialogBar/DialogBar";
import {NavLink} from "react-router-dom";
import {dialogsDataType, messageDataType} from "../../Redux/state";


export type DialogPropsType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
}

const Dialogs = (props: DialogPropsType) => {
    let messageElements = props.messageData
        .map((message) => <DialogBar message={message.message}/>)
    let ContactsBarElements = props.dialogsData
        .map(dialog => <ContactsBar name={dialog.name} id={dialog.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {ContactsBarElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;