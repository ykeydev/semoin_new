import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} />
    </div>
  );
};

export default App;
