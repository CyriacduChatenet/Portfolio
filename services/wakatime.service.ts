import { Dispatch, SetStateAction } from "react";

class WakatimeService {

    getData = async (setData: Dispatch<SetStateAction<never[] | []>>, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
        const response = await fetch ('/api/wakatime');
        const responseJSON = await response.json();
        setIsLoading(true);
        return setData(responseJSON.days);
    };
};

export default WakatimeService;