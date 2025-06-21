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

background-color: #FFFFFF;
box-shadow: 0 0 10px #474747;
box-sizing: border-box;
border-radius: 4%;
padding: 20px;
height: 250px;
margin-bottom: 60px;
cursor: pointer;

.box:hover {
    transform: scale(1.3);
        transition: 2s;
}


.off {
    border-radius: 9px;
    background-color: #E7FF86;
    color: #474747;
    text-align: center;
    width: 40%;
    padding: 0;
    font-size: small;
    font-weight: bold;
    position: relative;
    top: 1cap;
    left: 1%;
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
    gap: 6px;
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
    rotate: -30deg;
    padding: 10px 0 40px 0;
} 

.boxii {
    margin: 60px 0 60px 0;
}
`


const ProductCard = ({off, type, image, name, oprice, aprice, children}) => {
    return ( 
        <ProductCardContainer>
            <div className='box' >
                <div className='off'> {off} OFF </div>
                <img className='productimg' src={image} />
            </div>
            <div className='boxii'> 
                <h6> {type} </h6>
                <h3> {name} </h3>
                <div className='price'> 
                    <p> $ {oprice} </p> 
                    <p className='aprice'> $ {aprice} </p>
                </div>
                {children}
            </div>
        </ProductCardContainer> 
    );
}
 
export default ProductCard;