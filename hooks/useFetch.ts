import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {};

const useFetch = (url: string, method: string, dataStateMutator: Dispatch<SetStateAction<{}>>, errorStateMutator: Dispatch<SetStateAction<any>>, body?: Object) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(body),
            });

            const responseJSON = await response.json();
            dataStateMutator(responseJSON);
        }
        catch(err) {
            errorStateMutator(err)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useFetch;