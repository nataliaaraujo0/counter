import styles from "../CardItem/styles.module.scss";
import RemoveIcon from "../../assets/icon-romove.svg";
import MinusIcon from "../../assets/icon-minus.svg";
import PlusIcon from "../../assets/icon-plus.svg";
import { Button } from "../../components/Button";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

export function CardItem() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.counterWrapper}>
        <img
          className={styles.removeIcon}
          src={RemoveIcon}
          alt="Remove counter"
          onClick={() => dispatch(increment())}
        />
        <div className={styles.cardCounterWrapper}>
          <h1>0</h1>
          <div className={styles.cardoOptions}>
            <img src={MinusIcon} alt="Minus Icon" />
            <img src={PlusIcon} alt="Plus Icon" />
          </div>
        </div>
      </div>

      <Button buttonText="add more counters" />
    </div>slice
  );
}
