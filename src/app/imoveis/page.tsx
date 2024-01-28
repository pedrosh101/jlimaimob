"use client";
// pages/imoveis.tsx
import React from 'react';
import {useSearchStore} from '../store/searchStore';
import Link from 'next/link';

const ImoveisPage: React.FC = () => {
  const { searchResults } = useSearchStore();

  return (
    <div>
      <h1>Resultados da Pesquisa</h1>
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
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default ImoveisPage;

