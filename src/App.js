import "./App.css";
import Slot from "./components/Slot";
import Controls from "./components/Controls";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="container">
      <Modal />
      <h1 className="title">Web Development Slot!</h1>
      <Slot />
      <Controls />
    </div>
  );
}

export default App;
