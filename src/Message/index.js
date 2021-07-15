import React from 'react'

import Body from './Body'

import { stringToColor } from './color'


const Message = props => {
    const senderUsername = props.sending ? props.creds.userName : props.message.sender.username 
    const isTurnEnd = !props.nextMessage || props.nextMessage.sender.username !== senderUsername 

    var isNewTurn = !props.lastMessage || props.lastMessage.sender.username !== senderUsername 
    if (props.sending && !props.lastMessage) {
        isNewTurn = !props.chat.last_message.sender || props.chat.last_message.sender.username !== senderUsername 
    }

    return (
        <div style={{ display: 'inline-block', width: '100%', minHeight: (isNewTurn && isTurnEnd) && '54px', padding: '4px 0px' }}>
            {
                isNewTurn && 
                <div style={{ height: '0px' }}>
                    <div 
                        style={{
                            ...styles.avatar,
                            ...{ backgroundColor: stringToColor(senderUsername) }
                        }}
                    >
                        <div style={styles.avatarText}>
                            {senderUsername.substr(0, 2).toUpperCase()}
                        </div>
                    </div>
                </div>
            }

            <div 
                style={{
                    ...styles.messageRow,
                    ...{ color: props.sending ? '#959595' : 'black' }
                }}
            >
                <Body text={props.message.text} />
            </div>
        </div>
    );
}

export default Message;

const styles = {
    avatar: { 
        height: '50px', 
        width: '50px', 
        margin: '4px', 
        borderRadius: '4px',
        textAlign: 'center'
    },
    avatarText: {
        fontSize: '22px',
        fontWeight: '600',
        color: 'white',
        paddingTop: '11px'
    },
    messageRow: { 
        marginLeft: '58px',
        width: 'calc(100% - 60px)',
        padding: '0px 4px',
    }
}