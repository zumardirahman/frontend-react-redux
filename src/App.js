import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; //import komponen
import Login from "./components/Login";//form login tidak berada dalam layout

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> {/* pada elemen adalah componen yang aka di render */}
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
