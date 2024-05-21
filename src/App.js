import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import FirmHomePage from "./pages/FirmHomePage";
import FirmNotifications from "./pages/FirmNotifications";


function App() {
  return (
    <Router>
      <div className="App-container">
        <div className="Page-container">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/firmhomepage" element={<FirmHomePage />}></Route>
            <Route path="/firmnotifications" element={<FirmNotifications />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
