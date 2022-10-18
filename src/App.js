import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; //import komponen

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> {/* pada elemen adalah componen yang aka di render */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
