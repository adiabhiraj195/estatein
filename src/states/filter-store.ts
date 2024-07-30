import {create } from "zustand";

export type Search = {
    searchValue: string;
    setSearchValue: (value: string)=> void;
}

export const useFilterStore = create<Search>()((set)=>({
    searchValue: "",
    setSearchValue: (value:string)=> set((state)=> ({searchValue: value}))
}));