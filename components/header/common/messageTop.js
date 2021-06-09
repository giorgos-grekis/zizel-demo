import React from 'react'

import classes from './messageTop.module.scss'

const MessageTop = () => {
    return (
        <div className={classes.messagesTop}>
            Shop More, Save More | Up to <span style={{fontWeight: 'bold'}}>&nbsp;20% off&nbsp;</span>  your order
        </div>
    )
}

export default MessageTop
