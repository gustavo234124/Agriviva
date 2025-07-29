import React, { useState, useEffect } from 'react';

const images = [
  '/public/images/CarouselItemUno.jpeg',
  '/public/images/CarouselItemDos.jpeg',
  '/public/images/CarouselItemTres.jpeg',
  '/public/images/CarouselItemCutro.jpeg',
  '/public/images/CarouselItemCinco.jpeg',
  '/public/images/CarouselItemSeis.jpeg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanza al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Regresa al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
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

      {/* Botón atrás */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75 transition"
      >
        Prev
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75 transition"
      >
        Next
      </button>
    </div>
  );
}
