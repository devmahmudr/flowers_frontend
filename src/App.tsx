import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import HeaderComponent from "./components/header/header";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
