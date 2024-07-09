import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Our Store</h1>
          <p>Find the best products at unbeatable prices.</p>
          <ShopButton>
            <FaShoppingCart /> Shop Now
          </ShopButton>
        </HeroText>
        <HeroImage src="https://cdn.prod.website-files.com/635a76dc72a1554a18e33d3d/63f62f2d63501a20978b56de_63c525d81c217825ecd91b15_60-best-fashion-e-commerce-sites.jpeg" alt="Hero" />
      </HeroSection>
      <ProductShowcase>
        <h2>Featured Products</h2>
        <ProductGrid>
          <ProductCard>
            <ProductImage src="https://via.placeholder.com/200" alt="Product 1" />
            <ProductDetails>
              <h3>Product 1</h3>
              <p>200.00 Ksh</p>
              <Description>
                A high-quality product that meets all your needs and exceeds expectations.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://via.placeholder.com/200" alt="Product 2" />
            <ProductDetails>
              <h3>Product 2</h3>
              <p>300.00 Ksh</p>
              <Description>
                Enjoy the best performance and style with this amazing product.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
         
        </ProductGrid>
      </ProductShowcase>
      <Footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f8f9fa;
`;

const HeroText = styled.div`
  max-width: 600px;
  padding: 50px;
  border-radius: 10px;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const ShopButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const HeroImage = styled.img`
  max-width: 600px;
  border-radius: 10px;
`;

const ProductShowcase = styled.section`
  padding: 50px;
  background-color: #fff;
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  background-color:  #e9f0f7;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
`;

const ProductImage = styled.img`
  max-width: 150px;
  border-radius: 10px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  h3 {
    font-size: 20px;
    margin: 10px 0;
  }
  p {
    font-size: 18px;
    color: #007bff;
  }
`;

const Description = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const CartIcon = styled.div`
  margin-left: 10px;
  color: #007bff;
  font-size: 18px;
`;

const Footer = styled.footer`
  background-color:  #e9f0f9;
  
  color: #555;
  padding: 20px;
  text-align: center;
  p {
    margin: 0;
  }
`;

export default Home;
