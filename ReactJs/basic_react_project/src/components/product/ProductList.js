
import ProductItem from "./ProductItem";
import Styles from"./ProductList.module.css"

function ProductList(props) {
    return (
        <ul className={Styles.list}>
             {
                    props.products.map((item) => {
                        // return <li key={item.id}>{item.product_name}</li>
                        return <ProductItem key={item.id} item={item} />
                    })
               } 
            
        </ul>
    )
}

export default ProductList;