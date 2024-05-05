import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

const getCategories = async()=>{
    const res = await fetch(`${process.env.BASE_URL}/categories`);
    if(!res.ok){
        throw new Error("Failed to fetch data!")
    }
    return res.json()
}

export default async function CategoryList(){
    const categories = await getCategories()
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Popular categories</h1>
        <div className={styles.categories}>
          {categories.map((item) => (
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} key={item._id}>
            <Image className={styles.image} src="/category.jpg" width={26} height={26} alt=""/>
                {/* need to modify to show different images for categories */}
                {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
}