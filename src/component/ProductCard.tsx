import type { Product } from '../App';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>${price.toFixed(2)}</p>
        <button type="button" className="product-button" onClick={() => onAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};