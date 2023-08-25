import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Todo() {
  const [taskItem, setTaskItem] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTaskItem(e.target.value);
  };

  const todoList = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: taskItem,
      completed: false,
    };
    setTaskList([...taskList, task]);
  };

  const deletItem = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completedItem = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <div className="get-task">
        <input onChange={handleChange} placeholder="Enter your tasks" />
        <div className="task-list">
          {taskList.map((task) => {
            return (
              <Task
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                deletItem={deletItem}
                completedItem={completedItem}
              />
            );
          })}
        </div>
        
      </div>
      <button onClick={todoList} className="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  );
}

export default Todo;

// /*
//
//
//
// */
