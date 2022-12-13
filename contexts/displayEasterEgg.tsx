import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

type Context = {
    displayEasterEgg: boolean
    setDisplayEasterEgg: Dispatch<SetStateAction<boolean>>
};

interface IProps {
    children: ReactNode;
};

const easterEggContext = createContext<Context>({
    displayEasterEgg: false,
    setDisplayEasterEgg: () => {},
});

export const EasterEggProvider: FC<IProps> = ({ children }) => {
    const [displayEasterEgg, setDisplayEasterEgg] = useState(false);

    return (
        <easterEggContext.Provider value={{displayEasterEgg, setDisplayEasterEgg}}>
            { children }
        </easterEggContext.Provider>
    );
};

const useEasterEgg = () => useContext<Context>(easterEggContext);

export default useEasterEgg;