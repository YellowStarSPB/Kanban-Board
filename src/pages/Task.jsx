import React from 'react'
import closeBtn from '../img/close-btn.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { ContextTask } from '../context/ContextProvider'

function Task() {
    const par = useParams()
    const { backlog, ready, inProgress, finished } = React.useContext(ContextTask)
    const { setBacklog, setReady, setInProgress, setFinished } = React.useContext(ContextTask)
    const currentTask = [...backlog, ...ready, ...inProgress, ...finished].find(item => item.id === par.id)
    const [name, setName] = React.useState(currentTask.name)
    const [description, setDescription] = React.useState(currentTask.description)

    const handleClickbtn = (e) => {
        const newTask = { ...currentTask, name, description }

        switch (currentTask.status) {
            case 'create': {
                if (window.confirm('Вы действительно хотите изменить задачу?')) {
                    
                    
                    setBacklog(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                }
                break;
            }
            case 'ready': {
                setReady(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                break;
            }
            case 'progress': {
                setInProgress(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                break;
            }
            case 'finished': {
                setFinished(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                break;
            }
        }
    }

    return (
        <section className='task'>
            <div className='task__info'>
                <input className='task__title' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className='task__description'
                    value={description}
                ></textarea>
                <Link to='/' className='close-btn'>
                    <img src={closeBtn} alt="close button" />
                </Link>
                <div className='btn-wrapper'>
                    <button className='btn-submit' onClick={handleClickbtn}>submit</button>
                </div>
            </div>

        </section>
    )
}

export default Task