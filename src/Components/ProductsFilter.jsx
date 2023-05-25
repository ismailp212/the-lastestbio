import {React , useState} from "react";
import {ProductsData} from '../data/products';
import '../Style/ProductsFilter.css'
import {useAutoAnimate} from "@formkit/auto-animate/react"
import Plane from '../assets/plane.png';

function ProductsFilter(){
    const [parent] = useAutoAnimate()


    const[MenuProducts , setMenuProducts]= useState(ProductsData)
    
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }    

    return(
       <div className="FilterProducts">
        <div className="container">
            <img src={Plane} alt=""  className="title-ing-prod-filter"/>
            <h1>Our Featured Products</h1>
            <div className="products">
                <ul className="menu">
                    <li onClick={()=>setMenuProducts(ProductsData)} style={{color:'green'}}>All</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Conditionners</li>
                    <li onClick={()=>filter("foundation")}>Foundations</li>
                </ul>
            
            <div className="list" ref={parent}>
                {
                    MenuProducts.map((product,i)=>(
                        <div className="product">
                            <div className="left-si">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div> <a href="">Shop Now</a></div>
                            </div>
                            <img src={product.img} alt="" className="img-p"/>
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