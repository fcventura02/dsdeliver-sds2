import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { fetchProducts } from "../../services/api";


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <nav className="orders_container">
            <StepsHeader />
            <ProductsList products={products} />
        </nav>
    )
}

export default Orders;