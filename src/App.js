import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./screens/Products";
import Welcome from "./screens/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
