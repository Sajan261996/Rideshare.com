import React, { useEffect, useState } from "react";
import "./Home.css";
import thaliVideo from "../../assets/thali.mp4";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="home-container">
      <video className="background-video" src={thaliVideo} autoPlay loop muted playsInline />
      <div className="view-all-container">
        <button className="view-all-button">View All</button>
      </div>
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
