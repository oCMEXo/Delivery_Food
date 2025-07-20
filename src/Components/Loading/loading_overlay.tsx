import styles from "./loading-overlay.module.css";

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message }: LoadingOverlayProps) {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.contentContainer}>
        
        <div className={styles.spinner}></div>
        
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}
