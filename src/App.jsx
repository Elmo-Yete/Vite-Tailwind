import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import CardsData from "./data/CardsData";

function App() {
  return (
    <>
      <main className="flex bg-vite-back h-screen w-screen">
        <article>
          <div className="flex flex-row">
            <div className="ms-[14rem] ">
              <h1 className="text-transparent font-bold text-7xl bg-gradient-to-r from-blue-400  to-purple-600 bg-clip-text">
                Vite
              </h1>
              <p className="text-vite-text font-bold text-5xl w-[25rem] ">
                Next Generation Frontend Tooling
              </p>
              <p className="text-vite-subtext font-medium text-5xl w-21 text-left pt-4">
                Get ready for a development environment that can finally catch
                up with you.
              </p>
            </div>
            <div>
              <img
                src="../public/vite.svg"
                alt="Vite logo"
                className="w-[50rem] h-[21.75rem]"
              />
            </div>
          </div>
          <div className="flex font-bold text-vite-text gap-5 ms-[14rem]">
            <Buttons text="Get Started" />
            <Buttons text="Why Vite?" />
            <Buttons text="View on GitHub" />
          </div>
          <div className="flex gap-3 flex-wrap justify-center pt-10 text-vite-text">
            {CardsData.map((card, index) => {
              return (
                <Cards
                  key={`card-id-${index}`}
                  emoji={card.emoji}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
