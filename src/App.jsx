import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import DummyPage from "./component/DummyPage";
import HomePage from "./component/HomePage";
import Sidebar from "./component/Sidebar";
import Login from "./component/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />

          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dummypage" element={<DummyPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
