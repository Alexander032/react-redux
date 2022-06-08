


const initialState = {
    chats:[
        {
            id:1,
            name:"Валера"
        },
        {
            id:2,
            name:"Иван"
        }
    ]
}

export const chatsReducers = (state = initialState,action) => {
    switch (action.type) {



        default:
            return state
    }
}