import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ready from './components/Ready/Ready';
import Backlog from './components/Backlog/Backlog';
import InProgress from './components/InProgress/InProgress';
import Finished from './components/Finished/Finished';
import TaskItem from './components/TaskItem/TaskItem';

import { v4 } from 'uuid'


function App() {
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

    return (
        <div className='app'>
            <Header />

            <div className="container">
                {/*Backlog container */}
                <Backlog title={'Backlog'} addNewTask={addNewTask}>
                    {backlog.map(item => (
                        <TaskItem key={item.id} item={item} />
                    ))}
                </Backlog>
                {/*Ready container */}
                <Ready title={'Ready'} backlog={backlog} moveToReady={moveToReady}>
                    {ready.map(ready => (
                        <TaskItem key={ready.id} item={ready} />
                    ))}
                </Ready>
                {/*In progress container */}
                <InProgress title={'In Progress'} ready={ready} moveToProgress={moveToProgress}>
                    {inProgress.map(inProgress => (
                        <TaskItem key={inProgress.id} item={inProgress} />
                    ))}
                </InProgress>
                {/*Finished container */}
                <Finished title={'Finished'} inProgress={inProgress} moveToFinished={moveToFinished}>
                    {finished.map(finished => (
                        <TaskItem key={finished.id} item={finished} />
                    ))}
                </Finished>


            </div>

            <Footer backlog={backlog} finished={finished} />
        </div>
    );
}

export default App;
