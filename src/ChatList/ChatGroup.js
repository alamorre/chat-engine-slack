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
                        onChange={e => setValue(e.target.value)}
                        onBlur={() => setFormOpen(false)}
                    />
                </form>:
                <span>
                    <span style={styles.title}>
                        {props.title}
                    </span>
                    <button 
                        style={{ float: 'right' }}
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
        fontSize: '18px',
        fontWeight: '600',
    },
}