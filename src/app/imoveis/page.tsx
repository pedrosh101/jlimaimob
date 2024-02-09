"use client";

import React, { Suspense } from "react";
import Results from "../components/results";
import Navbar from "../components/navbar";

const ImoveisPageWrapper = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black min-h-screen p-8">
        <h1 className="text-2xl">Resultados da Pesquisa</h1>
        <Suspense fallback={<div>Carregando...</div>}>
          <Results />
        </Suspense>
      </div>
    </>
  );
};

export default ImoveisPageWrapper;
