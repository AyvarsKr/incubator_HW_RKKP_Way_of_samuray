import s from "../Dialogs.module.css";

type propsMessage = {
    message: string;
    id: string;
}

export const Message = (props:propsMessage) => {
    return (
        <>
                <div id={props.id} className={s.message}>{props.message}</div>
        </>
    )
}