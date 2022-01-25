import styles from "./styles.module.scss";
import { CardItem } from "../CardItem";
import { Button } from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

export function CounterList({ decrement, increment }) {
  // const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {[0, 0].map((item, index) => (
        <CardItem key={index} 
        increment={increment} 
        decrement={decrement} />
      ))}
      <Button buttonText="add more counters" />
    </div>
  );
}
