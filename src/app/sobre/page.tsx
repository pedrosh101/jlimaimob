export default function Sobre({ searchParams }: any) {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <h1 className="flex bg-red-700 text-8xl">{searchParams.nana}</h1>
    </main>
  );
}
