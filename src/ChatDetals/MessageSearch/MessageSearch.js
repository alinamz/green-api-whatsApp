function MessageSearch({ selectedChat }) {
    return (
        <header class='chat-detals__header'>
            <div class='chat-detals__container'>
                <img class='chat-detals__avatar ' alt='Аватар чата' src={selectedChat.avatar} />

                <div class='chat-detals__data'>
                    <h1 class='chat-detals__title'>{selectedChat.name}</h1>
                    <p class='chat-detals__desc'>Был 14:15</p>
                </div>
            </div>

            <div class='chat-detals__buttons'>
                <button class='chat-detals__search-button'></button>
                <button class='chat-detals__menu-button'></button>
            </div>
        </header>
    )
}

export default MessageSearch;