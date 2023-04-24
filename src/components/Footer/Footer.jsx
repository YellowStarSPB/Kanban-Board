import React from 'react'
import classes from './Footer.module.css'

function Footer({ backlog, finished }) {
    return (
        <footer className={classes.footer}>
            <div className={classes.canbanInfo}>
                <div className={classes.activeTasks}>
                    <p>Active tasks: {backlog.length}</p>
                </div>
                <div className={classes.finishedTasks}>
                    <p>Finished tasks: {finished.length}</p>
                </div>
            </div>

            <div className={classes.by}>
                <p>Kanban board by <span>Glazov Oleg, 2023</span></p>
            </div>
        </footer>
    )
}

export default Footer