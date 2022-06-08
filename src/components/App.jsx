import React from 'react';
import {Routes, Route} from "react-router-dom";
import Chats from "./Chats";
import Messages from "./Messages";

function App () {
    return(
        <Routes>
            <Route path='/' element={<Chats/>}/>
            <Route path='/message/:id' element={<Messages/>}/>
        </Routes>
    )
}

export default App;