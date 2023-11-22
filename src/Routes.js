import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import ProductDetailPage from "./components/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
const AppRoutes = () => {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default AppRoutes;
