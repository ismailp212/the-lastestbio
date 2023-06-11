import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../Style/ProductsFilter.css'
import { useAutoAnimate } from "@formkit/auto-animate/react"
import Plane from '../assets/plane.png';

function ProductsFilter() {
    const [parent] = useAutoAnimate()
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/add_product');
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filter = (category) => {
        if (category === "All") {
            setFilteredProducts(products); 
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    }

    return (
        <div className="FilterProducts">
            <div className="container">
                <img src={Plane} alt="" className="title-ing-prod-filter" />
                <h1>Our Featured Products</h1>
                <div className="products">
                    <ul className="menu">
                        <li onClick={() => filter("All")} style={{ color: 'green' }}>All</li>
                        <li onClick={() => filter("Miel")}>Les Miels</li>
                        <li onClick={() => filter("Crème")}>Les Crèmes</li>
                        <li onClick={() => filter("Huile")}>Les Huiles</li>
                        <li onClick={() => filter("poudre")}>Les poudres</li>
                    </ul>
                    <div className="list" ref={parent}>
                        {
                            filteredProducts.map((product, i) => (
                                <div className="product" key={i}>
                                    <div className="left-si">
                                        <div className="name">
                                            <span>{product.category}</span>
                                            <span>{product.titre}</span>
                                        </div>
                                        <span>{product.actual_price}$</span>
                                        <div> <a href="">Shop Now</a></div>
                                    </div>
                                    <img src={product.image} alt="" className="img-p" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsFilter;
