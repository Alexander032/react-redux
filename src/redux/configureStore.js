import {createStore} from "redux";
import {combineReducers} from "redux";
import {messagesReducer} from "./reducers/messageReducers/messagesReducer";
import {chatsReducers} from "./reducers/chastReducers/chatsReducers";


export const store = createStore(combineReducers({
        chats: chatsReducers,
        messages:messagesReducer
}))