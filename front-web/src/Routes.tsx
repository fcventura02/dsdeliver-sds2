import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";


function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
            <Footer />

        </BrowserRouter>
    )
}
export default Routes;