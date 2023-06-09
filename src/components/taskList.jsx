import TaskCard from "./TaskCard";
import { useState , useContext} from "react";
import { TaskContext } from "../context/taskContext";

function taskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No Hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default taskList;
