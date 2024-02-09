"use client";

import Link from "next/link";
import ProductCard from "./components/productCard";
import { imoveis } from "./data/imoveis";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Logo from "../../public/imoveis/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col py-36 bg-white text-black">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">

          <Image
            src={Logo}
            alt="Imagem"

            width={310}
            height={310}

          ></Image>

          <p className="text-2xl sm:text-5xl mt-2 font-title mb-6">
            Experiência e Segurança Imobiliária
          </p>
          <Search />
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
