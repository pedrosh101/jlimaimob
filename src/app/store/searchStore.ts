import {create} from "zustand";

type SearchStore = {
  select1Value: any;
  searchResults: any;
  setSelect1Value: any;
  setSearchResults: any;
};

export const useSearchStore = create<SearchStore>((set) => ({
  select1Value: "Aluguel",
  searchResults: [],
  setSelect1Value: (value: any) => set({ select1Value: value }),
  setSearchResults: (results: any) => set({ searchResults: results }),
}));


