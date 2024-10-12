import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
import { useEffect, useState } from "react";
import { getTaskFromLocalStorge, getThemeFromLocalStorge } from "../../utils/localStorege";

export default function TaskBoardLayout() {
  // const defaultTask = {
  //   id: crypto.randomUUID(),
  //   title: "Complete React Project",
  //   description: "Finish the project and submit it by the end of the week.",
  //   tags: ["React", "Project", "Deadline"],
  //   priority: "High",
  //   isFavorite: false,
  // };

  const [tasks, setTasks] = useState(getTaskFromLocalStorge());

  const [theme, setTheme] = useState(getThemeFromLocalStorge());

 

  useEffect(()=>{
    localStorage.setItem('theme', theme);
    document.documentElement.className= theme;
  },[theme]);


  useEffect(()=>{
localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);

const toggleTheme = ()=>{
  setTheme(theme === "dark" ? "light":"dark")
}

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </>
  );
}
