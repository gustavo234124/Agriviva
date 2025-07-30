import { useState } from "react";

export default function ProductCards() {
  // Estado para saber cuál modal está abierta (null = ninguna)
  const [openModal, setOpenModal] = useState(null);

  // Datos de ejemplo para cada card
const cards = [
  { id: 1, title: "Producto 1", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#5eb853" },
  { id: 2, title: "Producto 2", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#8c5b30" },
  { id: 3, title: "Producto 3", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#74c272" },
  { id: 4, title: "Producto 4", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#ed4a26" },
  { id: 5, title: "Producto 5", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#d72023" },
  { id: 6, title: "Producto 6", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#2a76b6" },
  { id: 7, title: "Producto 7", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#abadae" },
  { id: 8, title: "Producto 8", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#f0569b" },
  { id: 9, title: "Producto 9", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#fece38" },
  { id: 10, title: "Producto 10", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#75c9ba" },
  { id: 11, title: "Producto 11", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#888857" },
  { id: 12, title: "Producto 12", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#533318" },
  { id: 13, title: "Producto 13", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#734fa0" },
  { id: 14, title: "Producto 14", text: "Nombre del producto", price: "$50", modalContent: "...", headerColor: "#fcb731" },
];


  return (
    <>
      <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
        <div className="mx-auto max-w-15xl px-6 lg:px-8">
<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
  {cards.map(({ id, text,price }) => (
    <div
      key={id}
      className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-gray-300 border-2 border-black rounded-4xl p-6 h-165"
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
      <p>{text}</p>

  <span className="text-lg text-gray-700">{price}</span> {/* Aquí el precio */}


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
            className="bg-white rounded-lg max-w-lg mx-4 relative shadow-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header dinámico */}
            <div
              className="flex justify-between items-center p-4 rounded-t-lg"
              style={{ backgroundColor: cards.find(c => c.id === openModal).headerColor }}
            >
              <h2 className="text-white font-bold text-lg">
                {cards.find(c => c.id === openModal).title}
              </h2>
              <div className="flex items-center gap-4">
                <button
                  className="text-white hover:opacity-80"
                  aria-label="Descargar ficha técnica"
                  onClick={() => alert("Descargar ficha técnica")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </button>
                <span className="text-white font-semibold">Ficha Técnica</span>
                <button
                  className="text-white text-xl font-bold"
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
