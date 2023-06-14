import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { productId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`API_ENDPOINT/products/${productId}`);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{products.titre}</h1>
      <p>Category: {products.category}</p>
      <p>Price: {products.actual_price} DH</p>
    </div>
  );
};

export default ProductPage;
