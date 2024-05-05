import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({item, key}){
    return(
        <div className={styles.container} key={key}>
      {/* <div className={styles.post}> */}
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/godfather.jpg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href="./">
                <h1>{item.title}</h1>
            </Link>
            <p className={styles.description}>{item.description}</p>
            <Link href="./" className={styles.link}>Read More</Link>
        {/* </div> */}
      </div>
    </div>
    )
    
}