import { useState, useEffect } from 'react';

import styles from './Sheep.module.css';

export default function Sheep({ colours }) {

    const { body, ear, face, eye, pupil, leg } = colours;

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%'}}>
            <div style={{
                position: 'absolute',
                backgroundColor: body,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: ear,
                width: '55%',
                height: '12%',
                borderRadius: '25%',
                bottom: '37%',
                left: '6%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: face,
                width: '40%',
                height: '40%',
                borderRadius: '50%',
                bottom: '15%',
                left: '13%',
            }}></div>

        </div>
    )
}