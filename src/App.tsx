
import './App.css';
import { useState } from 'react';
import { ProductCard } from './component/ProductCard';
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';
import laptopImage from './assets/laptop.jpg';
import phoneImage from './assets/phone.jpg';
import headphoneImage from './assets/headphone.jpg';
import shoesImage from './assets/shoes.jpg';
import speakerImage from './assets/speaker.jpg';
import watchImage from './assets/watch.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99, image: laptopImage },
  { id: 2, name: 'Smartphone', price: 499.99, image: phoneImage },
  { id: 3, name: 'Headphones', price: 199.99, image: headphoneImage },
  { id: 4, name: 'Shoes', price: 89.99, image: shoesImage },
  { id: 5, name: 'Bluetooth Speaker', price: 149.99, image: speakerImage },
  { id: 6, name: 'Smartwatch', price: 199.99, image: watchImage },
];

function App() {
  const [, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <Navbar />
      <SearchBar />
      <h1>MERKATO STORE</h1>
      <p>Welcome to MERKATO STORE!</p>
      
      <div className="app-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
      
 