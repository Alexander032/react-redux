import {createStore} from "redux";
import {combineReducers} from "redux";
import {messagesReducer} from "./reducers/messageReducers/messagesReducer";
import {chatsReducers} from "./reducers/chastReducers/chatsReducers";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";


const persistConfig = {
        key: 'root',
        storage
}

const time = store => next => action => {
        const delay = action?.meta?.delay;
        if(!delay) {
                return next(action)
        }

        const timeOut = setTimeout(() => next(action), delay)

        return () => {
                clearTimeout(timeOut)
        }
};

const logger = createLogger({
        diff: true,
        collapsed: true
})

const rootReducer = combineReducers({
        messages:messagesReducer,
        chats:chatsReducers
})



const persistedReducer = persistReducer(persistConfig, rootReducer )
export const store = createStore(persistedReducer, applyMiddleware(time, logger));
export const persist = persistStore(store)