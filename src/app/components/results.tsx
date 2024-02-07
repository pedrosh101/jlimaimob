"use client";

import { imoveis } from "../data/imoveis";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ImoveisPage = () => {
    const searchParams = useSearchParams();
    const tipo = searchParams.get("tipo");
  
    const filteredImoveis = tipo
      ? imoveis.filter((imovel) => imovel.tipo === tipo)
      : [];
  
    return (
      <>
        {filteredImoveis.length > 0 ? (
          <ul>
            {filteredImoveis.map((imovel, index) => (
              <li key={index} className="bg-neutral-200 m-2 text-black p-2 w-96">
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
      </>
    );
  };
  
  export default ImoveisPage;