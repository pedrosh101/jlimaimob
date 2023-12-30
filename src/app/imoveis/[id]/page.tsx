"use client";
import { imoveis } from "../../data/imoveis";
import Image from "next/image";
import Navbar from "../../components/navbar";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = imoveis.find((proj) => proj.id.toString() === params.id);

  return (
    <>
      <Navbar />

      <main className="flex flex-col w-full bg-white min-h-screen text-black sm:py-16">
        {/* imagens */}

        <div className="flex flex-col sm:flex-row">
          <div className="h-96 sm:w-2/5 w-full relative mb-6">
            <Image
              src={proj?.img as string}
              alt="Imagem"
              fill
              className="object-cover p-1"
            />
          </div>
          <div className="grid sm:grid-cols-3 sm:grid-rows-2 sm:w-3/5 sm:h-96">
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="h-full relative mb-6 hidden sm:block">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover p-1"
              />
            </div>
          </div>
          <div className="sm:hidden flex justify-center mb-6">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Ver Fotos
            </button>
          </div>
        </div>

        <div className="bg-gray-200 h-0.5 w-full"></div>

        <section className="flex flex-col sm:flex-row px-1 pt-10 sm:px-96 ">
          {/* coluna da esquerda */}

          <div className="flex flex-col w-1/2">
            <h1 className="text-3xl font-bold mb-2">{proj?.title}</h1>
            <div className="flex space-x-1 mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="mt-1"
              >
                <path d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
              </svg>
              <h2>{proj?.location}</h2>
            </div>

            {/* especificações */}
            <div>
              <h1 className="text-lg">Especificações:</h1>
              <div className="grid grid-cols-2 sm:w-4/5 shadow-lg p-4 gap-2">
                <div className="flex space-x-2">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16M256 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"
                    />
                  </svg>
                  <h1>{proj?.info1}</h1>
                </div>
                <div className="flex space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M4 9a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM4.862 4.276L3.906 6.19a.51.51 0 00.497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 00.497-.731l-.956-1.913A.5.5 0 0010.691 4H5.309a.5.5 0 00-.447.276z" />
                    <path
                      fillRule="evenodd"
                      d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM4.82 3a1.5 1.5 0 00-1.379.91l-.792 1.847a1.8 1.8 0 01-.853.904.807.807 0 00-.43.564L1.03 8.904a1.5 1.5 0 00-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0015 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 00-.43-.563 1.807 1.807 0 01-.853-.904l-.792-1.848A1.5 1.5 0 0011.18 3H4.82z"
                    />
                  </svg>
                  <h1>{proj?.info2}</h1>
                </div>
                <div className="flex space-x-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M4 7 H20 A2 2 0 0 1 22 9 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V9 A2 2 0 0 1 4 7 z" />
                    <path d="M17 2l-5 5-5-5" />
                  </svg>
                  <h1>{proj?.info3}</h1>
                </div>
                <div className="flex space-x-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M9 22h8v-2.5c2.41-1.63 4-4.38 4-7.5V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v8H3c0 3.09 2 6 6 7.5V22m-3.71-8h13.42A7.017 7.017 0 0115 18.33V20h-4v-1.67C9 18 5.86 15.91 5.29 14M15 4h4v8h-4V4m1 1v3h2V5h-2z" />
                  </svg>
                  <h1>{proj?.info4}</h1>
                </div>
              </div>
            </div>

            {/* descrição do imóvel */}
            <div className="sm:w-4/5 pt-6">
              <h1 className="text-lg pb-2">Descrição do Imóvel:</h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                bibendum vel est sit amet imperdiet. Nulla et sem sapien. Mauris
                vitae enim at felis viverra faucibus fermentum non diam. Nam
                feugiat leo magna, non scelerisque neque convallis et.
                Vestibulum dictum ut ex sit amet fermentum. Vestibulum tincidunt
                tempor sem, vel malesuada libero porttitor nec. Proin efficitur,
                elit in sodales egestas, orci purus volutpat quam, nec cursus
                metus arcu vel ligula. Pellentesque velit quam, vestibulum eget
                fringilla non, hendrerit a lectus.
              </h1>
            </div>
          </div>

          {/* coluna direita */}

          <div className="flex flex-col text-lg mt-8 sm:mt-0 shadow-md p-4 w-1/2 h-fit">
            <h1 className="mb-4 text-center">Cód do Imóvel: 4255</h1>
            <div className="bg-gray-200 h-0.5 w-full"></div>
            <div className="flex justify-between px-16 pt-6">
              <h1>Preço</h1>
              <h1 className="font-semibold text-blue-700">R$200.000,00</h1>
            </div>
            <div className="flex text-sm justify-between px-16 pt-4 text-gray-600">
              <h1>Condomínio</h1>
              <h1 className="">R$300,00</h1>
            </div>
            <div className="flex text-sm justify-between px-16 pt-4 text-gray-600">
              <h1>IPTU</h1>
              <h1 className="">R$950,00</h1>
            </div>
            <div className="bg-gray-200 h-0.5 w-full mt-4"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
