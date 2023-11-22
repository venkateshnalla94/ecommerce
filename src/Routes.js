import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
