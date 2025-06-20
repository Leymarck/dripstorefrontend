import styled from 'styled-components';
import { Children } from "react";
import { Link } from "react-router-dom";


const ProductCardContainer = styled.div`
:root {
  --color-primary: #C92071;
  --color-secondary: #B5B6F2;
  --color-tertiary: #991956;
  --color-error: #EE4266;
  --color-success: #52CA76;
  --color-warning: #F6AA1C;

  --color-dark-gray: #1F1F1F;
  --color-dark-gray-2: #474747;
  --color-dark-gray-3: #666666;
  --color-light-gray: #8F8F8F;
  --color-light-gray-2: #CCCCCC;
  --color-light-gray-3: #F5F5F5;
  --color-white: #FFFFFF;
}

* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none ;
    text-decoration: none;
    outline: none;
    font-family: 'Times New Roman', Times, serif;
}

div {
    height: 50%;
border: solid 1px black;
width: 30%;
padding: 5px;
padding-top: 0;

}



div div {
    border-radius: 9px;
    background-color: #52CA76;
    color: #474747;
    text-align: center;
    width: 40%;
    padding: 0;
    font-size: small;
    font-weight: bold;
    position: relative;
    top: 3cap;
    left: 4%;
    border: transparent;
}

h6 {
    color: #666666;
    font-size: small;
    font-weight: bold;
}

h3 {
    color: #1F1F1F;
    font-size: medium;
}

.price {
    background-color: transparent;
    display: flex;
    margin: 0;
    padding: 0;
}

p {
    color: #666666;
    font-size: small;
}

.aprice {
    color: #1F1F1F;
    font-size: small;
}

.productimg {
    width: 200px;
} 
`


const ProductCard = ({off, type, image, name, oprice, aprice, children}) => {
    return ( 
        <ProductCardContainer>
            <div>
                <div> {off} OFF </div>
                <img className='productimg' src={image} />
                <h6> {type} </h6>
                <h3> {name} </h3>
                <div className='price'> <p> $ {oprice} </p> <p className='aprice'> $ {aprice} </p> </div>
                {children}
            </div>
        </ProductCardContainer> 
    );
}
 
export default ProductCard;