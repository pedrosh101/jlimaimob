"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard";
import { useState } from "react";
import { products } from "./data/products";

export default function Home() {
  const [select1Value, setSelect1Value] = useState("Aluguel");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSelect1Change = (e: any) => {
    setSelect1Value(e.target.value);
  };

  const handleSearch = () => {
    // Filtrar os produtos com base na opção selecionada
    const filteredProducts = products.filter((product) => {
      return product.tipo === select1Value;
    });

    // Mapear os produtos filtrados para um novo array com informações desejadas
    const resultsWithInfo = filteredProducts.map((product) => ({
      title: product.title,
      price: product.price,
      tipo: product.tipo,
      path: product.path,
      // Adicione outras chaves que deseja incluir aqui
    }));

    // Definir os resultados da busca
    setSearchResults(resultsWithInfo);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image src="/main5.jpg" alt="background image" priority fill />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-gray-200">
              Seu novo lar está aqui{" "}
            </h1>
            <p className="text-3xl mt-2 text-white">
              Experiência em gestão imobiliária
            </p>
            <div className="flex items-center justify-center h-16 space-x-2">
              <select
                value={select1Value}
                onChange={handleSelect1Change}
                className="px-4 py-2 bg-white text-black border border-l-0 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="Aluguel">Aluguel</option>
                <option value="Compra">Compra</option>
              </select>

              <button
                onClick={handleSearch}
                className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Buscar
              </button>
            </div>
            <div>
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((product, index) => (
                    <li key={index} className="bg-neutral-200 text-black p-2">
                      <div>
                        <p>Nome do objeto: {product.title}</p>
                        <p>Preço: {product.price}</p>
                        <p>Tipo: {product.tipo}</p>
                        <Link href={product.path}>
                          <p>Ver detalhes</p>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      <main className="flex flex-col justify-center items-center py-28 bg-slate-100">
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Link
              href={{
                pathname: `/products/${product.codigo}`,
                query: {
                  title: `${product.title}`,
                  price: `${product.price}`,
                  img: `${product.img}`,
                },
              }}
              key={product.id}
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
