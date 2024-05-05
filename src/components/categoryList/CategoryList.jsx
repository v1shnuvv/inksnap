import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

export default function CategoryList(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Popular categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=''/>
                    style
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=''/>
                    sport
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=''/>
                    travel
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=''/>
                    coding
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=''/>
                    automobile
                </Link>

            </div>
        </div>
    )
}