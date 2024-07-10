
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 200.00,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 300.00,
      image: 'https://via.placeholder.com/200',
    },
    // Add more items as needed
  ];

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <EmptyCart>Your cart is empty.</EmptyCart>
      ) : (
        <CartItems>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <h3>{item.name}</h3>
                <p>{item.price} Ksh</p>
              </ItemDetails>
              <RemoveButton>Remove</RemoveButton>
            </CartItem>
          ))}
        </CartItems>
      )}
      <CheckoutButton>
        <FaShoppingCart /> Proceed to Checkout
      </CheckoutButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const EmptyCart = styled.p`
  font-size: 18px;
  color: #555;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9f0f7;
  padding: 20px;
  border-radius: 10px;
`;

const ItemImage = styled.img`
  max-width: 100px;
  border-radius: 10px;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
  h3 {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 18px;
    color: #007bff;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const CheckoutButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 20px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export default Cart;
