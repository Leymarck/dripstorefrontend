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
            <section className="colections">
                <div className="card"> </div>
                <div className="card"> </div>
                <div className="card"> </div>
            </section>
            <section className="destaquecolections">
                <div className="colect"> 
                    <img/> 
                    <h6> Camisetas </h6>
                </div>
                <div className="colect"> 
                    <img/> 
                    <h6> Calças </h6>
                </div>
                <div className="colect"> 
                    <img/> 
                    <h6> Bonés </h6>
                </div>
                <div className="colect"> 
                    <img/> 
                    <h6> Headphones </h6>
                </div>
                <div className="colect"> 
                    <img/> 
                    <h6> Tênis </h6>
                </div>
            </section>
            <section className="emalta">
                <h3> Produtos em Alta <p> Ver todos </p> </h3>
                <div className="pcarddiv"> 
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