import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import ProductOptions from "./components/ProductOptions";
import Section from "./components/Section";
import Paths from "./Routes/Paths";

const App = () => {
  return ( <>
  <Paths/>
  </> );
}
 
export default App;