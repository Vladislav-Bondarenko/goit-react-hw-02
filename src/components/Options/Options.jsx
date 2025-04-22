import styles from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
