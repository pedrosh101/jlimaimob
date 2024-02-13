import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Aluguel");

  const handleChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    router.push(`/imoveis?tipo=${selectedOption}`);
  };

  return (
    <div className="flex items-center justify-center h-16 space-x-2">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="px-4 rounded bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Aluguel">Aluguel</option>
        <option value="Compra">Compra</option>
      </select>

      <button
        onClick={handleSearch}
        className="px-4 py-2 ml-2 text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Buscar
      </button>
    </div>
  );
}