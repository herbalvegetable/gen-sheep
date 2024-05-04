import styles from './Right.module.css';

export default function Right({ children }) {

    return (
        <div className={styles.Right}>
            {children}
        </div>
    )
}