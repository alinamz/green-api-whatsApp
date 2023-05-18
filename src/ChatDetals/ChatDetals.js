import React from "react";
import api from "../api/api";
import ChatDetalsMessage from "./ChatDetalsMessage/ChatDetalsMessage";
import MessageSearch from "./MessageSearch/MessageSearch";
import { DebounceInput } from 'react-debounce-input'

function ChatDetals({ selectedChat }) {

    const RECEIVE_NEW_MESSAGE_INTERVAL = 2000;

    const [newMessage, setNewMessage] = React.useState('');
    const [messages, setMessages] = React.useState([]);

    function handleSendMessage() {
        api.sendMessage(
            sessionStorage.getItem('idInstance'),
            sessionStorage.getItem('apiTokenInstance'),
            selectedChat.chatId,
            newMessage);

        setMessages([...messages, {
            message: newMessage
        }]);

        setNewMessage('');
    }

    function handleMessageInputChange(e) {
        e.preventDefault();
        setNewMessage(e.target.value);
    }

    function receiveNewMessage() {
        const currentSession = {};
        this.lastSessions = currentSession;

        api.getMessage(sessionStorage.getItem('idInstance'), sessionStorage.getItem('apiTokenInstance'))
            .then((data) => {
                if (this.lastSessions !== currentSession) {
                    return;
                }

                if (!messages.some((message) => message?.idMessage === data?.body?.idMessage) && data?.body !== null) {
                    if (data?.body?.messageData?.textMessageData?.textMessage !== undefined) {
                        let newMessages = {
                            telephone: data.body.senderData.chatId,
                            message: data.body.messageData.textMessageData.textMessage,
                            idMessage: data.body.idMessage
                        };

                        setMessages(prevMessages => [...prevMessages, newMessages]);

                        api.deleteMessage(
                            sessionStorage.getItem('idInstance'),
                            sessionStorage.getItem('apiTokenInstance'),
                            data.receiptId);

                    } else if (data !== null) {
                        api.deleteMessage(
                            sessionStorage.getItem('idInstance'),
                            sessionStorage.getItem('apiTokenInstance'),
                            data.receiptId);
                    }
                }
            })
            .catch(error => {
                if (this.lastSessions !== currentSession) {
                    return
                }
                console.log(error)
            });
    }

    React.useEffect(() => {
        const interval = setInterval(receiveNewMessage, RECEIVE_NEW_MESSAGE_INTERVAL);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {(selectedChat === null) ? (
                <section class='chat-detals'>
                    <header class='chat-detals__null'>
                        <div class='chat-detals__buttons'>
                            <button class='chat-detals__search-button'></button>
                            <button class='chat-detals__menu-button'></button>
                        </div>
                    </header>
                    <div class='chat-detals__null-text'>
                        <h1>Создайте чат и начните общение</h1>
                    </div>
                </section>) : (<section class='chat-detals'>
                    <MessageSearch selectedChat={selectedChat}></MessageSearch>
                    <div class='chat-detals__area'>
                        <ul class='chat-detals__messages'>
                            {messages.map((message) => {
                                return <ChatDetalsMessage message={message} selectedChat={selectedChat}></ChatDetalsMessage>
                            })}
                        </ul>
                    </div>

                    <div class='chat-detals__new-message'>
                        <DebounceInput
                            className="chat-detals__input"
                            placeholder="."
                            minLength={1}
                            debounceTimeout={500}
                            onChange={handleMessageInputChange}
                            value={newMessage}
                        />
                        <button class='message__button-send' onClick={handleSendMessage}></button>
                    </div>
                </section>)}
        </>
    )
}

export default ChatDetals;