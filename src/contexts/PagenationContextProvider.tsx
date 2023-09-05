import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type pagenationProviderProps = {
  currentPg: number;
  setCurrentPg: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
};

interface ProviderProps {
  children: ReactNode;
}

export const PagenationContext = createContext<pagenationProviderProps>({
  currentPg: 1,
  setCurrentPg: () => {},
  totalPages: 1,
  setTotalPages: () => {},
});

export const PagenationProvider: FC<ProviderProps> = ({ children }) => {
  const [currentPg, setCurrentPg] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const value: pagenationProviderProps = {
    currentPg: currentPg,
    setCurrentPg: setCurrentPg,
    totalPages: totalPages,
    setTotalPages: setTotalPages,
  };

  return (
    <PagenationContext.Provider value={value}>
      {children}
    </PagenationContext.Provider>
  );
};

export default PagenationProvider;
