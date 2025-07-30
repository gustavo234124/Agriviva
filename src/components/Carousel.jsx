import React, { useState, useEffect, useRef } from "react";

const images = [
  "/public/images/CarouselItemUno.jpeg",
  "/public/images/CarouselItemDos.jpeg",
  "/public/images/CarouselItemTres.jpeg",
  "/public/images/CarouselItemCutro.jpeg",
  "/public/images/CarouselItemCinco.jpeg",
  "/public/images/CarouselItemSeis.jpeg",
];

// SVG como componente para poder reutilizarlo y rotarlo
const ArrowSVG = ({ rotate = 0, size = 29 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={(size * 52) / 29}
    viewBox="0 0 29 52"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2908 25.5484L-9.53674e-06 4.25757L4.25755 3.8147e-06L27.6771 23.4196C28.2416 23.9842 28.5587 24.75 28.5587 25.5484C28.5587 26.3468 28.2416 27.1125 27.6771 27.6772L4.25755 51.0967L-9.53674e-06 46.8392L21.2908 25.5484Z"
      fill="black"
    />
  </svg>
);

export default function Carousel() {
  const extendedImages = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [svgSize, setSvgSize] = useState(29);

  // Estados para saber si el botón está activo (para mostrar fondo blanco)
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  useEffect(() => {
    function updateSize() {
      setSvgSize(window.innerWidth < 640 ? 18 : 29);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Función para activar fondo blanco en móviles por 1.5 segundos
  const handleClickPrev = () => {
    if (window.innerWidth < 640) {
      setPrevActive(true);
      setTimeout(() => setPrevActive(false),500);
    }
    prevSlide();
  };

  const handleClickNext = () => {
    if (window.innerWidth < 640) {
      setNextActive(true);
      setTimeout(() => setNextActive(false), 500);
    }
    nextSlide();
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg m-0 p-0">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transitionProperty: isTransitioning ? "transform" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Botón atrás */}
      <button
        onClick={handleClickPrev}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded transition
          ${prevActive ? "bg-white" : ""}
        `}
        aria-label="Previous slide"
      >
        <ArrowSVG rotate={180} size={svgSize} />
      </button>

      {/* Botón siguiente */}
      <button
        onClick={handleClickNext}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded transition
          ${nextActive ? "bg-white" : ""}
        `}
        aria-label="Next slide"
      >
        <ArrowSVG size={svgSize} />
      </button>
    </div>
  );
}
