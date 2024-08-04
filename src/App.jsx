import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [ProjectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const ProjectId= Math.random();
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData ) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id:ProjectId,
      };
      return {
        ...prev,
        selectedProjectId:undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  let content;
  if (ProjectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (ProjectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
 
  console.log(ProjectState)
  return (
    <main className="my-8 h-screen flex gap-8">
      <ProjectsSidebar projects={ProjectState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
