import Chats from './Chats/Chats';
import ChatDetals from './ChatDetals/ChatDetals';

function Main({ setIsOpen, chats, setSelectedChat, selectedChat }) {
    return (
        <div class='content'>
            <Chats setSelectedChat={setSelectedChat} chats={chats} setIsOpen={setIsOpen}></Chats>
            <ChatDetals selectedChat={selectedChat}></ChatDetals>
        </div>
    )
}

export default Main;