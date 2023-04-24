import React from 'react'
import classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.canbanInfo}>
                <div className={classes.activeTasks}>
                    <p>Active tasks: 21</p>
                </div>
                <div className={classes.finishedTasks}>
                    <p>Finished tasks: 2</p>
                </div>
            </div>

            <div className={classes.by}>
                <p>Kanban board by <span>Glazov Oleg, 2023</span></p>
            </div>
        </footer>
    )
}

export default Footer