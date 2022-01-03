import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./inputSample";
function App() {
  const text = "@@@@~";
  return (
    <div className="App">
      <Wrapper>
        <Hello name={text} color="red" />
        <Counter />
        <InputSample />
      </Wrapper>
    </div>
  );
}

export default App;
