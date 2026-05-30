import './App.css';
import { ProductCard } from './component/ProductCard';
import laptopImage from './assets/laptop.jpg';
import phoneImage from './assets/phone.jpg';
import headphoneImage from './assets/headphone.jpg';
import shoesImage from './assets/shoes.jpg';
import speakerImage from './assets/speaker.jpg';
import watchImage from './assets/watch.jpg';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, image: laptopImage },
  { id: 2, name: 'Smartphone', price: 499.99, image: phoneImage },
  { id: 3, name: 'Headphones', price: 199.99, image: headphoneImage },
  { id: 4, name: 'Shoes', price: 89.99, image: shoesImage },
  { id: 5, name: 'Bluetooth Speaker', price: 149.99, image: speakerImage },
  { id: 6, name: 'Smartwatch', price: 199.99, image: watchImage },
  
];

function App() {
  return (
    <div>
      <h1>MERKATO STORE</h1>
      <p>Welcome to MERKATO STORE!</p>
      <div className="app-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
      
 