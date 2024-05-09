'use client';
import { useState, useEffect, useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import styles from "./page.module.css";

import Center from '@/layout/Center/Center';
import Sheep from '@/components/Sheep/Sheep';
import { useGenerateSheeps } from '@/hooks/useGenerateSheeps';
import Left from '@/layout/Left/Left';

function SmallSheep({ sheep, handleSelect, animated }) {

    const { fill } = sheep;

    return (
        <div className={`${styles.small_sheep_container} ${animated ? styles.animated : ''}`} onClick={e => handleSelect(sheep)}>
            <Sheep fill={fill} />
        </div>
    )
}

export default function Home() {

    const [displaySheep, setDisplaySheep] = useState({
        fill: 'white/black/#222/white/black',
    });
    const [prevSheeps, setPrevSheeps] = useState([]);
    const addPrevSheep = sheep => {
        let newPrevSheeps = [{ ...sheep }, ...prevSheeps];
        // let newPrevSheeps = [...prevSheeps, { ...sheep }];
        setPrevSheeps(newPrevSheeps);
    }

    useEffect(() => {

    }, []);

    const handleRoll = e => {
        e.preventDefault();
        console.log('roll sheep');

        let newSheep = useGenerateSheeps(1)[0];

        setDisplaySheep(newSheep);
        setCustomSheep(newSheep.fill);
        addPrevSheep(newSheep);
    }

    let displaySheepRef = useRef(null);
    const handleDownload = e => {
        console.log(displaySheepRef.current);
        domtoimage.toBlob(displaySheepRef.current)
            .then(function (blob) {
                window.saveAs(blob, 'my_gen_sheep.png');
            });
    }

    const handleSelect = sheep => {
        setDisplaySheep(sheep)
        setCustomSheep(sheep.fill);
    }

    const [customSheep, setCustomSheep] = useState('white/black/#222/white/black')
    const handleCreate = sheepTxt => {
        if(!customSheep) return;

        const [fill, accessories] = sheepTxt.split('|').map(line => line.trim());
        let sheep = {fill, accessories};
        setDisplaySheep(sheep);
        addPrevSheep(sheep);
        setCustomSheep('');
    }

    return (
        <>
            <Left>
                <div className={styles.container}>
                    <span className={styles.title}>gen_sheep</span>
                    <div className={styles.display_sheep}>
                        <div className={styles.download_container} ref={displaySheepRef}>
                            <Sheep
                                fill={displaySheep.fill}
                            />
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.action_btn} onClick={handleRoll}>Roll Sheep</button>
                        <button className={styles.action_btn} onClick={handleDownload}>Download</button>
                    </div>
                    <div className={styles.custom}>
                        <textarea className={styles.textarea} value={customSheep} onChange={e => setCustomSheep(e.target.value)} spellCheck={false} rows={5}/>
                        <button className={styles.action_btn} onClick={e => handleCreate(customSheep)}>Create</button>
                    </div>
                </div>
            </Left>
            <Center>
                <div className={styles.prev_sheeps}>
                    {prevSheeps[0] && <SmallSheep key={prevSheeps[0].fill || ''} sheep={prevSheeps[0]} handleSelect={handleSelect} animated={true}/>}
                    {
                        prevSheeps.slice(1).map((sheep, i) => {
                            return <SmallSheep key={i.toString()} sheep={sheep} handleSelect={handleSelect} animated={false}/>
                        })
                    }
                </div>
            </Center>
        </>
    );
}
