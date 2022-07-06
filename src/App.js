import React from "react";
//import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";

import Navigation from "./components/nav/Navigation";
//import { useState, useEffect } from "react";

const App = () => {
  /* const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  */

  return (
    /*<Routes>
      <Route path="/" element={<Accueil />}></Route>
    </Routes>
    */
    <div>
      <Navigation />
      <Products />
    </div>
  );
};

export default App;
