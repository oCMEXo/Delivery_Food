import styles from "./loading-overlay.module.css";

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message = "Загрузка страницы..." }: LoadingOverlayProps) {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.contentContainer}>
        {/* Spinning 'e' logo */}
        <div className={styles.spinner}>
          
        </div>
        {/* Loading message */}
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}
