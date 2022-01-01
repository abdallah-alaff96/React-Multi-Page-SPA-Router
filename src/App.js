import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./screens/Products";
import Welcome from "./screens/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
