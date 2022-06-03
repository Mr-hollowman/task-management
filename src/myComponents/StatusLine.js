import React from "react";
// import "../styles/statusLine.scss";
import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

  let taskList, tasksForStatus;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          moveTask={(id, status) => moveTask(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine">
        <div className="statusLine-bar">
      <h6>{status}</h6>
      {/* <button onClick={handleAddEmpty} className="button addTask">
        +
      </button> */}
      <div className="statusLine-icon">
      <i class='fa fa-plus' onClick={handleAddEmpty}></i>
      <i class="fa fa-ellipsis-h"></i>
      </div>
      </div>
      <div className="mytask">{taskList}</div>
    </div>
  );
}
