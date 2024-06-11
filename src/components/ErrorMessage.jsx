import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  if (message === 'signal is aborted without reason') return;

  return (
    <p className={styles.error}>
      <span>⛔️</span>
      {message}
    </p>
  );
}
