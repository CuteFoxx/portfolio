import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div className="font-primary container flex min-h-screen flex-col">
      <Header />
      <Intro
        className={
          "max-h-[500px] flex-1 basis-[90vh] lg:max-h-[75vh] lg:basis-[81vh]"
        }
      />
      <About className="mb-20 lg:mb-60" />
      <Work className="mb-20 lg:mb-40" />
      <Projects />
    </div>
  );
}

export default App;
