import Header from "./components/Header";
import About from "./components/About";
import Photo from "./components/Photo";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 mr-28 items-center gap-4">
        <Photo />
        <About />
      </div>

      <Projects />
    </div>
  );
}

export default App;
