import "./styles/global.scss";
import styles from "./home.module.scss";
import { Header } from "./components/Header";
function App() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}

export default App;
