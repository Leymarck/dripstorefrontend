import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../pages/NotFound";
import ProductListing from "../components/ProductListing";
import Home from "../pages/HomePage";
import PageLayout from "../layout/PageLayout";
import MeusPedidos from "../pages/MeusPedidos";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ProductListing />} />
            <Route path="/categorias" element={<ProductDetails />} />
            <Route path="/meuspedidos" element={<MeusPedidos />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes> 
      </BrowserRouter>
        </> 
    );


}
 
export default Paths;