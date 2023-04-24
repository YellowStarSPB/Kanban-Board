import React from 'react'
import { v4 } from 'uuid'

export const ContextTask = React.createContext()

function ContextProvider({ children }) {
    const [backlog, setBacklog] = React.useState(JSON.parse(localStorage.getItem('backlog')) || [])
    const [ready, setReady] = React.useState(JSON.parse(localStorage.getItem('ready')) || [])
    const [inProgress, setInProgress] = React.useState(JSON.parse(localStorage.getItem('inProgress')) || [])
    const [finished, setFinished] = React.useState(JSON.parse(localStorage.getItem('finished')) || [])

    React.useEffect(() => {
        localStorage.setItem('backlog', JSON.stringify(backlog))
        localStorage.setItem('ready', JSON.stringify(ready))
        localStorage.setItem('inProgress', JSON.stringify(inProgress))
        localStorage.setItem('finished', JSON.stringify(finished))
    }, [backlog, ready, inProgress, finished])

    const addNewTask = (valueInput) => {
        setBacklog(prev => [...prev, { id: v4(), name: valueInput, description: '' }])
    }

    const moveToReady = (id, item) => {
        setReady(prev => [...prev, item])
        setBacklog(prev => prev.filter(item => item.id !== id))
    }

    const moveToProgress = (id, item) => {
        setInProgress(prev => [...prev, item])
        setReady(prev => prev.filter(item => item.id !== id))
    }

    const moveToFinished = (id, item) => {
        setFinished(prev => [...prev, item])
        setInProgress(prev => prev.filter(item => item.id !== id))
    }

    const value = {
        backlog,
        ready,
        inProgress,
        finished,
        addNewTask,
        moveToReady,
        moveToProgress,
        moveToFinished
    }

    return (
        <ContextTask.Provider value={value}>
            {children}
        </ContextTask.Provider>
    )
}

export default ContextProvider
