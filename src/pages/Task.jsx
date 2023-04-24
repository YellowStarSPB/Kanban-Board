import React from 'react'
import closeBtn from '../img/close-btn.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { ContextTask } from '../context/ContextProvider'

function Task() {
    const par = useParams()
    const { backlog, ready, inProgress, finished } = React.useContext(ContextTask)

    const [currentTask, setCurrentTask] = React.useState([...backlog, ...ready, ...inProgress, ...finished].filter(item => item.id === par.id))


    console.log({ ...currentTask })

    const handleChangeTask = (e) => {
        setCurrentTask({...currentTask, name:1, description: 2})
    }

    return (
        <section className='task'>
            <div className='task__info'>
                {currentTask.map(item => (
                    <div key={item.id}>
                        <input className='task__title' value={item.name} onChange={(e) => handleChangeTask(e)} />
                        <p className='task__description'>{item.description === '' ? "This task has no description" : item.description}</p>
                    </div>

                ))}
                <Link to='/' className='close-btn'>
                    <button >
                        <img src={closeBtn} alt="close button" />
                    </button>
                </Link>

            </div>
        </section>
    )
}

export default Task