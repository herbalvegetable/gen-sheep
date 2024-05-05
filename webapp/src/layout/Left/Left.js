import styles from './Left.module.css';

export default function Left({ children }) {

    return (
        <div className={styles.left}>
            {children}
        </div>
    )
}