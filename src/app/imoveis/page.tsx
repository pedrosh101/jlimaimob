import React from "react";
import { imoveis } from "../data/imoveis";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ImoveisPage: React.FC = () => {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");

  // Filtrar os imóveis com base no tipo selecionado na URL
  const filteredImoveis = tipo
    ? imoveis.filter((imovel) => imovel.tipo === tipo)
    : [];

  return (
      <div className="bg-gray-400 text-black min-h-screen p-8">
        <h1 className="text-2xl">Resultados da Pesquisa</h1>
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
      </div>
  );
};

export default ImoveisPage;
