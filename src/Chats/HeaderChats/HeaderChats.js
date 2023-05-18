function HeaderChats({setIsOpen}) {

    function onclick() {
       setIsOpen(true);
    }

    return(
        <header class='chats__header'>
            <img class='chats__me-avatar' alt='Аватар пользователя' src='https://avatars.mds.yandex.net/i?id=e8e60c4112562c141ed6e582545c4800-5241728-images-thumbs&n=13'/>

            <div class='chats__buttons'>
                <button class='chats__button-menu'></button>
                <button class='chats__button-new-chat' onClick={onclick}></button>
            </div>
        </header>
    )
}

export default HeaderChats;