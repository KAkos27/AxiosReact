import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Router from "./components/Router";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
