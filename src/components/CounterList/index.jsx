import styles from "./styles.module.scss";
import { CardItem } from "../CardItem";
import { Button } from "../Button";

export function CounterList() {
  return (
    <div className={styles.container}>
      <CardItem />

      <Button buttonText="add more counters" />
    </div>
  );
}
