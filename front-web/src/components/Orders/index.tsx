import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "./types";
import { fetchProducts, saveOrder } from "../../services/api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import { checkIsSelected } from "./helpers";
import { toast } from 'react-toastify';
import { ReactComponent as Loading } from '../../assets/img/loading.svg'


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch(err => {
                toast.warning('Não foi possivel conectar ao servidor!')
                console.log(err)
            })
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }
        if (!productsIds.length)
            toast.warning('Selecione pelomenos um produto!');
        else if (!orderLocation)
            toast.warning('Selecione o local de destino!');
        else {
            saveOrder(payload).then((res) => {
                toast.error(`Pedido enviado com sucesso! nº ${res.data.id}`);
                setSelectedProducts([]);
            })
                .catch(() => {
                    toast.warning('Erro ao enviar pedido');
                })
        }
    }

    return (
        <nav className="orders_container">
            <StepsHeader />
            {!products.length && <Loading/>}
            <ProductsList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary ammount={selectedProducts.length} totalPrice={totalPrice} onSubmit={handleSubmit} />
        </nav>
    )
}

export default Orders;