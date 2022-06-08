import React from 'react';
import {useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chastReducers/selector";
import {NavLink} from "react-router-dom";

const Chats = () => {
    const chats = useSelector(chatsSelector)
    return (
        <div>
            {
                chats.map((chat)=>(
                    <NavLink key={chat.id} to={`/message/${chat.id}`}>
                        {chat.name}
                    </NavLink>
                ))
            }
            
        </div>
    );
};

export default Chats;