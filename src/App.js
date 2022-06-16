import "./App.css";
import Slot from "./components/Slot";
import Controls from "./components/Controls";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="container-center">
        <Modal />
        <Header />
        <Slot />
        <Controls />
      </div>
    </div>
  );
}

export default App;
