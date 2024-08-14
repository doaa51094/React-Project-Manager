import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [ProjectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const ProjectId = Math.random();
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleOnCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: ProjectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  const selectedProject = ProjectState.projects.find(
    (project) => project.id === ProjectState.selectedProjectId
  );
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={ProjectState.tasks}
    />
  );
  if (ProjectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleOnCancel} />;
  } else if (ProjectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleAddTask(text) {
    setProjectState((prev) => {
      const TaskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: TaskId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }
  return (
    <main className="my-8 h-screen flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        projects={ProjectState.projects}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={ProjectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
