import Menu from "@/components/menu/Menu"
import styles from "./singlePost.module.css"
import Image from "next/image"
import Comments from "@/components/comments/Comments"

export default function (){
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>New blog New blog New blog New blog New blog New </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image className={styles.avatar} src="/godfather.jpg" alt="" fill />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>Tyler Durden</span>
                            <span className={styles.date}>14-4-2024</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image className={styles.image} src="/godfather.jpg" alt="" fill />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            I lay sprawled on the snow, once again startled by the suddenness of becoming tangled in my new unwieldy accessories. Picking up my glasses, I regained my bearings and began the awkward process of standing up on slippery, freshly waxed cross-country skis. After taking a moment to catch my breath and take in the frosted trees surrounding me, I continued down the trail.
                        </p>
                        <h2>
                            For now, these falls are synonymous with
                        </h2>
                        <p>
                            For now, these falls are synonymous with my Nordic skiing experience: inevitable and a part of the learning process. With the addition of this weeklong Dartmouth Outing Club trip to West Yellowstone, I have around 40 days of Nordic skiing under my belt. I feel like I’m “getting the hang of it,” so to speak. My skiing still looks like a duck waddling back and forth, but I’m shifting into what I’ll call the “Capable Novice” phase.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}