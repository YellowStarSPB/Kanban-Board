import React from 'react'
import classes from './TaskWrapper.module.css'
import addCardIcon from '../../img/add-card.svg'

function TaskWrapper({ children, title }) {
    const [showInput, setShowInput] = React.useState(false)

    const handleShowInput = () => {
        setShowInput(prev => prev = !showInput)
    }
    return (
        <div className={classes.taskWrapper}>
            <h1 className={classes.title}>{title}</h1>
            {children}

            {showInput && <div className={classes.input}>
                <input />
            </div>
            }

            {showInput ? (<button className={classes.btn_submit}>
                <p>Submit</p>
            </button>) : (<button onClick={handleShowInput} className={classes.btn}>
                <img src={addCardIcon} alt="add card" />
                <p>Add card</p>
            </button>)}
        </div>
    )
}

export default TaskWrapper