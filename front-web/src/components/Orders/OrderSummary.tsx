import { formatPrice } from "./helpers";

type Props = {
    ammount: number,
    totalPrice: number,
    onSubmit: ()=>void
}

function OrderSummary({ammount, totalPrice, onSubmit}: Props) {
    return (
        <div className="order_summary_container">
            <div className="order_summary_content">
                <div>
                    <span className="amout_selected_container">
                        <strong className="amount_selected" >{ammount}</strong>
                        Pedidos selecionados
                    </span>
                    <span className="order_summary_total">
                        <strong className="amount_selected">{formatPrice(totalPrice)}</strong>
                        Valor total
                    </span>
                </div>
                <button className="order_summary_make_order"
                    onClick={()=>{
                        onSubmit()
                    }}
                >
                    Fazer pedido
                </button>
            </div>
        </div>
    )

}
export default OrderSummary;
