import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/css/happyDiary.css";
import { Button } from "@mui/material";

const NewTask = ({ newTask, addNewTask }) => {
  return (
    <form id="new-task">
      <input type="text" placeholder="add new task" onChange={newTask} />
      <button type="reset" onClick={addNewTask}>
        <AddCircleIcon />
      </button>
    </form>
  );
};
// end new task component

// start tasks component
const Tasks = ({
  tasks,
  activeEditInput,
  editTask,
  deleteTask,
  toggleDone,
}) => {
  return (
    <div id="tasks-container">
      {tasks.map((task) => (
        <Task
          taskDiscription={task.taskDiscription}
          taskIsDone={task.isDone}
          key={task.id}
          activeEditInput={() => activeEditInput(task.id)}
          letToEdit={task.letToEdit}
          editTask={(event) => editTask(event, task.id)}
          deleteTask={() => deleteTask(task.id)}
          toggleDone={() => toggleDone(task.id)}
        />
      ))}
    </div>
  );
};
// end tasks component

// start task component
const Task = ({
  taskDiscription,
  taskIsDone,
  activeEditInput,
  letToEdit,
  editTask,
  deleteTask,
  toggleDone,
}) => {
  let input = null;
  if (letToEdit) {
    input = (
      <input
        type="text"
        placeholder={taskDiscription}
        onChange={editTask}
      ></input>
    );
  }
  return (
    <div className="task-item">
      <div className="text-div">
        <p
          onClick={toggleDone}
          className={
            taskIsDone && letToEdit
              ? "done hide"
              : !taskIsDone && !letToEdit
              ? null
              : taskIsDone && !letToEdit
              ? "done"
              : "hide"
          }
        >
          {taskDiscription}
        </p>
        {input}
      </div>
      <div className="icon-div">
        <span onClick={activeEditInput} className={letToEdit ? "fix" : null}>
          {!letToEdit ? <EditIcon /> : <CheckIcon />}
        </span>
        <span onClick={deleteTask} className={letToEdit ? "fix" : null}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

// start main app component
const HappyDiary = (props) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleNewTask = (event) => {
    setnewTask(event.target.value);
  };

  const handleAddNewTask = () => {
    if (newTask && newTask !== " ") {
      const dumb = [...tasks];
      const task = {
        taskDiscription: newTask,
        id: Math.floor(Math.random() * 1000),
        isDone: false,
        letToEdit: false,
      };
      dumb.push(task);
      setTasks(dumb);
      setnewTask("");
    }
  };

  const handleActiveEditInput = (id) => {
    const taskToEditIndex = tasks.findIndex((task) => task.id === id);
    const taskToEdit = tasks[taskToEditIndex];
    taskToEdit.letToEdit = !taskToEdit.letToEdit;
    const allTasks = [...tasks];
    allTasks[taskToEditIndex] = taskToEdit;
    setTasks(allTasks);
  };

  const handleEditTask = (event, id) => {
    const newValue = event.target.value;
    if (newValue && newValue !== " ") {
      const taskToEditIndex = tasks.findIndex((task) => task.id === id);
      const taskToEdit = tasks[taskToEditIndex];
      taskToEdit.taskDiscription = newValue;
      const allTasks = [...tasks];
      allTasks[taskToEditIndex] = taskToEdit;
      setTasks(allTasks);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleIsDone = (id) => {
    const doneTaskIndex = tasks.findIndex((task) => task.id === id);
    const doneTask = tasks[doneTaskIndex];
    doneTask.isDone = !doneTask.isDone;
    const allTasks = [...tasks];
    allTasks[doneTaskIndex] = doneTask;
    setTasks(allTasks);
  };

  return (
    <div id="todos-app-container">
      <div id="header">
        <h2>YOUR HAPPY DIARY 😄</h2>
      </div>
      <NewTask newTask={handleNewTask} addNewTask={handleAddNewTask} />
      <Tasks
        tasks={tasks}
        activeEditInput={handleActiveEditInput}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask}
        toggleDone={handleIsDone}
      />
      <Button
        size="large"
        variant="contained"
        style={{
          fontFamily: "Roboto Mono",
          backgroundColor: "#F1F7B5",
          color: "#243763",
          marginTop: "6px",
        }}
        onClick={() => props.closeDiary(tasks)}
      >
        Close Diary
      </Button>
    </div>
  );
};

// end main app component

// start new task component

// end task component
export default HappyDiary;
