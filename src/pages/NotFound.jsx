import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( <>
    <h1> Desculpe, página não encontrada! Voltar para a <NavLink to={"/"}> Home </NavLink> </h1></> );
}
 
export default NotFound;