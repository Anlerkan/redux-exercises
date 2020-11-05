import Navi from "../navi/Navi";
import { Container } from 'reactstrap'
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/saveProduct/:productId" exact component={AddOrUpdateProduct}/>
        <Route path="/saveProduct" exact component={AddOrUpdateProduct}/>
        <Route component={NotFound}/>
      </Switch>
  
    </Container>
  );
}

export default App;
