'use client';
import { useState, useEffect } from 'react';

import styles from "./page.module.css";
import Sheep from './components/Sheep/Sheep';

export default function Home() {
    return (
        <>
            <h1>gen_sheep</h1>
            <div className={styles.display_sheep}>
                <Sheep colours={{
                    body: 'green',
                    ear: 'black',
                    face: 'white',
                    eye: 'white',
                    pupil: 'black',
                    leg: 'black',
                }} />
            </div>
        </>
    );
}
