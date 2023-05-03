/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";


const useFetch = (url: string, method: string, dataStateMutator: Dispatch<SetStateAction<Object>>, errorStateMutator: Dispatch<SetStateAction<Object>>, body?: Object) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(body),
            });

            const responseJSON = await response.json();
            return dataStateMutator(responseJSON);
        }
        catch(err: any) {
            return errorStateMutator(err)
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);
};

export default useFetch;