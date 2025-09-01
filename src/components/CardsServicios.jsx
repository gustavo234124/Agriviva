import { useEffect, useRef, useState } from "react";

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
            // Preparar flip después de 2s
            const flipTimer = setTimeout(() => setReadyToAutoFlip(true), 2000);

            return () => {
              clearTimeout(flipTimer);
            };
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
        // Flip automático al bajar
        if (scrollingDown && readyToAutoFlip && !isFlipped) {
          setIsFlipped(true);
          setReadyToAutoFlip(false);
        }

        // Reset al subir y preparar próximo flip
        if (scrollingUp && isFlipped) {
          setIsFlipped(false);
          // Rehabilitamos el auto flip después de 1s
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
                src="/images/laboratorios.jpg"
                alt="Imagen Laboratorios"
                className="max-w-full max-h-40 sm:max-h-60 md:max-h-80 object-contain mb-2 pt-4 rounded-4xl"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                Laboratorios
              </h2>
            </div>

            {/* Parte trasera */}
            <div className="flip-card-back bg-[var(--color-cards-products)] rounded-4xl shadow-lg flex items-center justify-center  p-6 transition">
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">
               <ul>
  <li className="text-center">
    Análisis de suelo
    <ul>
      <li className="text-black">Medición de pH y nutrientes principales (NPK)</li>
    </ul>
  </li>
  <li className="text-center">
    Evaluación de fertilizantes
    <ul>
      <li className="text-black">Verificación de concentraciones NPK</li>
    </ul>
  </li>
</ul>
              </p>
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
