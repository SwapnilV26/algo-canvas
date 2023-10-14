import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Visualize from "./pages/Visualize";
import Sort from "./components/sortingComponents/sort";
import PreorderTraversal from "./components/treeTraversal/Preorder/PreorderTraversal";
import Tree from "./components/treeTraversal/Tree";

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
          <Route path="/visualize/tree-traversal" element={<Tree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
