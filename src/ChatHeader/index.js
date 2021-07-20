import React, { useContext } from 'react'

import { ChatEngineContext, ChatHeader } from 'react-chat-engine'

import { getCurrentTime } from '../timezone'

let styles = require('../styles.json');

const NewChatHeader = () => {
    const { conn, chats, activeChat } = useContext(ChatEngineContext)
    
    if (conn === null || chats === null || !chats[activeChat]) return <div />

    const chat = chats[activeChat]

    var otherOffset = 0
    var firstName = ''
    chat.people.map(chat_person => {
        if (chat_person.person.userName !== conn.userName) {
            otherOffset = chat_person.person.custom_json.gmt_offset
            firstName = chat_person.person.first_name
        }
    })

    return (
        <div>
            <ChatHeader />

            {
                chat.is_direct_chat &&
                <div style={styles.chatTimeContainer}>
                    <div style={styles.chatTimeContent}>
                        {`👉 ⏰ It is ${getCurrentTime(otherOffset)} in for ${firstName} right now. `}
                    </div>
                </div>
            }
        </div>
    )
}

export default NewChatHeader;
