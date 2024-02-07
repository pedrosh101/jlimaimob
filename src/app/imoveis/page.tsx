"use client";

import React, { Suspense } from "react";
import ImoveisPage from "../components/results";

const ImoveisPageWrapper = () => {
  return (
    <div className="bg-gray-400 text-black min-h-screen p-8">
      <h1 className="text-2xl">Resultados da Pesquisa</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <ImoveisPage />
      </Suspense>
    </div>
  );
};

export default ImoveisPageWrapper;


