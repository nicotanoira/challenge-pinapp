"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearch } from "@/context/SearchContext";

const { Search } = Input;

const SearchInput: React.FC = () => {
  const [value, setValue] = useState("");
  const debounceInput = useDebounce(value, 500);
  const { setSearchInputText, loading } = useSearch();

  useEffect(() => {
    setSearchInputText(debounceInput);
  }, [debounceInput, setSearchInputText]);

  return (
    <Search
      placeholder="Buscar"
      loading={loading}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
