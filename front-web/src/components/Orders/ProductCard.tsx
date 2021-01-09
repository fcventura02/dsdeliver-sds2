import { formatPrice } from "./helpers";
import { Product } from "./types";

type Props = {
    product: Product;
    onSelectProduct: (product: Product)=>void,
    isSelected: boolean
}


function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div className={`order_card_container ${isSelected? 'selected': ''}`} onClick={()=> onSelectProduct(product)}>
            <h3 className="order_card_title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order_card_image" alt={product.name} />
            <h3 className="order_card_price">
                {formatPrice(product.price)}
            </h3>
            <div className="order_card_description">
                <h3>
                    Descrição
                </h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;