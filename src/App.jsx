import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <ProjectsSidebar/>
      {/* <NewProject/> */}
      <NoProjectSelected/>
    </main>
  );
}

export default App;
