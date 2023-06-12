import "./App.css";
import HeroSection from "./components/HeroSection";

import Message from "./components/Message";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <MyWork />
      <Message />
    </div>
  );
}

export default App;
