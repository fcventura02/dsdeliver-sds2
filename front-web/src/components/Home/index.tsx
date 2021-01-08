import "./styles.css";
import { ReactComponent as ImageHome } from '../../assets/img/Imagem_home.svg'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main className="home_container">
                <div className="home_content">
                    <section className="home_actions">
                        <h1 className="home_title">
                            Faça seu pedido que entregamos pra você!!!
                        </h1>
                        <h3 className="home_subtitle">
                            Escolha o seu pedido e em poucos minutos levaremoss na sua porta
                        </h3>
                        <Link className="home_btn_order" to="orders">
                            FAZER PEDIDO
                        </Link>
                    </section>
                    <section className="home_image">
                        <ImageHome />
                    </section>
                </div>
            </main>
        </>
    )
}
export default Home;