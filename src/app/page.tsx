import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <section className="w-full h-full flex-col flex items-center justify-start gap-16 bg-white">
        <div className="w-auto">
          <ul className="w-auto mt-5 flex items-center text-xl text-center gap-5">
            <li>Sobre</li>
            <li>Experiencias</li>
            <li>Trabalhos</li>
            <li>Contatos</li>
          </ul>
        </div>
        <div id="containerCentral" className="w-full h-3/4 md:w-3/4 md:h-3/4 bg-slate-700 rounded-md p-2 flex flex-col md:flex-row items-center">
          <div id="containerText" className="w-full h-full flex items-center">
            <div
              id="containerText2"
              className="w-full md:w-1/2 p-4 md:p-10 text-left"
            >
              <h1 className="text-3xl font-bold text-teal-50">A Vida na Aldeia</h1>
              <span className="text-sm text-white break-words">
                Em uma aldeia tranquila, cercada por colinas e um rio sereno, a vida seguia em harmonia com a natureza. As manhãs começavam com o canto dos pássaros e o aroma do pão fresco.
              </span>
            </div>
          </div>
          <div
            id="containerlOGO"
            className="w-40 h-40 absolute bottom-5/7 flex md:w-40 md:h-40 md:absolute md:bottom-5/7 md:left-3/4 bg-gray-500 border-8 border-white rounded-full"
          ></div>
          <div
            id="containerButtons"
            className=" w-full h-24 bottom-10 absolute md:w-1/2 md:h-24 md:absolute md:bottom-10 md:left-20 bg-gray-500 border-8 border-white rounded-full"
          ></div>
        </div>
      </section>
    </main>
  );
}
