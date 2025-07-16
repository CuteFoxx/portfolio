import About from "./components/About";
import Contacts from "./components/Contacts";
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
          "relative max-h-[500px] flex-1 basis-[90vh] lg:max-h-[75vh] lg:basis-[81vh]"
        }
      />
      <About className="!lg:scroll-m-80 !lg:scroll-pt-80 mb-20 !scroll-m-20 !scroll-pt-20 lg:mb-60" />
      <Work className="mb-20 lg:mb-40" />
      <Projects className="mb-20 !scroll-m-20 !scroll-pt-20 lg:mb-40 lg:!scroll-m-40 lg:!scroll-pt-40" />
      <Contacts />
    </div>
  );
}

export default App;
