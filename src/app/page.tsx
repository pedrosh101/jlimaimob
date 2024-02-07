"use client";

import Link from "next/link";
import ProductCard from "./components/productCard";
import { imoveis } from "./data/imoveis";
import Navbar from "./components/navbar";
import Search from "./components/search";
import { Suspense } from "react";

export default function Home() {
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
          <Suspense>
            <Search />
          </Suspense>
        </div>
      </main>

      {/* produtos da página inicial cards */}

      <main className="flex flex-col justify-center items-center py-12 bg-white">
        <div className="flex justify-center flex-wrap md:grid grid-cols-4 max-[1600px]:grid-cols-3 max-[1400px]:grid-cols-2">
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
