import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <nav className="w-full flex justify-start items-center p-3 mb-14 bg-sky-600 shadow-lg">
          <img
            src="pokego-types-logo.png"
            className="w-16 h-16 drop-shadow-lg saturate-150 brightness-110"
          ></img>
          <h1 className="mx-3 font-bold text-2xl drop-shadow-lg">
            Pokemon Go Counters<sup>v2</sup>
          </h1>
        </nav>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
