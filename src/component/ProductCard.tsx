interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (  
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>${price.toFixed(2)}</p>
        <button type="button" className="product-button" onClick={() => alert(`${name} added to cart`)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};