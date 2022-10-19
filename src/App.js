import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; //import komponen
import Login from "./components/Login";//form login tidak berada dalam layout
import RenderUserList from "./pages/users/UserList";
import RenderUserAdd from "./pages/users/UserAdd";
import RenderUserEdit from "./pages/users/UserEdit";

import RenderProductList from "./pages/products/ProductList";
import RenderProductAdd from "./pages/products/ProductAdd";
import RenderProductEdit from "./pages/products/ProductEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> {/* pada elemen adalah componen yang aka di render */}
          <Route path="/login" element={<Login />} />

          <Route path="/users" element={<RenderUserList />} />
          <Route path="/users/add" element={<RenderUserAdd />} />
          <Route path="/users/edit/:id" element={<RenderUserEdit />} />

          <Route path="/products" element={<RenderProductList />} />
          <Route path="/products/add" element={<RenderProductAdd />} />
          <Route path="/products/edit/:id" element={<RenderProductEdit />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
