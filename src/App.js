import "./App.css";
import Slot from "./components/Slot";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import { useGlobal } from "./context";

function App() {
  const { showModal } = useGlobal();
  return (
    // {showModal && <Modal />}
    <div className="container">
      <h1 className="title">Web Development Slot!</h1>
      <Slot />
      <Controls />
    </div>
  );
}

export default App;
