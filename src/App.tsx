import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="container font-primary min-h-screen flex flex-col">
      <Header />
      <Intro className={"flex-1 lg:basis-[81vh]"} />
    </div>
  );
}

export default App;
