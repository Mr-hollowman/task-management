import { useState } from "react";

export default function Task(props) {
  const { addTask, deleteTask, moveTask, task } = props;

  // const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  // function setUrgency(event) {
  //   setUrgencyLevel(event.target.attributes.urgency.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          description: event.target.elements.description.value,
          // urgency: urgencyLevel,
          status: task.status,
          isCollapsed: true
        };

        addTask(newTask);
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteTask(task.id);
    }
  }

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Completed";
    } else if (task.status === "In Future") {
      newStatus = "In Progress";
    }
    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Completed") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "In Future";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
    <div className={`shadow-sm task ${collapsed ? "collapsedTask" : ""}` }>
      {/* <button onClick={handleMoveLeft} className="button moveTask">
        &#171;
      </button> */}
      <i class="fas fa-arrow-left" onClick={handleMoveLeft} ></i>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <h6 style={{color:'yellow'}} className={collapsed ? "title-edit" : "not-to-edit"}>{task.title}</h6>
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Enter Description"
          defaultValue={task.description}
        />
        {/* <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            low
          </label>
          <label
            className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            medium
          </label>
          <label
            className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            high
          </label>
        </div> */}
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button save"
        >
          {collapsed ? "Edit" : "Save"}
        </button>

          <button
            onClick={() => {
              setFormAction("delete");
            }}
            className="button delete"
          >
            delete
          </button>
      
      </form>
      {/* <button onClick={handleMoveRight} className="button moveTask">
        &#187;
      </button> */}
      <i class="fas fa-arrow-right" onClick={handleMoveRight} ></i>
    </div>
  );
}
