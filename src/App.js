import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "./components/Menu (mobile)/Menu";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import AddProject from "./pages/AddProject/AddProject";
import AddTask from "./pages/AddTask/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
