import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CocktailCategory from "./pages/CocktailCategory";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <Routes>
        <Route path="/categories" element={<CocktailCategory />} />
        <Route path="/details" element={<CocktailDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
