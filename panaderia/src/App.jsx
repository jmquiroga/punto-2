import Login from "./paginas/Login";
import Dashboard from "./paginas/Dashboard";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      
    </Routes>
  );
}

export default App;
