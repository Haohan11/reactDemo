import { Fragment } from "react";
import styles from '@/styles/course/jsx.module.css' 

export default function JSX() {
    const useFragment = 
        <Fragment key='d'>
            <h1 className={styles.tomato}>Dai</h1>
            <p className={styles.tomato_p}>dai</p>
        </Fragment> 

    const useDiv = 
        <div key='a'>
            <h1>Dai</h1>
            <p>dai</p>
        </div>

    const useFrag = 
        <>
            <h1>Dai</h1>
            <p>dai</p>
        </>

    return [useFragment, useDiv]
}