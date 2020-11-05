import Navi from "../navi/Navi";
import { Container } from 'reactstrap'
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>

        
      </Switch>
  
    </Container>
  );
}

export default App;
