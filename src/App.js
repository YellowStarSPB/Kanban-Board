import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskItem from './components/TaskWrapper/TaskItem/TaskItem';
import TaskWrapper from './components/TaskWrapper/TaskWrapper';


function App() {
    const [task, setTask] = React.useState({
        
    })

    return (
        <div className='app'>
            <Header />

            <div className="container">
                <TaskWrapper title={'Backlog'}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </TaskWrapper>

                <TaskWrapper title={'Ready'}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </TaskWrapper>

                <TaskWrapper title={'In Progress'}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </TaskWrapper>

                <TaskWrapper title={'Finished'}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </TaskWrapper>

            </div>

            <Footer />
        </div>
    );
}

export default App;
