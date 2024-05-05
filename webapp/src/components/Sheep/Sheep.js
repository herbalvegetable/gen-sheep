import { useState, useEffect } from 'react';

import styles from './Sheep.module.css';

export default function Sheep({ fill }) {

    const [body, ear, face, eye, pupil, leg] = fill.split('/');

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', userSelect: 'none' }}>
            {
                [20, 60].map((leftPct, i) => <div key={i.toString()} style={{
                    position: 'absolute',
                    backgroundColor: leg,
                    border: '1px solid black',
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
                border: '1px solid black',
                width: '100%',
                height: '95%',
                borderRadius: '45%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: ear,
                border: '1px solid black',
                width: '50%',
                height: '12%',
                borderRadius: '25%',
                bottom: '42%',
                left: '7%',
            }}></div>

            <div style={{
                position: 'absolute',
                backgroundColor: face,
                border: '1px solid black',
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
                    border: '1px solid black',
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
                    border: '1px solid black',
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
                    border: '1px solid black',
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