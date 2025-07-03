import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="container font-primary min-h-screen flex flex-col">
      <Header />
      <Intro className={"flex-1 basis-[90vh] lg:basis-[81vh]"} />
      <About />
    </div>
  );
}

export default App;
