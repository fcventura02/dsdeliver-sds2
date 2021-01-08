import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from "../../services/api";
import OrderLocation from "./OrderLocation";


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    console.log(orderLocation)
    useEffect(() => {
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <nav className="orders_container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location=> setOrderLocation(location)}/>
        </nav>
    )
}

export default Orders;