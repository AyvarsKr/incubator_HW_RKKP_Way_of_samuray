import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {v1} from 'uuid'

type dialogsArrayType = {
    id: string,
    name: string
}
type MessageArrayType = {
    id: string,
    message: string
}


type dialogsPropsType = {
    dialogs: Array<dialogsArrayType>
    message: Array<MessageArrayType>
}

export const Dialogs = (props: dialogsPropsType) => {

    return (


        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    props.dialogs.map(el => {
                        return <div><DialogItem id={el.id} name={el.name}/></div>
                    })}

            </div>
            <div className={s.messages}>

                {
                    props.message.map(el => {
                        return (
                            <Message id={el.id} message={el.message}/>
                        )
                    })
                }
            </div>
        </div>
    )

}