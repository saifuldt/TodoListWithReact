import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTasksFound from './NoTasksFound';

export default function TaskBoard({ tasks, setTasks,toggleFabButton}) {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDeleteTask = (taskId) => {
    const taskAfterDelet = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelet);
  };

  const handleDeletAllTask = () => {
    setTasks([]);
  };

  return (
    <>
      <section className="mt-16 md:mt-20" id="tasks">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-xl sm:text-2xl md:text-3xl text-center font-semibold">
            <h1 className="text-green-700 dark:text-white">
              আপনার কর্ম তালিকা তৈরি করুন
            </h1>
          </div>

          <div
            className="rounded-lg border dark:border-[rgba(206,206,206,0.12)] border-gray-400 
                   dark:bg-[rgba(38,43,40,0.6)] bg-gray-300 
                   backdrop-filter backdrop-blur-lg shadow-lg 
                   px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                   md:py-10 lg:py-12"
          >
            {
              tasks.length > 0 ? (<TaskList toggleFabButton={toggleFabButton} tasks={tasks} handleDeleteTask={handleDeleteTask} setTasks={setTasks} />) : (<NoTasksFound />)
            }
            <TaskActions setShowModal={setShowModal} taskLength={tasks.length > 0} handleDeletAllTask={handleDeletAllTask}  />
          </div>
        </div>
      </section>
      {showModal && (
        <TaskModal onSave={handleAddTask} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
}
