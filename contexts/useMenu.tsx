import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

type Context = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

interface IProps {
    children: ReactNode;
};

const menuContext = createContext<Context>({
    isOpen: false,
    setIsOpen: () => {},
});

export const MenuProvider: FC<IProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <menuContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </menuContext.Provider>
    );
};

const useMenu = () => useContext<Context>(menuContext);

export default useMenu;