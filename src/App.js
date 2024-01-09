import logo from "./logo.svg";
import "./App.css";
import PageRoute from "./PageRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PageRoute />
      </div>
    </Router>
  );
}
export default App;
