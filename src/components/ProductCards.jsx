import { useState } from "react";

export default function ProductCards() {
  // MAnejador de estado para el modal (abierto o cerrado = null)
  const [openModal, setOpenModal] = useState(null);

  // Datos para card
const cards = [
  { id: 1, title: "Alfa-Desarrollo", text: "Alfa-Desarrollo",  prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#5eb853",pdfFileName:"alfa-desarrollo.pdf",imageFileName:"/images/producto.png",
ingredients: [
  { element: "Nitrógeno (N)", value: "3%" },
  { element: "Fósforo (P2O5)", value: "2%" },
  { element: "Potasio (K2O)", value: "1%" },
  { element: "Calcio (Ca)", value: "0.5%" },
  { element: "Magnesio (Mg)", value: "0.1%" },
  { element: "Ácido ascórbico", value: "5000 ppm" },
  { element: "Extracto de algas", value: "2000 ppm" },
  { element: "L-aminoácidos", value: "2000 ppm" },
  { element: "Ácidos carboxílicos", value: "1000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
  { element: "Níquel (Ni)", value: "50 ppm" },
  { element: "Cobalto (Co)", value: "50 ppm" },
  { element: "Lantano (La)", value: "50 ppm" },
],
},
  { id: 2, title: "Brote-Fuerte", text: "Brote-Fuerte", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#8c5b30",pdfFileName:"brote-fuerte.pdf",imageFileName:"/images/producto.png",
ingredients: [
  { element: "Nitrógeno (N)", value: "5%" },
  { element: "Fósforo (P2O5)", value: "3%" },
  { element: "Potasio (K2O)", value: "1%" },
  { element: "Calcio (Ca)", value: "0.5%" },
  { element: "Magnesio (Mg)", value: "0.1%" },
  { element: "Ácido ascórbico", value: "5000 ppm" },
  { element: "Extracto de algas", value: "2000 ppm" },
  { element: "L-aminoácidos", value: "2000 ppm" },
  { element: "Ácidos carboxílicos", value: "1000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
  { element: "Níquel (Ni)", value: "50 ppm" },
  { element: "Cobalto (Co)", value: "50 ppm" },
  { element: "Lantano (La)", value: "50 ppm" },
],
},
  { id: 3, title: "Verde-Forte", text: "Verde-Forte", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#74c272",pdfFileName:"verde-forte.pdf",imageFileName:"/images/producto.png",
      ingredients: [
  { element: "Nitrógeno (N)", value: "5%" },
  { element: "Fósforo (P2O5)", value: "3%" },
  { element: "Potasio (K2O)", value: "3%" },
  { element: "Calcio (Ca)", value: "3%" },
  { element: "Magnesio (Mg)", value: "1%" },
  { element: "Ácido ascórbico", value: "5000 ppm" },
  { element: "Extracto de algas", value: "4000 ppm" },
  { element: "L-aminoácidos", value: "2000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Hierro (Fe)", value: "1000 ppm" },
  { element: "Vitamina E (Zn)", value: "150 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
  { element: "Níquel (Ni)", value: "50 ppm" },
  { element: "Cobalto (Co)", value: "50 ppm" },
  { element: "Lantano (La)", value: "50 ppm" },
],
},
  { id: 4, title: "Optimus-Vital", text: "Optimus-Vital", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#ed4a26",pdfFileName:"optimus-vital",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Nitrógeno (N)", value: "5%" },
  { element: "Fósforo (P2O5)", value: "3%" },
  { element: "Potasio (K2O)", value: "2%" },
  { element: "Calcio (Ca)", value: "1%" },
  { element: "Magnesio (Mg)", value: "0.5%" },
  { element: "Silicio (Si)", value: "5000 ppm" },
  { element: "Ácido ascórbico", value: "5000 ppm" },
  { element: "Extracto de algas", value: "4000 ppm" },
  { element: "L-aminoácidos", value: "2000 ppm" },
  { element: "Ácidos carboxílicos", value: "1000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Manganeso (Mn)", value: "1000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Hierro (Fe)", value: "1000 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
  { element: "Cobalto (Co)", value: "50 ppm" },
],
},
  { id: 5, title: "Presto-Plus", text: "Presto-Plus", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#d72023",pdfFileName:"presto-plus",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Nitrógeno (N)", value: "3%" },
  { element: "Fósforo (P2O5)", value: "1%" },
  { element: "Potasio (K2O)", value: "3%" },
  { element: "Calcio (Ca)", value: "1.5%" },
  { element: "Magnesio (Mg)", value: "0.5%" },
  { element: "Silicio (Si)", value: "5000 ppm" },
  { element: "Ácido ascórbico", value: "5000 ppm" },
  { element: "Extracto de algas", value: "2000 ppm" },
  { element: "L-aminoácidos", value: "2000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Manganeso (Mn)", value: "1000 ppm" },
  { element: "Vitamina E", value: "150 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
  { element: "Níquel (Ni)", value: "50 ppm" },
  { element: "Lantano (La)", value: "50 ppm" },
],
},
  { id: 6, title: "Brokel-K", text: "Brokel-K", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#2a76b6",pdfFileName:"brokel-k.pdf",imageFileName:"/images/producto.png",
    ingredients: [
  { element: "Nitrógeno (N)", value: "3%" },
  { element: "Potasio (K2O)", value: "10%" },
  { element: "Silicio (Si)", value: "5000 ppm" },
  { element: "Ácido glutámico", value: "5000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Ácido GABA", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Ácido salicílico", value: "2000 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Lantano (La)", value: "50 ppm" },
  { element: "Yodo (I)", value: "2 ppm" },
],
},
  { id: 7, title: "FORTASIL", text: "FORTASIL", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#abadae",pdfFileName:"fortasil.pdf",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Nitrógeno (N)", value: "5%" },
  { element: "Calcio (Ca)", value: "5%" },
  { element: "Silicio (Si)", value: "1.5%" },
  { element: "Ascophyllum nodosum", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Alginato", value: "3000 ppm" },
  { element: "Ácido glutámico", value: "3000 ppm" },
  { element: "Ácido GABA", value: "3000 ppm" },
  { element: "Ácido salicílico", value: "3000 ppm" },
  { element: "Ácidos carboxílicos", value: "3000 ppm" },
  { element: "Glicina betaína", value: "3000 ppm" },
  { element: "Manitol", value: "3000 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Yodo (I)", value: "2 ppm" },
],
},
  { id: 8, title: "Impulso-Floral", text: "Impulso-Floral",  prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#f0569b",pdfFileName:"impulso-floral.pdf",imageFileName:"/images/producto.png",
    ingredients: [
  { element: "Nitrógeno (N)", value: "1.5%" },
  { element: "Fósforo (P2O5)", value: "3%" },
  { element: "Potasio (K2O)", value: "1%" },
  { element: "Calcio (Ca)", value: "0.5%" },
  { element: "Magnesio (Mg)", value: "0.25%" },
  { element: "Manitol", value: "10000 ppm" },
  { element: "Ácido glutámico", value: "10000 ppm" },
  { element: "Ácido GABA", value: "5000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Titanio (Ti)", value: "2000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Citoquininas", value: "150 ppm" },
  { element: "Giberelinas", value: "150 ppm" },
  { element: "Molibdeno (Mo)", value: "50 ppm" },
],
},
  { id: 9, title: "Calibre-Máximo", text: "Calibre-Máximo", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#fece38",pdfFileName:"calibre-maximo.pdf",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Nitrógeno (N)", value: "3%" },
  { element: "Fósforo (P2O5)", value: "3%" },
  { element: "Potasio (K2O)", value: "3%" },
  { element: "Calcio (Ca)", value: "1%" },
  { element: "Magnesio (Mg)", value: "0.5%" },
  { element: "Manitol", value: "10000 ppm" },
  { element: "Ácido glutámico", value: "10000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Ácido GABA", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Titanio (Ti)", value: "2000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Zinc (Zn)", value: "1000 ppm" },
  { element: "Boro (B)", value: "1000 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Citoquininas", value: "150 ppm" },
  { element: "Giberelinas", value: "150 ppm" },
],
},
  { id: 10, title: "Llenado-Brix", text: "Llenado-Brix", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#75c9ba",pdfFileName:"llenado-brix.pdf",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Nitrógeno (N)", value: "2%" },
  { element: "Fósforo (P2O5)", value: "1%" },
  { element: "Potasio (K2O)", value: "5%" },
  { element: "Calcio (Ca)", value: "0.5%" },
  { element: "Manitol", value: "10000 ppm" },
  { element: "Ácido glutámico", value: "10000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Ácido GABA", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Cobre (Cu)", value: "1000 ppm" },
  { element: "Magnesio (Mg)", value: "500 ppm" },
  { element: "Zinc (Zn)", value: "500 ppm" },
  { element: "Boro (B)", value: "500 ppm" },
  { element: "Hierro (Fe)", value: "500 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Giberelinas", value: "150 ppm" },
],
},
  { id: 11, title: "Meta-Ideal", text: "Meta-Ideal", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#888857",pdfFileName:"meta-ideal.pdf",imageFileName:"/images/producto.png",
    ingredients: [
  { element: "Nitrógeno (N)", value: "1%" },
  { element: "Fósforo (P2O5)", value: "1%" },
  { element: "Potasio (K2O)", value: "1%" },
  { element: "Calcio (Ca)", value: "1%" },
  { element: "Manitol", value: "10000 ppm" },
  { element: "Ácido glutámico", value: "10000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Ácido GABA", value: "5000 ppm" },
  { element: "Alginato", value: "5000 ppm" },
  { element: "Vitamina C", value: "5000 ppm" },
  { element: "Magnesio (Mg)", value: "500 ppm" },
  { element: "Manganeso (Mn)", value: "500 ppm" },
  { element: "Zinc (Zn)", value: "500 ppm" },
  { element: "Boro (B)", value: "500 ppm" },
  { element: "Cobre (Cu)", value: "500 ppm" },
  { element: "Hierro (Fe)", value: "500 ppm" },
  { element: "Vitamina B1", value: "200 ppm" },
  { element: "Vitamina B9", value: "200 ppm" },
  { element: "Vitamina E", value: "200 ppm" },
  { element: "Giberelinas", value: "150 ppm" },
  { element: "Molibdeno", value: "50 ppm" },
],
},
  { id: 12, title: "BOOSTER-ROOT", text: "BOOSTER-ROOT", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#533318",pdfFileName:"booster-root.pdf",imageFileName:"/images/producto.png",
    ingredients: [
  { element: "Fósforo (P2O5)", value: "15%" },
  { element: "Calcio (CaO)", value: "10%" },
  { element: "Zinc (Zn)", value: "3%" },
  { element: "Ácido glutámico", value: "5000 ppm" },
  { element: "Folcisteína", value: "5000 ppm" },
  { element: "Glicina betaína", value: "5000 ppm" },
  { element: "Ácido 3-indol acético", value: "350 ppm" },
  { element: "Ácido 3-indolbutírico", value: "250 ppm" },
  { element: "Ácido alfa naftalenacético", value: "250 ppm" },
  { element: "Citocininas", value: "120 ppm" },
  { element: "Giberelinas", value: "120 ppm" },
  { element: "Kinetina", value: "50 ppm" },
],
},
  { id: 13, title: "Control-BF", text: "Control-BF", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#734fa0",pdfFileName:"control-bf.pdf",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Elementos activos (K, Cu, Mn)", value: "12%" },
  { element: "Diluyente", value: "88%" },
  { element: "Totales", value: "100%" },
],
},
  { id: 14, title: "AERO-POLEN", text: "AERO-POLEN", prices: {
      "1L": 50,
      "5L": 150,
      "10L": 300,
      "20L": 600
    }, modalContent: "...", headerColor: "#fcb731",pdfFileName:"aero-polen.pdf",imageFileName:"/images/producto.png",
   ingredients: [
  { element: "Compuesto de aceite esencial de origen vegetal", value: "20.40%" },
  { element: "Acido glutámico", value: "1%" },
  { element: "Molibdeno (Mo)", value: "3,000 ppm" },
  { element: "Titanio (Ti)", value: "1,500 ppm" },
  { element: "Vitamina A", value: "250 ppm" },
  { element: "Vitamina B1", value: "250 ppm" },
  { element: "Vitamina B2", value: "250 ppm" },
  { element: "Vitamina C", value: "250 ppm" },
  { element: "Vitamina B9 (Acido fólico)", value: "250 ppm" },
  { element: "Vitamina E", value: "250 ppm" },
  { element: "Vitamina K", value: "250 ppm" },
],
},
];

const [selectedLiters, setSelectedLiters] = useState("1L");


  return (
    <>
      <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
        <div className="mx-auto max-w-15xl px-6 lg:px-8">
<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
  {cards.map(({ id, text,price, imageFileName,}) => (
   <div
  key={id}
  className="
    mx-auto
    flex max-w-md flex-col items-center
    bg-[var(--color-cards-products)]
    border-2 border-[var(--border-cards-products)]
    rounded-4xl p-6
    gap-y-2 sm:gap-y-3 md:gap-y-4
    min-h-[auto] md:min-h-[165px]
  "
>
  {/* Imagen */}
<img
  src={imageFileName}
  alt={`Imagen de ${text}`}
  className="w-80 h-100 object-contain mb-2"
/>


  {/* Truco para evitar desborde */}
  <p className="invisible">
    Lorem ipsum dolor sit amet, consectetur adipisicing
  </p>

  {/* Texto */}
  <p className="text-3xl text-[var(--color-text-primary)]">{text}</p>

  {/* Precio */}
  <span className="text-3xl text-[var(--color-text-blue-primary)]">{price}</span>

  {/* Botón */}
<button
  onClick={() => {
    setOpenModal(id);
    setSelectedLiters("1L"); // Reinicia el litro seleccionado al abrir modal
  }}
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
  className="bg-white rounded-4xl max-w-3xl mx-4 relative shadow-lg w-full max-h-[80vh] overflow-y-auto"
  onClick={(e) => e.stopPropagation()}
>
            {/* Header dinámico */}
<div
  className="flex justify-between items-center p-4 rounded-tl-4xl rounded-tr-4xl sticky top-0"
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
<div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
  {/* Imagen */}
  <img
    src={cards.find((card) => card.id === openModal)?.imageFileName}
    alt={`Imagen de ${cards.find((card) => card.id === openModal)?.title}`}
    className="w-50 h-60 sm:w-52 sm:h-52 md:w-64 md:h-100 object-contain"
  />

  {/* Detalles */}
  <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 md:ml-20">
    {/* Título */}
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
      Presentación
    </p>

    {/* Botones de litros */}
    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
      {["1L", "5L", "10L", "20L"].map((litro) => (
        <button
          key={litro}
          onClick={() => setSelectedLiters(litro)}
          className={`px-3 py-1 border rounded-lg transition 
            ${selectedLiters === litro ? "bg-green-600 text-white" : "text-gray-700"}`}
        >
          {litro}
        </button>
      ))}
    </div>

    {/* Precio dinámico */}
    <div>
      <p className="text-base sm:text-lg text-gray-600">Precio</p>
      <p className="text-2xl sm:text-3xl font-bold text-green-600">
        ${cards.find((card) => card.id === openModal)?.prices[selectedLiters]}
      </p>
    </div>
{/* Composición */}
<div className="mt-6 text-left">
  <p className="text-lg font-semibold text-gray-800 mb-2">Composición</p>
  <table className="w-full text-gray-700 border-collapse">
    <tbody>
      {cards.find(card => card.id === openModal)?.ingredients.map(({ element, value }, index) => (
        <tr key={index} className="border-b border-gray-300">
          <td className="py-1 pr-4 font-medium">{element}</td>
          <td className="py-1 text-right">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




  </div>
</div>





          </div>
        </div>
      )}
    </>
  );
}
