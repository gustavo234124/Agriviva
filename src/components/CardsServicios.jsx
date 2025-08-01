import { useEffect, useRef, useState } from "react";

export default function CardsSection() {
  const flipCardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Intersection Observer para detectar cuando la card entra en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setShowTooltip(true), 3000); // aparece 1 segundo después
          } else {
            setShowTooltip(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (flipCardRef.current) observer.observe(flipCardRef.current);

    return () => {
      if (flipCardRef.current) observer.unobserve(flipCardRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-start bg-[var(--color-bg-body)] px-4 sm:px-6 pt-20">
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
                  src="/images/laboratorios.jpg"
                  alt="Imagen Laboratorios"
                  className="max-w-full max-h-40 sm:max-h-60 md:max-h-80 object-contain mb-2 pt-4 rounded-4xl"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                  Laboratorios
                </h2>
              </div>

              {/* Parte trasera */}
              <div className="flip-card-back bg-[var(--color-cards-products)] rounded-4xl shadow-lg flex items-center justify-center text-center p-6 transition">
                <p className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Contenido detrás de Laboratorios
                </p>
              </div>
            </div>

            {/* Tooltip */}
            {showTooltip && !isFlipped && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-bounce">
                Click aquí
              </div>
            )}
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
    </>
  );
}
