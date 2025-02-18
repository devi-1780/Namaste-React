import Product from "./Product";
import { list } from "./utilits";
import { useState } from "react";
const Body=()=>{
    let [products,setProducts]=useState(list);
    return(
        <div>
           <div>
            <button onClick={()=>{
                highestRatedProducts=products.filter((item)=>item.price>100);
                setProducts(highestRatedProducts);
            }}>Top Rated Products</button>
           </div>
           <div className="card-container">
              {products.map((item)=><Product key={item.id} item={item} />)}
           </div>
        </div>
    )
}
export default Body;