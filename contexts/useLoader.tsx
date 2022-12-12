import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

type Context = {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

interface IProps {
    children: ReactNode;
};

const loaderContext = createContext<Context>({
    counter: 0,
    setCounter: () => {},

    isLoading: false,
    setIsLoading: () => {},
});

export const LoaderProvider: FC<IProps> = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    if(counter === 100) {
        setTimeout(() => {
            setIsLoading(true);
        }, 2000);
    }

    return (
        <loaderContext.Provider value={{ counter, setCounter, isLoading, setIsLoading }}>
            {children}
        </loaderContext.Provider>
    );
};

const useLoader = () => useContext<Context>(loaderContext);

export default useLoader;