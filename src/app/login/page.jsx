import styles from "./loginPage.module.css"

export default function LoginPage (){
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>Sign in with Google</div>
                <div className={styles.socialButton}>Sign in with GitHub</div>
                <div className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    )
}