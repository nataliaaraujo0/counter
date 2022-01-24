import "./styles/global.scss";
import styles from "./home.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main className={styles.container}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
