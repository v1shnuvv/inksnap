import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image";

export default function Comments(){
    const status = "authenticated"
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea placeholder="write a comment..." className={styles.input}/>
            <button className={styles.button}>Add</button>
          </div>
        ) : (
          <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image className={styles.image} src="/godfather.jpg" alt="" width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Antonio Montano</span>
                        <span className={styles.date}>14.12.2024</span>
                    </div>
                </div>
                <p className={styles.description}>For now, these falls are synonymous with my Nordic skiing experience: inevitable and a part of the</p>
            </div>
        </div>
      </div>
    );
}