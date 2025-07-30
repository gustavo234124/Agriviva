import { useState } from "react";

export default function ProductCards() {
  // MAnejador de estado para el modal (abierto o cerrado = null)
  const [openModal, setOpenModal] = useState(null);

  // Datos para card
const cards = [
  { id: 1, title: "Alfa-Desarrollo", text: "Alfa-Desarrollo", price: "$50", modalContent: "...", headerColor: "#5eb853",pdfFileName:"alfa-desarrollo.pdf"},
  { id: 2, title: "Brote-Fuerte", text: "Brote-Fuerte", price: "$50", modalContent: "...", headerColor: "#8c5b30",pdfFileName:"brote-fuerte.pdf"},
  { id: 3, title: "Verde-Forte", text: "Verde-Forte", price: "$50", modalContent: "...", headerColor: "#74c272",pdfFileName:"verde-forte.pdf"},
  { id: 4, title: "Optimus-Vital", text: "Optimus-Vital", price: "$50", modalContent: "...", headerColor: "#ed4a26",pdfFileName:"optimus-vital"},
  { id: 5, title: "Presto-Plus", text: "Presto-Plus", price: "$50", modalContent: "...", headerColor: "#d72023",pdfFileName:"presto-plus"},
  { id: 6, title: "Brokel-K", text: "Brokel-K", price: "$50", modalContent: "...", headerColor: "#2a76b6",pdfFileName:"brokel-k.pdf"},
  { id: 7, title: "FORTASIL", text: "FORTASIL", price: "$50", modalContent: "...", headerColor: "#abadae",pdfFileName:"fortasil.pdf"},
  { id: 8, title: "Impulso-Floral", text: "Impulso-Floral", price: "$50", modalContent: "...", headerColor: "#f0569b",pdfFileName:"impulso-floral.pdf"},
  { id: 9, title: "Calibre-Máximo", text: "Calibre-Máximo", price: "$50", modalContent: "...", headerColor: "#fece38",pdfFileName:"calibre-maximo.pdf"},
  { id: 10, title: "Llenado-Brix", text: "Llenado-Brix", price: "$50", modalContent: "...", headerColor: "#75c9ba",pdfFileName:"llenado-brix.pdf"},
  { id: 11, title: "Meta-Ideal", text: "Meta-Ideal", price: "$50", modalContent: "...", headerColor: "#888857",pdfFileName:"meta-ideal.pdf"},
  { id: 12, title: "BOOSTER-ROOT", text: "BOOSTER-ROOT", price: "$50", modalContent: "...", headerColor: "#533318",pdfFileName:"booster-root.pdf"},
  { id: 13, title: "Control-BF", text: "Control-BF", price: "$50", modalContent: "...", headerColor: "#734fa0",pdfFileName:"control-bf.pdf"},
  { id: 14, title: "AERO-POLEN", text: "AERO-POLEN", price: "$50", modalContent: "...", headerColor: "#fcb731",pdfFileName:"aero-polen.pdf"},
];


  return (
    <>
      <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
        <div className="mx-auto max-w-15xl px-6 lg:px-8">
<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
  {cards.map(({ id, text,price }) => (
    <div
      key={id}
      className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-[var(--color-cards-products)] border-2 border-[var(--border-cards-products)] rounded-4xl p-6 h-165"
    >
      {/* Imagen del producto */}
      <img
        src="/images/producto.png"
        alt="Imagen del producto"
        className="w-80 h-100 object-contain mb-2"
      />

        {/* No quitar esya p de abajo por que es un trucazo para que no se desborden ni se deformen las cards de los productos jsjsjsjs */}
<p className="invisible"> 
  Lorem ipsum dolor sit amet, consectetur adipisicing
</p>

      {/* Texto */}
<p className="text-3xl text-[var(--color-text-primary)]">{text}</p>

  <span className="text-3xl text-gray-700">{price}</span> {/* Aquí el precio */}


      {/* Botón */}
      <button
        onClick={() => setOpenModal(id)}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Ver más
      </button>
    </div>
  ))}
</dl>

        </div>
      </div>

      {/* Modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-4xl max-w-3xl mx-4 relative shadow-lg w-full h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header dinámico */}
         <div
  className="flex justify-between items-center p-4 rounded-tl-4xl rounded-tr-4xl"
  style={{ backgroundColor: cards.find(c => c.id === openModal).headerColor }}
>
  <h2 className="text-white font-bold text-base sm:text-lg md:text-xl">
    {cards.find(c => c.id === openModal).title}
  </h2>

  <div className="flex items-center gap-2 sm:gap-4">
    {/* Icono SVG responsivo */}
   <a
  href={`/pdfs/${cards.find(c => c.id === openModal).pdfFileName}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:opacity-80"
  aria-label="Abrir ficha técnica"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    viewBox="0 0 54 68"
    fill="none"
  >
    <path
      d="M33.75 0.255676L54 20.4174V60.741C54 62.5234 53.2888 64.2328 52.023 65.4931C50.7571 66.7535 49.0402 67.4616 47.25 67.4616H6.75C4.95979 67.4616 3.2429 66.7535 1.97703 65.4931C0.711158 64.2328 0 62.5234 0 60.741V6.97626C0 5.19385 0.711158 3.48445 1.97703 2.22409C3.2429 0.963736 4.95979 0.255676 6.75 0.255676H33.75ZM47.25 60.741V23.7777H30.375V6.97626H6.75V60.741H47.25ZM27 57.3807L13.5 43.9395H21.9375V33.8586H32.0625V43.9395H40.5L27 57.3807Z"
      fill="white"
    />
  </svg>
</a>

    {/* Texto responsivo */}
    <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
      Ficha Técnica
    </span>

    <button
      className="text-white text-lg sm:text-xl font-bold"
      onClick={() => setOpenModal(null)}
      aria-label="Cerrar modal"
    >
      &times;
    </button>
  </div>
</div>


            {/* Contenido del modal */}
            <div className="p-8">
              <p>{cards.find((card) => card.id === openModal)?.modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
