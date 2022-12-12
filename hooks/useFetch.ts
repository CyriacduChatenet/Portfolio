import { Dispatch, SetStateAction, useEffect } from "react";


const useFetch = (url: string, method: string, dataStateMutator: Dispatch<SetStateAction<{}>>, errorStateMutator: Dispatch<SetStateAction<any>>, body?: Object) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(body),
            });

            const responseJSON = await response.json();
            console.log(responseJSON);
            return dataStateMutator(responseJSON);
        }
        catch(err) {
            console.log(err);
            return errorStateMutator(err)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useFetch;