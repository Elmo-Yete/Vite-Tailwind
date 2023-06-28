import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import CardsData from "./data/CardsData";

function App() {
  return (
    <>
      <main className=" bg-vite-back h-screen">
        <article className="ms-96 w-[76rem] ">
          <div className="flex px-12 pt-20 pb-12">
            <div>
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
            <div className="flex w-[35rem] h-[21.75rem] ">
              <img
                src="../public/vite.svg"
                alt="Vite logo"
                className="w-100% "
              />
            </div>
          </div>
          <div className="flex font-bold text-vite-text gap-6 ps-12">
            <Buttons text="Get Started" />
            <Buttons text="Why Vite?" />
            <Buttons text="View on GitHub" />
          </div>
          <div className="flex gap-3 flex-wrap justify-center pt-10 text-vite-text w-[96rem] ">
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
