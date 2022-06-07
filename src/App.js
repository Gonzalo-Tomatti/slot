import "./App.css";
import Slot from "./components/Slot";
import Controls from "./components/Controls";
import { GlobalProvider } from "./context";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>Web Development Slot!</h1>
        <Slot />
        <Controls />
      </div>
    </GlobalProvider>
  );
}

export default App;
