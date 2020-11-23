import Main from './components/main';
import { Route } from "react-router-dom";

function App() {
  return (
    <Route path="/" component={Main} />
  );
}

export default App;
