import "./globals.css";
import styles from './layout.module.css';

export const metadata = {
    title: "gen_sheep",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.container}>
                    <div className={styles.center}>
                        {children}
                    </div>
                </div>  
            </body>
        </html>
    );
}
