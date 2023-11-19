import { ImovelProp } from "../../@types/main";

const Imovel = ({ title, price }: ImovelProp) => {
  return (
    <>
      <div className="flex min-h-screen bg-slate-300 justify-center">
        <div className="flex flex-col gap-2 mt-12 p-4 text-lg font-nhaas md:text-xl w-3/5 bg-slate-500">
          <h1 className="text-black">{title}</h1>
          <p className="text-black">77 - Central Park South, NYC</p>
          <p className="text-black">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Imovel;
