"use client"
import { useRouter } from 'next/navigation'
import styles from './pagination.module.css'

export default function Pagination({page, hasNext, hasPrev}){
    const router = useRouter();
    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={()=> router.push(`?page=${page - 1}`)} disabled={!hasPrev}>Previous</button>
            <button className={styles.button} onClick={()=> router.push(`?page=${page + 1}`)} disabled={!hasNext}>Next</button>
        </div>
    )
}