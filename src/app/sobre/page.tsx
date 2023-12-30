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
            <h2 className="text-5xl font-bold sm:mb-6 text-blue-700">JLima Imóveis</h2>
            <p className="text-lg leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus dolor, pulvinar ut fermentum nec, pretium sit amet quam. Fusce elit orci, sollicitudin ultrices nisl non, commodo consectetur neque. Sed odio ex, scelerisque sed lobortis at, tempus eget dolor. Maecenas eget sapien quis urna aliquam ultricies at pulvinar nisi. Maecenas convallis quam magna, sed laoreet libero aliquam semper. Phasellus congue sed orci vitae viverra. Suspendisse odio leo, tristique eget nisi et, dapibus eleifend lacus. Nam ultricies volutpat leo, sit amet elementum nibh tristique ac. Donec pellentesque vehicula sodales.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
