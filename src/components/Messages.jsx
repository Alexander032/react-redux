import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {messageSelector} from "../redux/reducers/messageReducers/selector";
import {useParams} from "react-router-dom";
import {ADD_MESSAGE, DELETE_MESSAGES} from "../redux/actions/actionTypes";

const Messages = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const {ChatsId} = useParams();
    const chatsMessage = useSelector(messageSelector);

 const message = chatsMessage.filter((message) => {
     if(!ChatsId) return true;

     return message.chatId === Number(ChatsId)
    });

    const addMessage = () => {
        const random = Math.random();
        const obj = {
            id: random,
            chatId: ChatsId,
            title: title
        }
        dispatch({type:ADD_MESSAGE, payload:obj})
    }


    const deleteMessage =(id) => {
        dispatch({type:DELETE_MESSAGES, payload:id, meta:{
            delay:3000
            }})
    }

    return (
        <div>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button onClick={addMessage}>Добавить </button>
            {message.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div><button onClick={() => deleteMessage(item.id)}>Удалить</button></div>
                </div>
            ))}
        </div>
    );
};

export default Messages;