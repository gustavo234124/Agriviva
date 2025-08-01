import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para animación
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
      // Quita la animación después de 500ms
      setTimeout(() => setScrolled(false), 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "+2331201617"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-btn ${scrolled ? "scroll-animate" : ""}`}
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono SVG de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="40"
          height="40"
          fill="white"
        >
          <path d="M16 .667C7.64.667.667 7.64.667 16c0 2.822.735 5.572 2.14 7.988L.667 31.333l7.547-2.093A15.236 15.236 0 0 0 16 31.333c8.36 0 15.333-6.973 15.333-15.333S24.36.667 16 .667zm0 27.36a12.017 12.017 0 0 1-6.12-1.68l-.44-.26-4.48 1.24 1.2-4.68-.28-.48A11.99 11.99 0 1 1 16 28.027zM10.6 9.2c-.307-.68-.633-.693-.927-.707-.24-.013-.52-.013-.8-.013s-.733.107-1.12.533c-.387.427-1.467 1.44-1.467 3.52 0 2.08 1.507 4.093 1.72 4.373.213.28 2.88 4.6 7.067 6.253 3.493 1.387 4.2 1.12 4.96 1.053.76-.067 2.48-1.013 2.827-1.987.347-.973.347-1.813.24-1.987-.107-.173-.387-.28-.8-.493-.413-.213-2.48-1.227-2.867-1.36-.387-.133-.667-.2-.947.2-.28.4-1.093 1.36-1.333 1.64-.24.28-.493.32-.907.107-.413-.213-1.733-.64-3.307-2.04-1.227-1.093-2.053-2.44-2.293-2.853-.24-.413-.027-.64.187-.853.187-.187.413-.493.627-.733.213-.24.28-.4.413-.68.133-.28.067-.52-.027-.733-.107-.213-.947-2.28-1.333-3.107z" />
        </svg>
      </a>

      {/* CSS embebido */}
      <style>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        /* Animación cuando hay scroll */
        .scroll-animate {
          animation: pulse 0.5s ease;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
