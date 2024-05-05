import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(){
    return(
        <div className={styles.container}>
      {/* <div className={styles.post}> */}
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/godfather.jpg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>14-4-2024 - </span>
                <span className={styles.category}>Technology</span>
            </div>
            <Link href="./">
                <h1>ARM vs X86</h1>
            </Link>
            <p className={styles.description}>The main high-level difference between ARM vs. x86 is that ARM (RISC) favors simplicity and fast execution of single instructions. And x86 (CISC) prioritizes more complex instructions. As such, compilers must work harder to make high-level code work on ARM devices.</p>
            <Link href="./" className={styles.link}>Read More</Link>
        {/* </div> */}
      </div>
    </div>
    )
    
}