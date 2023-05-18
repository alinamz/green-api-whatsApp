function Chat({ chat, setSelectedChat }) {

    function handleChatSelect() {
        setSelectedChat(chat);
    }

    return (
        <button class='chat' onClick={handleChatSelect}>
            <img class='chat__avatar' src={chat.avatar} alt='Аватар пользователя' />
            <div class='chat__info'>
                <div class='chat__content'>
                    <h2 class='chat__name'>{chat.name}</h2>
                    <p class='chat__text'></p>
                </div>
                <p class='chat__data'></p>
            </div>

        </button>
    )
}

export default Chat;