import React from 'react'
import closeBtn from '../img/close-btn.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { ContextTask } from '../context/ContextProvider'

function Task() {
    const par = useParams()
    const { backlog, ready, inProgress, finished } = React.useContext(ContextTask)

    const [currentTask, setCurrentTask] = React.useState([...backlog, ...ready, ...inProgress, ...finished].find(item => item.id === par.id))
    const [name, setName] = React.useState(currentTask.name)
    const [description, setDescription] = React.useState(currentTask.description)

    console.log(currentTask)

    const handleClickbtn = (e) => {
        const newTask = { ...currentTask, name, description }

        const newTasks = [...backlog, ...ready, ...inProgress, ...finished].map(item => {
            if (item.id === par.id) {
                item = newTask
            }
            return item
        })
    }

    return (
        <section className='task'>
            <div className='task__info'>
                <input className='task__title' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className='task__description'
                    value={description === '' ? "This task has no description" : description}
                ></textarea>
                <Link to='/' className='close-btn'>
                    <button >
                        <img src={closeBtn} alt="close button" />
                    </button>
                </Link>
                <button onClick={handleClickbtn}>PODTVERDITE</button>
            </div>

        </section>
    )
}

export default Task