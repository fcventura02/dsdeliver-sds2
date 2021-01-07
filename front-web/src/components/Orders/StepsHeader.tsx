function StepsHeader() {
    return (
        <header className="orders_steps_container">
            <div className="orders_steps_content">
                <h1 className="steps_title">SIGA AS ETAPAS</h1>
                <ul className="steps_items">
                    <li>
                        <span className="steps_number">1</span>
                        Selecione os produtos e localização.
                    </li>
                    <li>
                        <span className="steps_number">2</span>
                        Depois clique em “ENVIAR PEDIDO”
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;