import Navi from "../navi/Navi";
import { Container } from 'reactstrap'
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard/>
    </Container>
  );
}

export default App;
