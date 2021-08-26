import React from "react";
import s from "./ContactsBar.module.css";
import {NavLink} from "react-router-dom";

export type ContactsBarPropsType = {
    name: string;
    id: number;
}

export const ContactsBar = (props: ContactsBarPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
            <div className={s.Items + " " + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default ContactsBar;