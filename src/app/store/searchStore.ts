import {create} from "zustand";

type SearchStore = {
  select1Value: string;
  searchResults: any[]; 
  setSelect1Value: (value: string) => void;
  setSearchResults: (results: any[]) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  select1Value: "Aluguel",
  searchResults: [],
  setSelect1Value: (value: setSelect1Value) => set({ select1Value: value }),
  setSearchResults: (results: any) => set({ searchResults: results }),
}));