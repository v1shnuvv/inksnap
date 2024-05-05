import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts'


export default function Menu(){
    return(
        <div className={styles.container}>
            <h2 className={styles.subTitle}>What happening</h2>
            <h1 className={styles.title}>Most popular</h1>
            <div className={styles.items}>
                <MenuPosts withImage={false}/>  
            </div>
            {/* ---- */}
            {/* <h2 className={styles.subTitle}>Discover by topics</h2>
            <h1 className={styles.title}>Categories</h1> */}
            {/* ---- */}
            <h2 className={styles.subTitle}>Choosen by the editor</h2>
            <h1 className={styles.title}>Editors choice</h1>
            <div className={styles.items}>
                <MenuPosts withImage={true}/>
            </div>
            
        </div>
    )
}