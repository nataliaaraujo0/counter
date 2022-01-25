import styles from "./styles.module.scss";
import { CardItem } from "../CardItem";
import { Button } from "../Button";
import { useSelector } from "react-redux";

export function CounterList({ decrement, increment }) {
  const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();
  console.log(count)
  return (
    <div>
      <div className={styles.container}>
      {count.map(index => (
        <CardItem key={index} />
      ))}
      <Button buttonText="add more counters" />
    </div>

      <button>add contator</button>  

    </div>
  );
}
