import React from 'react'

const ChatLink = props => {
    return (
        <div 
            style={styles.link}
            onClick={() => props.onClick()}
        >
            {props.title}
        </div>
    )
}

export default ChatLink;

const styles = {
    link: {
        cursor: 'pointer',
    },
}