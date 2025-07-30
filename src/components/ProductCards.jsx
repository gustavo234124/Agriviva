import { useState } from "react";

export default function ProductCards() {
  // Estado para saber cuál modal está abierta (null = ninguna)
  const [openModal, setOpenModal] = useState(null);

  // Datos de ejemplo para cada card (puedes personalizar)
  const cards = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam quod ab illum alias quam corporis molestias ullam, repudiandae eligendi! Dignissimos doloribus quia ratione tempore perspiciatis dolor commodi, quaerat deleniti.",
      title: "Producto 1",
      modalContent: "Aquí va la info detallada del Producto 1",
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed aliquam exercitationem mollitia, est harum vero tempora animi accusamus consequuntur excepturi quam? Fugit culpa sit enim et aspernatur temporibus aliquam.",
      title: "Producto 2",
      modalContent: "Aquí va la info detallada del Producto 2",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, accusamus iure expedita autem id, obcaecati asperiores facere esse doloremque repudiandae nobis vitae? Eos dolores sunt inventore ratione error architecto odit?",
      title: "Producto 3",
      modalContent: "Aquí va la info detallada del Producto 3",
    },
  ];

  return (
    <>
      <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
        <div className="mx-auto max-w-15xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {cards.map(({ id, text, title }) => (
              <div
                key={id}
                className="mx-auto flex max-w-md flex-col gap-y-4 items-center bg-gray-300 border-2 border-black rounded-4xl p-6 h-64"
              >
                <p>{text}</p>
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpenModal(null)} // Cerrar modal al click afuera
        >
          <div
            className="bg-white rounded-lg p-8 max-w-lg mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Evita cerrar modal al hacer click dentro
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl font-bold"
              onClick={() => setOpenModal(null)}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {cards.find((card) => card.id === openModal)?.title}
            </h2>
            <p>{cards.find((card) => card.id === openModal)?.modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
}
