import s from "../Dialogs.module.css";
import {NavLink} from 'react-router-dom';

type propsDialog = {
id: number;
name: string;
}

export const Dialog = (props:propsDialog) => {
    return (
        <>
            <NavLink to={'dialog/' + props.id} className={s.dialog}>{props.name}</NavLink>
        </>
    )
}