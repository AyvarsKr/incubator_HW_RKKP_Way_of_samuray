import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog id={1} name={'Ayvars'}/>
                <Dialog id={2} name={'Artem'}/>
                <Dialog id={3} name={'Sasha'}/>
                <Dialog id={4} name={'Lev'}/>
                <Dialog id={5} name={'Katya'}/>

            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="How are you?"/>
                <Message message="bye bye"/>
            </div>
        </div>
    )

}