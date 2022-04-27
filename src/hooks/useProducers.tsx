import { useState, useEffect } from "react";
import { LoadProducers } from "../services/LoadData";

export default function useProducers(bestProducers: any) {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const response = LoadProducers();
        response.list.sort(
            (producer1, producer2) => producer1.distance - producer2.distance,
        );
        let newList: any = response.list;
        
        if (bestProducers) {
            newList = newList.filter(
                (producer: any) => producer.stars > 3
            );
        }
        setList(newList);
    }, []);

    return list;
};

