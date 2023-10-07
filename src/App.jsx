import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Visualize from "./pages/Visualize";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={ <Hero /> }
          />
          <Route Exact path="/visualize" element={<Visualize />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
