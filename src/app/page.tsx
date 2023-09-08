import Image from "next/image";
import ProductCard from "./components/productCard";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "url_da_imagem1",
    title: "Sítio na Serra da Mantiqueira",
    price: "R$320.000,00",
    img: "/products/1.jpg",
    slug: "produto-1",
  },
  {
    id: 2,
    image: "url_da_imagem2",
    title: "Imóvel Residencial com edícula",
    price: "R$210.000,00",
    img: "/products/2.jpg",
    slug: "produto-2",
  },
  {
    id: 3,
    image: "url_da_imagem2",
    title: "Imóvel Residencial",
    price: "R$800.000,00",
    img: "/products/3.jpg",
    slug: "produto-3",
  },
  {
    id: 4,
    image: "url_da_imagem2",
    title: "Imóvel Residencial",
    price: "R$380.000,00",
    img: "/products/4.jpg",
    slug: "produto-4",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image src="/main5.jpg" alt="background image" fill />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-gray-200">
              Seu novo lar está aqui{" "}
            </h1>
            <p className="text-3xl mt-2 text-white">
              Experiência em gestão imobiliária
            </p>
            <div className="flex items-center justify-center h-16 space-x-2">
              <select className="px-4 py-2 bg-white text-black border border-l-0 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
                <option value="aluguel">Aluguel</option>
                <option value="compra">Compra</option>
              </select>
              <select className="px-4 py-2 bg-white text-black border border-l-0 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
                <option value="todos">Todos os imóveis</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="chácara">Chácara</option>
                <option value="comercial">Comercial</option>
                <option value="sobrado">Sobrado</option>
              </select>
              <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="flex flex-col justify-center items-center py-28 bg-slate-100">
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Link href={`/produto/${product.slug}`} key={product.id}>
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
