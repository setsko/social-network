import React from "react";
import s from "./DialogBar.module.css";
import {NavLink} from "react-router-dom";

type DialogBarPropsType = {
    message: string;
}
export const DialogBar = (props: DialogBarPropsType) => {
    return (
            <div className={s.message}>{props.message}</div>
    )
}






export default DialogBar;