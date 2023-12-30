"use client";

import Link from "next/link";
import ProductCard from "./components/productCard";
import { useState } from "react";
import { imoveis } from "./data/imoveis";
import Navbar from "./components/navbar";

export default function Home() {
  const [select1Value, setSelect1Value] = useState("Aluguel");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSelect1Change = (e: any) => {
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
      <Navbar />
      <main className="flex flex-col py-40 bg-white text-black">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4 font-sans">
            JLima Imóveis
          </h1>
          <p className="text-2xl sm:text-5xl mt-2 font-title mb-6">
            Experiência e Segurança Imobiliária
          </p>
          <div className="flex items-center justify-center h-16 space-x-2">
            <select
              value={select1Value}
              onChange={handleSelect1Change}
              className="px-4 rounded bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Aluguel">Aluguel</option>
              <option value="Compra">Compra</option>
            </select>

            <button
              onClick={handleSearch}
              className="px-4 py-2 ml-2 text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Buscar
            </button>
          </div>
          <div>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product, index) => (
                  <li key={index} className="bg-neutral-200 m-2 text-black p-2">
                    <div>
                      <Link href={product.path}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </main>

      {/* produtos da página inicial cards */}

      <main className="flex flex-col justify-center items-center py-12 bg-white">
        <div className="flex flex-wrap">
          {imoveis.map((product) => (
            <Link
              key={product.id}
              href={{
                pathname: `/imoveis/${product.codigo}`,
              }}
            >
              <ProductCard
                title={product.title}
                price={product.price}
                img={product.img}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
