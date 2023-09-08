
import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";

function Product() {
    let [products,setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(() => {
        setIsDataFetching(true);
         fetch('http://localhost:3004/product')
        .then(response => response.json())            
        .then(responseData => {
            setIsDataFetching(false);
            setProducts(responseData.data);
        })            
            .catch(err => console.log(err));
    },[])

    // when we useGET method then no need to pass the value like POST condition
   
    
    if (isDataFetching) {
        return (
            <div>Data is Loading.....</div>
        )
    }
    
        
    return (
        <div>
    
                <ProductList products={products}></ProductList>
          
        </div>
    )
}

export default Product;