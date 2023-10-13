import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Visualize from "./pages/Visualize";
import Sort from "./components/sortingComponents/sort";

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
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/visualize/sort" element={<Sort />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
