function ChatDetalsMessage({ message }) {
    return (
        <>
            {
                (message.telephone !== undefined) ? (<li class='chat-detals__message' >
                    <p class='chat-detals__text'>{message.message}</p>
                </li>) : (
                    <li class='chat-detals__message-me' >
                        <p class='chat-detals__text'>{message.message}</p>
                    </li>
                )
            }
        </>
    )
}

export default ChatDetalsMessage;