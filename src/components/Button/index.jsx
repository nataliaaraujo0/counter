import styles from "../Button/styles.module.scss";

export function Button({ buttonText = "add counter" }) {
  return (
    <>
      <button>{buttonText && <span>{buttonText}</span>}</button>
    </>
  );
}
