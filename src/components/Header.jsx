import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import 'primeicons/primeicons.css';

const Header = () => {
    return ( 
        <>
            <header>
            <img src="./assets/logo-header.svg"/>
            <span> 
                <input type="text" placeholder='Pesquisar produto...'/> 
                <i className="pi pi-search" style={{color: 'slateblue'}}></i> 
            </span>
            <a> Cadastre-se </a>
            <button> Entrar </button>
            <button> Buy </button>
            <nav>
                <ul>
                    <li> <NavLink to={"/"}> Home </NavLink> </li>
                    <li> <NavLink to={"/produtos"}> Produtos </NavLink> </li>
                    <li> <NavLink to={"/categorias"}> Categorias </NavLink> </li>
                    <li> <NavLink to={"/meuspedidos"}> Meus Pedidos </NavLink> </li>  
                </ul>
            </nav> 
            </header>
        </> 
    );
}
 
export default Header;
