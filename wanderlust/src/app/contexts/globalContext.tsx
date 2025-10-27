"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SearchData = {
  checkin: Date | null;
  checkout: Date | null;
  guests: number;
};

type globalContextType = {
  search: SearchData;
  setSearch: (data: SearchData) => void;
};

const GlobalContext = createContext<globalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [search, setSearch] = useState<SearchData>({
    checkin: null,
    checkout: null,
    guests: 1,
  });

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within GlobalContextProvider"
    );
  }
  return context;
};
