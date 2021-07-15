import React, { useState } from 'react'

const ChatLink = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                ...styles.link,
                ...{ 
                    fontWeight: props.bold ? '900' : '500',
                    color: hovered ? 'purple' : 'black',
                }
            }}
            onClick={() => props.onClick()}
        >
            {props.title}
        </div>
    )
}

export default ChatLink;

const styles = {
    link: {
        fontSize: '17px',
        cursor: 'pointer',
        padding: '3px 0px'
    },
}