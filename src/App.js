import { Route } from "react-router-dom";
import Products from "./screens/Products";
import Welcome from "./screens/Welcome";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
