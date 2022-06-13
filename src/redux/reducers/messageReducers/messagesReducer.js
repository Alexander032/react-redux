import {DELETE_MESSAGES,ADD_MESSAGE} from "../../actions/actionTypes";


const initialState = {
    messages:[
        {
            id:1,
            chatId:1,
            title:'как дела?'
        },
        {
            id:2,
            chatId:2,
            title:'нормально!'
        },
        {
            id:3,
            chatId:1,
            title:'что делаешь?'
        },
        {
            id:4,
            chatId:2,
            title:'как дела?'
        },
        {
            id:5,
            chatId:1,
            title:'фильм смотрю'
        }
    ]
}


export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGES:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        default:
            return state
    }
}