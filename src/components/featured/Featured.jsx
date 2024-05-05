import Image from 'next/image'
import styles from './featured.module.css'

export default function Featured(){
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          Welcome! <br/>Let's get inky and in(k)spired with Inksnap.
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/godfather.jpg" alt="" fill />
          </div>
          <div className={styles.txtContainer}>
            <div className={styles.postTitle}>
              What is Lorem Ipsum?
            </div>
            <div className={styles.postDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
    );
}