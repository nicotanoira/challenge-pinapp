'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextType {
  searchInputText: string;
  setSearchInputText: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchInputText, setSearchInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ searchInputText, setSearchInputText, loading, setLoading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
