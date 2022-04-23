import { useState, useEffect } from 'react';
import { LoadTexts } from '../services/LoadData';


export default function useTexts() {
    const [textos, setTextos] = useState({});

    useEffect(() => {
        const response = LoadTexts();
        setTextos(response);
    }, []);

    return textos;
}
