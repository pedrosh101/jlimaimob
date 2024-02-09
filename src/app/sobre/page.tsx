import Image from "next/image";
import Nos from "../../../public/imoveis/nos.jpg";
import Navbar from "../components/navbar";

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 bg-white text-gray-700">
        <div className="sm:grid grid-cols-2 gap-12 items-center h-screen w-5/6">
          <div className="relative sm:h-4/5 h-2/5 overflow-hidden">
            <Image src={Nos} alt="Imagem" fill className="object-cover p-2" />
          </div>
          <div className="space-y-3 sm:space-y-0">
            <h2 className="text-5xl font-bold sm:mb-6 text-blue-700">
              JLima Imóveis
            </h2>
            <p className="text-lg leading-relaxed ">
              Bem-vindo à JLima Imóveis, sua parceira confiável no
              mercado imobiliário. Com uma trajetória sólida, estamos aqui para tornar seus sonhos imobiliários em
              realidade.<br></br>
              <br></br>
              Fundada com um compromisso inabalável com a excelência e a
              satisfação do cliente, a JLima Imóveis se destaca como uma
              das principais referências no setor. Sob a liderança de
              Jediel de Lima, um renomado corretor com mais de 30 anos de
              experiência, nossa empresa se estabeleceu como uma força confiável
              e respeitável no mercado.<br></br>
              <br></br>

              Na JLima Imóveis, entendemos que comprar, vender ou alugar
              uma propriedade pode ser uma das decisões mais importantes na vida
              de uma pessoa. Por isso, estamos comprometidos em oferecer um
              serviço transparente, ético e profissional em todas as etapas do
              processo. Nosso objetivo é simplificar e tornar a experiência
              imobiliária o mais suave e gratificante possível para nossos
              clientes.<br></br>
              <br></br>
  
              Junte-se a nós na jornada rumo ao seu próximo capítulo
              imobiliário. Estamos ansiosos para servi-lo e ajudá-lo a realizar
              seus sonhos.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
