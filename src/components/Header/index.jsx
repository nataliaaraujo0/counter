import styles from "../Header/styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function Header() {
  // <img src={logoImg} alt="dt urban" />
  return (
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <h1>Welcome</h1>
        <img src={logoImg} alt="counter app" />
      </div>

      <p>Click the button to create a counter</p>

      <Link to="/counter">
        <Button />
      </Link>
    </header>
  );
}
