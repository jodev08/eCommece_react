import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";

import Accueil from "./pages/Accueil";

const App = () => {
  return (
    /*<Routes>
      <Route path="/" element={<Accueil />}></Route>
    </Routes>
    */
    <div>
      <Products />
    </div>
  );
};

export default App;
