import React, { useState } from 'react'

let styles = require('../styles.json');

const ChatGroup = props => {
    const [value, setValue] = useState('')
    const [formOpen, setFormOpen] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        props.onSubmit({ value })
        setValue('')
    }

    return (
        <div>
            {
                formOpen ?
                <form onSubmit={e => onSubmit(e)}>
                    <input 
                        autoFocus 
                        value={value}
                        placeholder={props.placeholder}
                        onBlur={() => setFormOpen(false)}
                        onChange={e => setValue(e.target.value)}
                    />
                </form>:
                <span>
                    <span style={styles.chatGroupTitle}>
                        {props.title}
                    </span>
                    <button 
                        style={styles.newChatButton}
                        onClick={() => setFormOpen(true)}
                    >+</button>
                </span>
            }
        </div>
    );
}

export default ChatGroup;
