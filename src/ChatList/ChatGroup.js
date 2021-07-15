import React, { useState } from 'react'

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
                        onChange={e => setValue(e.target.value)}
                        onBlur={() => setFormOpen(false)}
                    />
                </form>:
                <span>
                    <span style={styles.title}>
                        {props.title}
                    </span>
                    <button 
                        style={styles.button}
                        onClick={() => setFormOpen(true)}
                    >
                        +
                    </button>
                </span>
            }
        </div>
    );
}

export default ChatGroup;

const styles = {
    title: {
        fontSize: '14px',
        fontWeight: '600',
    },
    button: {
        float: 'right',
        backgroundColor: 'white',
        border: '0px solid white',
        fontSize: '24px',
        cursor: 'pointer',
        color: 'purple',
        position: 'relative',
        bottom: '3px',
    }
}