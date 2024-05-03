import { useState, useEffect } from 'react';

import styles from './Sheep.module.css';

export default function Sheep({ colours }) {

    const { body, ear, face, eye, pupil, leg } = colours;

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', userSelect: 'none' }}>
            {
                [20, 60].map((leftPct, i) => <div key={i.toString()} style={{
                    position: 'absolute',
                    backgroundColor: leg,
                    width: '10%',
                    height: '18%',
                    borderRadius: '35% 35% 40% 40%',
                    bottom: '0%',
                    left: `${leftPct}%`,
                }}></div>)
            }

            <div style={{
                position: 'absolute',
                backgroundColor: body,
                width: '100%',
                height: '95%',
                borderRadius: '45%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: ear,
                width: '50%',
                height: '12%',
                borderRadius: '25%',
                bottom: '42%',
                left: '7%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: face,
                width: '36%',
                height: '36%',
                borderRadius: '50%',
                bottom: '24%',
                left: '13%',
            }}></div>

            {
                [18, 33].map((leftPct, i) => <div key={i.toString()} style={{
                    position: 'absolute',
                    backgroundColor: eye,
                    // boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.75)',
                    width: '10%',
                    height: '10%',
                    borderRadius: '50%',
                    bottom: '40%',
                    left: `${leftPct}%`,
                }}></div>)
            }

            {
                [21, 34].map((leftPct, i) => <div key={i.toString()} style={{
                    position: 'absolute',
                    backgroundColor: pupil,
                    width: '6%',
                    height: '6%',
                    borderRadius: '50%',
                    bottom: '40%',
                    left: `${leftPct}%`,
                }}></div>)
            }

            {
                [35, 75].map((leftPct, i) => <div key={i.toString()} style={{
                    position: 'absolute',
                    backgroundColor: leg,
                    width: '10%',
                    height: '18%',
                    borderRadius: '35% 35% 40% 40%',
                    bottom: '0%',
                    left: `${leftPct}%`,
                }}></div>)
            }

        </div>
    )
}