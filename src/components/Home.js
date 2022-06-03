import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusLine from '../myComponents/StatusLine';
import NavBar from '../myComponents/NavBar';

export default function Home(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      loadTasksFromLocalStorage();
    }, []);
  
    function addEmptyTask(status) {
      const lastTask = tasks[tasks.length - 1];
  
      let newTaskId = 1;
  
      if (lastTask !== undefined) {
        newTaskId = lastTask.id + 1;
      }
  
      setTasks((tasks) => [
        ...tasks,
        {
          id: newTaskId,
          title: "",
          description: "",
          urgency: "",
          status: status
        }
      ]);
    }
  
    function addTask(taskToAdd) {
      let filteredTasks = tasks.filter((task) => {
        return task.id !== taskToAdd.id;
      });
  
      let newTaskList = [...filteredTasks, taskToAdd];
  
      setTasks(newTaskList);
  
      saveTasksToLocalStorage(newTaskList);
    }
  
    function deleteTask(taskId) {
      let filteredTasks = tasks.filter((task) => {
        return task.id !== taskId;
      });
  
      setTasks(filteredTasks);
  
      saveTasksToLocalStorage(filteredTasks);
    }
  
    function moveTask(id, newStatus) {
      let task = tasks.filter((task) => {
        return task.id === id;
      })[0];
  
      let filteredTasks = tasks.filter((task) => {
        return task.id !== id;
      });
  
      task.status = newStatus;
  
      let newTaskList = [...filteredTasks, task];
  
      setTasks(newTaskList);
  
      saveTasksToLocalStorage(newTaskList);
    }
  
    function saveTasksToLocalStorage(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function loadTasksFromLocalStorage() {
      let loadedTasks = localStorage.getItem("tasks");
  
      let tasks = JSON.parse(loadedTasks);
  
      if (tasks) {
        setTasks(tasks);
      }
    }
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
            <div className="App">
      {/* <h1>Task Management</h1> */}
      <NavBar handleLogout={handleLogout} email={props.email}/>
      <main>
        <section>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Completed"
          />
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Future"
          />
        </section>
      </main>
      {/* <button onClick={handleLogout}>Log out</button> */}
    </div>
    )
}