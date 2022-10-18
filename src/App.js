import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; //import komponen
import Login from "./components/Login";//form login tidak berada dalam layout
import ListUsers from "./pages/users/ListUsers";
import Products from "./pages/products/Products";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> {/* pada elemen adalah componen yang aka di render */}
          <Route path="/login" element={<Login />} />

          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
