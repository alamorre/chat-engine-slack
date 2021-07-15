import React, { useContext } from 'react'

import { ChatEngineContext, getOrCreateChat } from 'react-chat-engine'

import ChatLink from './ChatLink'
import ChatGroup from './ChatGroup'

const ChatList = props => {
    const { setActiveChat } = useContext(ChatEngineContext)

    function hasReadLastMessage(chat) {
        var lastReadMessageID = -1
        chat.people.map(chat_person => {
            if (chat_person.person.username === props.userName) {
                lastReadMessageID = chat_person.last_read
            }
        })
        return !chat.last_message.id || lastReadMessageID === chat.last_message.id
    }

    function renderChannels() {
        const chatList = props.chats ? Object.values(props.chats) : []
        return chatList.map((chat, index) => {
            if (!chat.is_direct_chat) {
                return (
                    <ChatLink 
                        key={`chat-${index}`} 
                        title={`# ${chat.title}`}
                        bold={!hasReadLastMessage(chat)}
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
                        bold={!hasReadLastMessage(chat)}
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
        getOrCreateChat(props, chat, r => console.log('New Channel', r))
    }


    function onDirectMessageCreate(data) {
        const chat = { 
            is_direct_chat: true,
            usernames: [data.value, props.userName]
        }
        getOrCreateChat(props, chat, r => console.log('New DM', r))
    }

    return (
        <div style={styles.chatList}>
            <div style={styles.titleContainer}>
                <ChatGroup 
                    title='Channels' 
                    placeholder='Create a group'
                    onSubmit={(data) => onChannelCreate(data)}
                />
            </div>

            <div style={styles.chatsContainer}>
                { renderChannels() }
            </div>

            <div style={styles.titleContainer}>
                <ChatGroup 
                    title='Direct Messages' 
                    placeholder='Type a username'
                    onSubmit={(data) => onDirectMessageCreate(data)}
                />
            </div>

            <div style={styles.chatsContainer}>
                { renderDirectMessages() }
            </div>
        </div>
    );
}

export default ChatList;

const styles = {
    chatList: { 
        padding: '16px',
        borderRight: '1px solid rgb(175, 175, 175)', 
        height: 'calc(100% - 32px)',
        backgroundColor: '#722ed1' 
    },
    titleContainer: {
        padding: '0px 12px',
    },
    chatsContainer: {
        padding: '22px 0px',
    }
}