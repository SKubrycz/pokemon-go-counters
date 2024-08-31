export default function MainWindow() {
  return (
    <main className="p-5 bg-sky-600 flex flex-col items-center justify-center">
      <section className="w-full p-5 bg-sky-700 rounded-md">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Chosen Types
        </h3>
        <div className="flex justify-center">Content</div>
      </section>
      <div className="w-10/12 h-1 m-5 bg-slate-200 rounded-sm"></div>
      <section className=" w-full p-5 bg-sky-700 rounded-md">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Types to choose from
        </h3>
      </section>
    </main>
  );
}
