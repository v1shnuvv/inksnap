"use client"
import Image from "next/image"
import styles from "./writePage.module.css"
import { useState } from "react"
import 'react-quill/dist/quill.bubble.css';
import dynamic from "next/dynamic";

export default function WritePage(){
const ReactQuill = dynamic(()=> import('react-quill'),{ssr: false}) ;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return (
      <div className={styles.container}>
        <input className={styles.input} placeholder="Title" type="text"></input>
        <div className={styles.editor}>
          <div className={styles.inputButtons}>
          <button className={styles.button} >
            <Image src="/add.png" alt="" width={16} height={16} onClick={()=>{setOpen(!open)}}/>
          </button>
          {/* need to add catogery selector */}
          {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
            <Image src="/image.png" alt="" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/external.png" alt="" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/video.png" alt="" width={16} height={16} />
          </button>
          </div>
         )}
        <button className={styles.publish}>Publish</button>
          </div>

         <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."/>
        </div>
      </div>
    );
}