import React from 'react'
import Ready from '../components/Ready/Ready';
import Backlog from '../components/Backlog/Backlog';
import InProgress from '../components/InProgress/InProgress';
import Finished from '../components/Finished/Finished';
import TaskItem from '../components/TaskItem/TaskItem';
//generate id

import { ContextTask } from '../context/ContextProvider';


function Home() {

    const { backlog,
        ready,
        inProgress,
        finished,
        addNewTask,
        moveToReady,
        moveToProgress,
        moveToFinished } = React.useContext(ContextTask)

    return (
        <section className="container">
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
        </section>
    )
}

export default Home