'use client';
import { useState, useEffect } from 'react';

import styles from "./page.module.css";

import Center from '@/layout/Center/Center';
import Sheep from '@/components/Sheep/Sheep';
import { useGenerateSheeps } from '@/hooks/useGenerateSheeps';

export default function Home() {

    const [displaySheep, setDisplaySheep] = useState({
        fill: 'silver/black/#222/white/black/black',
    });
    const [prevSheeps, setPrevSheeps] = useState([]);
    const addPrevSheep = sheep => {
        let newPrevSheeps = [...prevSheeps, {...sheep}];
        setPrevSheeps(newPrevSheeps);
    }

    useEffect(() => {
        
    }, []);

    const handleRoll = e => {
        e.preventDefault();
        console.log('roll sheep');

        let newSheep = useGenerateSheeps(1)[0];

        setDisplaySheep(newSheep);
        addPrevSheep(newSheep);
    }

    return (
        <>
            <Center>
                <div className={styles.container}>
                    <h1>gen_sheep</h1>
                    <div className={styles.display_sheep}>
                        <Sheep
                            fill={displaySheep.fill}
                        />
                    </div>
                    <button className={styles.roll_btn} onClick={handleRoll}>Roll Sheep</button>
                </div>
                <div className={styles.prev_sheeps}>
                    {
                        prevSheeps.map((sheep, i) => {
                            const { fill } = sheep;

                            return <div key={i.toString()} className={styles.sheep_container}>
                                <Sheep fill={fill}/>
                            </div>
                        })
                    }
                </div>
            </Center>
        </>
    );
}
