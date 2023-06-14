import "./App.css";
import HeroSection from "./components/HeroSection";

import Message from "./components/Message";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className=" snap-y snap-mandatory overflow-y-scroll h-[100vh]">
      <HeroSection />
      <MyWork />
      <Message />
    </div>
  );
}

export default App;
