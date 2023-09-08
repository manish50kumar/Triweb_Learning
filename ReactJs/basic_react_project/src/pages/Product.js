
import ProductList from "../components/product/ProductList";

function Product() {

    let products = [
        {
            id: 'p1',
            product_name: "City tour",
            image:"https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_1280.jpg",
            description: "Its a good City tour",
            price:"200000"
                       
        },
        {
            id: 'p2',
            product_name: "Forest tour",
            image:"https://cdn.pixabay.com/photo/2015/04/25/12/39/girls-739071_1280.jpg",
            description: "Its a good Forest tour",
            price:"400000"
                       
        },
        {
            id: 'p1',
            product_name: "River tour",
            
            image:"https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_1280.jpg",
            description: "Its a good River tour",
            price:"500000"
                       
        }
];

    return (
        <div>
    
                <ProductList products={products}></ProductList>
          
        </div>
    )
}

export default Product;