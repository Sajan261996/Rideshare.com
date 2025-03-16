import React, { useEffect, useState } from "react";
import "./Home.css";
import thaliVideo from "../../assets/thali.mp4";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading if error occurs
      });
  }, []);

  return (
    <div className="home-container">
      {thaliVideo ? (
        <video className="background-video" src={thaliVideo} autoPlay loop muted playsInline />
      ) : (
        <p>Video failed to load.</p>
      )}

      <div className="view-all-container">
        <button className="view-all-button">View All</button>
      </div>

      <div className="products-container">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={`Image of ${product.name}`} />
              <p>{product.name}</p>
              <p>Price: <span>${product.price}</span></p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
