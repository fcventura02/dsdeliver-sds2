import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[]
}

function ProductsList({ products }: Props) {

    return (
        <div className="orders_list_container">
            <div className="orders_list_items">
                {
                    products.map(product => (
                            <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;