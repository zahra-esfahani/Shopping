import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductContext from "./Context/ProductContext";
import CheckOut from "./Pages/CheckOut";
import NotFound from "./Pages/404";
import PageDetails from "./Pages/PageDetails";
import CartContext from "./Context/CartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <CartContext>
          <Layout>
            <ProductContext>
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<PageDetails />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </ProductContext>
          </Layout>
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
