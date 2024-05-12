"use client"
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'

const getPosts = async(page)=>{
    
    const res = await fetch(`${process.env.BASE_URL}/posts?page=${page}`);
    if(!res.ok){
        throw new Error("Failed to fetch data!")
    }
    return res.json()
}

export default async function CardList({page}){
    const {posts, count} = await getPosts(page);
    const postPerPage = 2;
    const hasPrev = postPerPage * (page-1) > 0;
    const hasNext = postPerPage * (page-1) + postPerPage < count;
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                {posts?.map((item)=>(
                    <Card item={item} key={item._id}/>
                ))}
            </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
        </div>
    )
}