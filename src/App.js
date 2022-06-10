import "./App.css";
import Slot from "./components/Slot";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Modal />
      <Header />
      <Slot />
      <Controls />
    </div>
  );
}

export default App;
