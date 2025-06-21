import ProductCard from "../components/ProductCard";
import styled from 'styled-components';

const HomeContainer = styled.main`
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

width: 100%;

main {
    width: 100%;
    padding: 20px 60px 0 60px;
}

.pcarddiv {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
    width: 100%;
  } 

.produtosemalta {
    display: flex;
    justify-content: space-between;
    color: #666666;
    margin-top: 5px;
}

.vertodos {
    color: #C92071;
    display: flex;
    gap: 9px;
    font-size: small;
    cursor: pointer;
}

.vertodos:hover {
    transform: scale(1.3);
        transition: 2s;
}

.colections {
    display: flex;
    gap: 9px;
    width: 100%;
} 

.colections > div {
    width: 100%;
    

}

.colections > div > img {
    border-radius: 6px;
    width: 100%;
}

.off {
    border-radius: 9px;
    background-color:#E7FF86;
    color: #474747;
    text-align: center;
    width: 15%;
    padding: 4px;
    font-size: small;
    font-weight: bold;
    position: relative;
    top: 5cap;
    left: 4%;
    border: transparent;
}

.button2 {
    background-color: #F5F5F5;
  color: #C92071;
  font-weight: bold;
  padding: 3px;
  margin: 3px;
  width: 100px;
  border-radius: 9px;
  height: 30px;
  cursor: pointer;
  position: relative;
    top: -13cap;
    left: 10%;

}

.button2:hover {
    transform: scale(1.3);
        transition: 2s;
}

.destaquecolections {
    margin-bottom: 60px;
}

.destaquecolectionscards {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.colect > img {
    width: 64px;
    position: absolute;
    z-index: 1;
    top: 15px;
  left: 15px;
   cursor: pointer;
}

.colect > img:hover {
     filter: invert(20%) sepia(92%) saturate(2137%) hue-rotate(310deg) brightness(93%) contrast(98%);
    
}

.colect {
    position: relative;
      width: 94px;
  height: 94px;
}

.colect > h6 {
    margin-top: 105px;
    text-align: center;
    color: #666666;
    font-size: 2vmin;
}

.colect div {
    width: 94px;
    height: 94px;
    background-color:#FFFFFF;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
}

.produtosemalta2 {
    color: #666666;
    margin: 20px 0;
    text-align: center;
}


`


const Home = () => {
    return ( 
        <HomeContainer>
        <main>
            <section className="painelincial"> 
                <div>
                    <p> Melhores ofertas personalizadas </p>
                <h1> Queima de estoque Nike!  </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quisquam quaerat! Numquam cum itaque, accusantium dolorem labore, nobis asperiores impedit aut ex fugit laboriosam doloremque tempora sunt iusto odio provident! </p>
                <button> Ver Ofertas </button>
                </div>
                <img src="/home-slide-1.jpeg" />
            </section> 
            <h3 className="produtosemalta"> Coleções em destaque </h3>
            <section className="colections">
                <div className="card"> 
                    <div className='off'> 30% OFF </div>
                    <img src="./collection-1.png"/> 
                    <button className="button2"> Comprar </button>
                </div>
                <div className="card"> 
                    <div className='off'> 30% OFF </div>
                    <img src="./collection-2.png"/> 
                    <button className="button2"> Comprar </button>
                </div>
                <div className="card"> 
                    <div className='off'> 30% OFF </div>
                    <img src="./collection-3.png"/> 
                    <button className="button2"> Comprar </button>
                </div>
            </section>
            <section className="destaquecolections">
                <h3 className="produtosemalta2"> Coleções em destaque </h3>
                <div className="destaquecolectionscards"> 
                <div className="colect">
                    <div className="bolabranca"> </div> 
                    <img src="./t-shirts2.png"/>
                    <h6> Camisetas </h6>
                </div>
                <div className="colect"> 
                    <div className="bolabranca"> </div> 
                    <img src="./pants.png"/>
                    <h6> Calças </h6>
                </div>
                <div className="colect"> 
                    <div className="bolabranca"> </div> 
                    <img src="./caps.png"/>
                    <h6> Bonés </h6>
                </div>
                <div className="colect"> 
                    <div className="bolabranca"> </div> 
                    <img src="./headphones.png"/>
                    <h6> Headphones </h6>
                </div>
                <div className="colect"> 
                    <div className="bolabranca"> </div>
                    <img src="./sneakers.png"/>
                    <h6> Tênis </h6>
                </div>
                </div>
            </section>
            <section className="emalta">
                <h3 className="produtosemalta"> Produtos em Alta <p className="vertodos"> Ver todos <i className="pi pi-arrow-right" style={{color: '#C92071'}}></i>  </p> </h3>
                <div className="pcarddiv"> 
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30%" type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                <ProductCard off="30% " type="Tênis" image="/productcardimage.png" name="K-Swiss V8 - Masculino" oprice="200" aprice="100" />
                </div>
            </section>
            <section>
                <div>

                </div>
                <div>
                    <h6> Oferta especial </h6>
                    <h3> Air Jordan Edição de colecionador </h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium suscipit minima voluptas, eos ab quidem at numquam, labore, beatae explicabo quibusdam architecto nisi. Quam aut quaerat vitae eaque accusantium perspiciatis. </p>
                    <button> Ver Oferta </button>
                </div>
            </section>
            </main>
        </HomeContainer>
    );
}
 
export default Home;