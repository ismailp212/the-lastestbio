import React, { useEffect, useState } from "react";
import axios from "axios";






function Tablo(){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      
      console.log(products);


      return (
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.photo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
}

export default Tablo;
