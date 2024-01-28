import {create} from "zustand";



export const useSearchStore = create((set) => ({
  select1Value: "Aluguel",
  searchResults: [],
  setSelect1Value: (value) => set({ select1Value: value }),
  setSearchResults: (results) => set({ searchResults: results }),
}));