import Bug from "../../assets/Bug.svg";
import Dark from "../../assets/Dark.svg";

export default function MainWindow() {
  return (
    <main className="p-5 bg-blue-950">
      <section className="p-5 bg-gray-600 rounded-md">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Chosen Types
        </h3>
        <div className="flex justify-center">
          <img className="w-24 h-24" src={Bug}></img>
          <img className="w-24 h-24" src={Dark}></img>
        </div>
      </section>
      <section>Types to choose from</section>
    </main>
  );
}
