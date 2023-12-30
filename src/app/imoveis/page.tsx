import Navbar from "../components/navbar";

const ImoveisEncontrados = () => {
  return (
    <main className="flex sm:flex-row flex-col  text-black min-h-screen">
      <Navbar />
      <main className="w-full sm:p-12 p-2 bg-orange-50">
        <div className="grid sm:grid-cols-3 sm:gap-8 gap-2">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </main>
    </main>
  );
};

export default ImoveisEncontrados;
