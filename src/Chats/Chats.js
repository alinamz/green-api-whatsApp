import Chat from '../Chat/Chat';
import HeaderChats from './HeaderChats/HeaderChats';


function Chats({ setIsOpen, chats, setSelectedChat }) {
    return (
        <section class='chats'>
            <HeaderChats setIsOpen={setIsOpen}></HeaderChats>
            {(chats.length === 0) ? <div>
                <h2 class='chats__null'>Для начала чата нажмите на кнопку диалога</h2>
            </div> : (<div class='chats__container'>
                {chats?.map((chat) => { return <Chat setSelectedChat={setSelectedChat} chat={chat}></Chat> }
                )}
            </div>)}
        </section>
    )
}

export default Chats;