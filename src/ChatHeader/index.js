import React, { useContext } from 'react'

import { ChatEngineContext, ChatHeader } from 'react-chat-engine'

import { getCurrentTime } from '../timezone'

const NewChatHeader = props => {
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
                <div style={{ zIndex: 100, position: 'absolute', top: '52px', width: '100%', textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#722ed1', color: 'white', padding: '4px 8px', borderRadius: '4px', display: 'inline' }}>
                        {`👉 ⏰ It is ${getCurrentTime(otherOffset)} in for ${firstName} right now. `}
                    </div>
                </div>
            }
        </div>
    )
}

export default NewChatHeader;

const styles = {
}