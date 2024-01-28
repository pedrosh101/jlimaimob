"use client";

import React from "react";
import { imoveis } from "../data/imoveis";
import Link from "next/link";
import { useSearchStore } from "../store/searchStore";

export default function Search() {

  const { select1Value, setSelect1Value, setSearchResults } = useSearchStore();

  const handleSelect1Change = (e:any) => {
    setSelect1Value(e.target.value);
  };

  const handleSearch = () => {
    const produtosFiltrados = imoveis.filter((product) => {
      return product.tipo === select1Value;
    });

    const resultados = produtosFiltrados.map((product) => ({
      title: product.title,
      price: product.price,
      tipo: product.tipo,
      path: product.path,
    }));

    setSearchResults(resultados);
  };

  return (
    <>
      <div className="flex items-center justify-center h-16 space-x-2">
        <select
          value={select1Value}
          onChange={handleSelect1Change}
          className="px-4 rounded bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Aluguel">Aluguel</option>
          <option value="Compra">Compra</option>
        </select>

        <Link href={{ pathname: "/imoveis" }} passHref>
          <button
            onClick={() => handleSearch()}
            className="px-4 py-2 ml-2 text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Buscar
          </button>
        </Link>
      </div>

    </>
  );
}
