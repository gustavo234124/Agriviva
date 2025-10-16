import { useEffect, useRef, useState } from "react";

const TablaAnalisis = () => {
  const analisis = [
    {
      tipo: "Fertilidad de Suelos",
      parametros:
        "pH, C.E., Densidad aparente, Textura, M.O., N, P, K, Ca, Mg, Na, SO₄, Fe, Zn, Mn, B, Se, Al, CIC",
    },
    {
      tipo: "Pasta de Saturacion",
      parametros: "pH, C.E., Ca, Mg, K, Na, CO₃, HCO₃, Cl, SO₄, PO₄, NO₃",
    },
    {
      tipo: "Agua de Riego",
      parametros:
        "CE, pH, RAS, Sólidos, Ca, Mg, K, Na, B, CO₃, HCO₃, Cl, SO₄, PO₄, NO₃, Fe, Mn, Cu, Zn, Mo, Co, Ni",
    },
    {
      tipo: "Foliares",
      parametros: "N, P, K, Ca, Mg, Mn, Fe, Cu, Zn, Mo, Ni, Co, Se, SO₄",
    },
    {
      tipo: "Bioles, Lixiviados y Compostas",
      parametros:
        "M.O., Ácidos húmicos, Ácidos fúlvicos, pH, C.E., N, P, K, Ca, Mg, Na, SO₄, Si, Fe, Zn, Mn, Cu, Co, Ni, Mo, B, Se, Al, Coliformes fecales, Salmonella",
    },
    {
      tipo: "Metales",
      parametros: "Pb, Cd, Hg, Cu, Zn, Cr, Cr VI, As",
    },
    {
      tipo: "Fitopatógenos (Foliares y Suelo)",
      parametros: "Bacterias, Hongos",
    },
  ];

  return (
  <div
      className="w-full h-full overflow-y-scroll rounded-3xl scrollbar-visible"
      style={{
        scrollbarWidth: "auto", // Firefox
        scrollbarColor: "#4b5563 #e5e7eb", // color del thumb y del track
      }}
    >      {/* Header */}
      <div className="bg-green-800 text-white py-3 px-2 rounded-t-xl">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-center">
          TIPOS DE ANÁLISIS DISPONIBLES
        </h2>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-b-xl shadow-xl overflow-hidden">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="bg-amber-100 border-b-2 border-gray-800">
              <th className="py-2 px-2 text-left font-bold text-gray-900 border-r-2 border-gray-800">
                Tipo de Análisis
              </th>
              <th className="py-2 px-2 text-left font-bold text-gray-900">
                Parámetros Determinados
              </th>
            </tr>
          </thead>
          <tbody>
            {analisis.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-800 ${
                  index % 2 === 0 ? "bg-amber-50" : "bg-amber-100"
                }`}
              >
                <td className="py-2 px-2 font-bold text-gray-900 border-r-2 border-gray-800">
                  {item.tipo}
                </td>
                <td className="py-2 px-2 text-gray-800">{item.parametros}</td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Barra visible siempre */}
      <style jsx>{`
        .scrollbar-visible::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background-color: #4b5563; /* Gris medio */
          border-radius: 10px;
        }
        .scrollbar-visible::-webkit-scrollbar-track {
          background-color: #e5e7eb; /* Gris claro */
        }
      `}</style>
      </div>
    </div>
  );
};

export default function CardsSection() {
  const flipCardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [readyToAutoFlip, setReadyToAutoFlip] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [inViewport, setInViewport] = useState(false);

  // Detectar cuando entra o sale del viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(true);
            const flipTimer = setTimeout(() => setReadyToAutoFlip(true), 2000);
            return () => clearTimeout(flipTimer);
          } else {
            setInViewport(false);
            setReadyToAutoFlip(false);
            setIsFlipped(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (flipCardRef.current) observer.observe(flipCardRef.current);
    return () => observer.disconnect();
  }, []);

  // Detectar scroll y dirección
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY;
      const scrollingUp = currentScrollY < prevScrollY;

      if (inViewport) {
        if (scrollingDown && readyToAutoFlip && !isFlipped) {
          setIsFlipped(true);
          setReadyToAutoFlip(false);
        }

        if (scrollingUp && isFlipped) {
          setIsFlipped(false);
          setTimeout(() => {
            if (inViewport) setReadyToAutoFlip(true);
          }, 1000);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [readyToAutoFlip, isFlipped, prevScrollY, inViewport]);

  return (
    <div className="w-full flex justify-center items-start bg-[var(--color-bg-body)] px-4 sm:px-6 pt-20 mb-40">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-50 w-full max-w-5xl">
        {/* Card Asistencia Técnica */}
        <div className="w-full sm:w-full md:w-180 h-48 sm:h-72 md:h-120 bg-[var(--color-cards-products)] rounded-4xl shadow-lg flex flex-col items-center justify-center text-center p-6 mx-auto">
          <img
            src="/images/asistenciaTecnica.avif"
            alt="Imagen Asistencia técnica"
            className="max-w-full max-h-40 sm:max-h-60 md:max-h-80 object-contain mb-2 pt-4 rounded-4xl"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
            Asistencia Técnica
          </h2>
        </div>

        {/* Card Laboratorios con flip */}
        <div
          ref={flipCardRef}
          className="relative flip-container w-full sm:w-80 md:w-180 h-48 sm:h-72 md:h-120 mx-auto cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`flip-card-inner ${isFlipped ? "flip-active" : ""}`}>
            {/* Frente */}
            <div className="flip-card-front bg-[var(--color-cards-products)] rounded-4xl shadow-lg flex flex-col items-center justify-center text-center p-6 transition">
              <img
                src="/images/laboratorios.png"
                alt="Imagen Laboratorios"
                className="max-w-full max-h-40 sm:max-h-60 md:max-h-80 h-90 w-100 object-contain mb-2 pt-4 rounded-4xl"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                Laboratorios
              </h2>
            </div>

            {/* Parte trasera con tabla */}
            <div className="flip-card-back bg-[var(--color-cards-products)] rounded-4xl shadow-lg flex items-center justify-center p-4 transition overflow-hidden">
              <TablaAnalisis />
            </div>
          </div>
        </div>
      </div>

      {/* CSS embebido */}
      <style>{`
        .flip-container {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 2rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .flip-card-inner.flip-active {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
