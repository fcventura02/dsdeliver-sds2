import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[],
    onSelectProduct: (product: Product)=>void,
    selectedProducts:Product[]

}

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {

    return (
        <div className="orders_list_container">
            <div className="orders_list_items">
                {
                    products.map(product => (
                            <ProductCard key={product.id} 
                            product={product} 
                            onSelectProduct={onSelectProduct} 
                            isSelected={checkIsSelected(selectedProducts, product)}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList;