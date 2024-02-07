"use client";

import React, { Suspense } from "react";
import { imoveis } from "../data/imoveis";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ImoveisPage: React.FC = () => {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");


  const tipoFiltrado = typeof tipo === 'string' ? tipo : null;


  const filteredImoveis = tipoFiltrado
    ? imoveis.filter((imovel) => imovel.tipo === tipoFiltrado)
    : [];

  return (
    <div className="bg-gray-400 text-black min-h-screen p-8">
      <h1 className="text-2xl">Resultados da Pesquisa</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        {filteredImoveis.length > 0 ? (
          <ul>
            {filteredImoveis.map((imovel, index) => (
              <li
                key={index}
                className="bg-neutral-200 m-2 text-black p-2 w-96"
              >
                <div>
                  <Link href={imovel.path}>
                    <p>{imovel.title}</p>
                    <p>{imovel.price}</p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </Suspense>
    </div>
  );
};

export default ImoveisPage;

