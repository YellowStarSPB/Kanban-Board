import React from 'react'
import classes from './TaskItem.module.css'
function TaskItem({ item }) {
    return (
        <div className={classes.task}>
            <p>{item?.name}</p>
        </div>
    )
}

export default TaskItem