import "./styles/global.scss";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { CounterList } from "./components/CounterList";
function App() {
  return (
    <>
      <Header />
      <Button />
      <CounterList />
    </>
  );
}

export default App;
