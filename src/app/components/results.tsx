"use client";

import { imoveis } from "../data/imoveis";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductCard from "./productCard";

const Results = () => {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");

  const filteredImoveis = tipo
    ? imoveis.filter((imovel) => imovel.tipo === tipo)
    : [];

  return (
    <>
      {filteredImoveis.length > 0 ? (
        <ul className="flex flex-col sm:flex-row">
          {filteredImoveis.map((imovel, index) => (
            <li key={index} className="text-black flex">
              <div className="flex w-full">
                <Link href={imovel.path}>
                  <ProductCard
                    title={imovel.title}
                    price={imovel.price}
                    img={imovel.img}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </>
  );
};

export default Results;
