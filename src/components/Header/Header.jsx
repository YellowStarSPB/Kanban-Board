import React from 'react'

import arrowDown from '../../img/arrowdown.svg'
import userAvatar from '../../img/user-avatar.png'

import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Awesome Kanban Board</h1>
            <button className={classes.profile}>
                <div className={classes.profileAvatar}>
                    <img src={userAvatar} alt="user avatar" />
                </div>
                <div className={classes.profileMenu}>
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </button>
        </header>
    )
}

export default Header