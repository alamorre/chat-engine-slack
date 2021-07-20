import React, { useState } from 'react'

let styles = require('../styles.json');

const ChatLink = props => {
    const [hovered, setHovered] = useState(false)

    var color = '#dfdfdf'
    if (props.bold) color = 'white'
    if (hovered) color = 'yellow'

    return (
        <div>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    ...styles.link,
                    ...{ 
                        color,
                        fontWeight: props.bold ? '900' : '500',
                        fontSize: props.bold ? '18px' : '17px',
                    }
                }}
                onClick={() => props.onClick()}
            >
                {props.title}
            </div>
        </div>
    )
}

export default ChatLink;