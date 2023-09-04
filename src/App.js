import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Inputs from "./components/Inputs/Inputs";
import Modal from "./components/Modal";
import Select from "./components/Select";

function App() {
  return (
    <>
      <Buttons />
      <Inputs title="name" />
      <Modal />
      <Select />
    </>
  );
}

export default App;
