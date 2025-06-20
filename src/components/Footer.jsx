import styled from 'styled-components';

const FooterContainer = styled.footer`
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

background-color: #1F1F1F;
color: #CCCCCC;
text-decoration: none;
padding: 0px;
height: 500px;
width: 100%;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;

footer {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    padding: 60px 60px 0px 60px;
} & div {
    width: 20%;
} & img {
    padding: 30px 0px;
}

ul {
    list-style: none;
    padding-left: 0;
} & li {
    padding: 5px 0px;
    cursor: pointer;
} & li:hover {
    text-decoration: underline;
}

h6 {
    color: #F5F5F5;
    font-size: medium;
}

.redes {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

.inf {
    text-align: center;
    border-top: solid #8F8F8F 2px;
    width: 90%;
    margin: auto;
    padding: 20px;
}

`;

const Footer = () => {
    return ( <FooterContainer>
        <footer>   
            <div>
                <img src="./assets/logo-footer.svg"/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati nemo error commodi dignissimos officiis voluptate perspiciatis incidunt et vitae vero labore soluta fuga qui, eveniet quae ullam veritatis! Quas.</p>
                <div className='redes'>
                    <img src="./assets/facebook.svg"/>
                    <img src="./assets/instagram.svg"/>
                    <img src="./assets/twitter.svg"/>
                </div>
                
            </div>
            <div> 
                <h6> Informação </h6>
                <nav>
                    <ul>
                        <li> Sobre a Drip Store </li>
                        <li> Segurança </li>
                        <li> Wishlist </li>
                        <li> Blog </li>
                        <li> Trabalhe conosco </li>
                        <li> Meus pedidos </li>
                    </ul>
                </nav>
            </div>
            <div> 
                <h6> Categorias </h6>
                <nav>
                    <ul>
                        <li> Camisetas </li>
                        <li> Calças </li>
                        <li> Bonés </li>
                        <li> Headphones </li>
                        <li> Tênis </li>
                    </ul>
                </nav>
            </div>
            <div> 
                <h6> Contato </h6>
                <p> Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <a href="tel:+558530513411"> (85) 3051-3411 </a>
                
            </div>
        </footer>
        <p className='inf'> @ 2025 Digital College </p>
    </FooterContainer> );
}
 
export default Footer;