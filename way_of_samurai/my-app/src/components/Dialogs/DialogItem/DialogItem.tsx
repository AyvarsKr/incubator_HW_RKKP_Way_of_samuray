import s from "./DialogItem.module.css";
import {NavLink} from 'react-router-dom';

type propsDialog = {
id: string;
name: string;
}

export const DialogItem = (props:propsDialog) => {
    return (
        <>
            <NavLink to={'dialog/' + props.id} className={s.dialog}>{props.name}</NavLink>
        </>
    )
}