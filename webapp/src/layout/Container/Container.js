'use client'
import { useState, useEffect } from 'react';

import styles from './Container.module.css';

import useScreenSize from '@/hooks/useScreenSize';

export default function Container({ children }) {

    const screenSize = useScreenSize();

    return (
        <div className={`${styles.container} ${screenSize.width <= 850 ? styles.small : ''}`}>
            {children}
        </div>
    )
}