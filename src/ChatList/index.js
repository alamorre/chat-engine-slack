import React, { useContext } from 'react'

import { ChatEngineContext, getOrCreateChat } from 'react-chat-engine'

import ChatLink from './ChatLink'
import ChatGroup from './ChatGroup'

const ChatList = props => {
    const { setActiveChat } = useContext(ChatEngineContext)

    function renderChannels() {
        const chatList = props.chats ? Object.values(props.chats) : []
        return chatList.map((chat, index) => {
            if (!chat.is_direct_chat) {
                return (
                    <ChatLink 
                        key={`chat-${index}`} 
                        title={`#${chat.title}`}
                        onClick={() => setActiveChat(chat.id)}
                    />
                )
            } else {
                return <div key={`chat-${index}`} />
            }
        })
    }

    function returnNotMe(chat) {
        let username = ''
        chat.people.map(chat_person => {
            if (chat_person.person.username !== props.userName) {
                username = chat_person.person.username
            }
        })
        return username
    }

    function renderDirectMessages() {
        const chatList = props.chats ? Object.values(props.chats) : []
        return chatList.map((chat, index) => {
            if (chat.is_direct_chat) {
                return (
                    <ChatLink 
                        key={`chat-${index}`} 
                        title={`${returnNotMe(chat)}`}
                        onClick={() => setActiveChat(chat.id)}
                    />
                )
            } else {
                return <div key={`chat-${index}`} />
            }
        })
    }

    function onChannelCreate(data) {
        const chat = { title: data.value }
        getOrCreateChat(props, chat, (r) => console.log(r))
    }


    function onDirectMessageCreate(data) {
        const chat = { 
            is_direct_chat: true,
            usernames: [data.value, props.userName]
        }
        getOrCreateChat(props, chat, (r) => console.log(r))
    }

    return (
        <div style={{ padding: '12px', borderRight: '1px solid rgb(175, 175, 175)', height: '100%' }}>
            <ChatGroup 
                title='Channels' 
                onSubmit={(data) => onChannelCreate(data)}
            />

            <div style={styles.chatsContainer}>
                { renderChannels() }
            </div>

            <ChatGroup 
                title='Direct Messages' 
                onSubmit={(data) => onDirectMessageCreate(data)}
            />

            <div style={styles.chatsContainer}>
                { renderDirectMessages() }
            </div>
        </div>
    );
}

export default ChatList;

const styles = {
    title: {
        fontSize: '18px',
        fontWeight: '600',
    },
    chatsContainer: {
        paddingTop: '12px',
        paddingBottom: '12px',
    }
}