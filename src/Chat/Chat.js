function Chat({ chat, setSelectedChat }) {

    function handleChatSelect() {
        setSelectedChat(chat);
    }

    return (
        <button class='chats__element' onClick={handleChatSelect}>
            <img class='chats__element-avatar' src={chat.avatar} alt='Аватар пользователя' />
            <div class='chats__element-info'>
                    <h2 class='chat__element-name'>{chat.name}</h2>
                    <p class='chat__element-text'></p>
            </div>

        </button>
    )
}

export default Chat;