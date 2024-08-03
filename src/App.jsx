import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <ProjectsSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
