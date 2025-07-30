import React, { useState, useEffect } from 'react';

const images = [
  '/public/images/CarouselItemUno.jpeg',
  '/public/images/CarouselItemDos.jpeg',
  '/public/images/CarouselItemTres.jpeg',
  '/public/images/CarouselItemCutro.jpeg',
  '/public/images/CarouselItemCinco.jpeg',
  '/public/images/CarouselItemSeis.jpeg',
];

// SVG como componente para poder reutilizarlo y rotarlo
const ArrowSVG = ({ rotate = 0 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="52"
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg m-0 p-0">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Botón atrás con SVG rotado 180° */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded hover:bg-white transition"
  aria-label="Previous slide"
>
  <ArrowSVG rotate={180} />
</button>

<button
  onClick={nextSlide}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded hover:bg-white transition"
  aria-label="Next slide"
>
  <ArrowSVG />
</button>

    </div>
  );
}
