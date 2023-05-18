import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import PopupNewChat from "./PopupNewChat/PopupNewChat";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [dataProfile, setDataProfile] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [numberContact, setNumberContact] = React.useState('');
  const [chats, setChats] = React.useState([]);
  const [selectedChat, setSelectedChat] = React.useState(null)

  React.useEffect(() => { }, [loggedIn]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login setLoggedIn={setLoggedIn} setDataProfile={setDataProfile} />} />
        <Route exact path="/chats" element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Main
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              chats={chats}
              setIsOpen={setIsOpen}>
            </Main>
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
      <PopupNewChat setChats={setChats}
        chats={chats}
        setNumberContact={setNumberContact}
        setIsOpen={setIsOpen}
        isOpen={isOpen}>
      </PopupNewChat>
    </>
  );
}

export default App;
