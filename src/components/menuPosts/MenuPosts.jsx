import Link from "next/link"
import Image from "next/image"
import styles from "./menuPosts.module.css"

export default function ({withImage}) {
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/godfather.jpg" alt="" fill></Image>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Travel Log: Definition, Essential Elements, and Examples</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Bruce Wayne</span>
                        <span className={styles.date}> - 4-1-2024</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/godfather.jpg" alt="" fill></Image>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>Travel Log: Definition, Essential Elements, and Examples</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Bruce Wayne</span>
                        <span className={styles.date}> - 4-1-2024</span>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}