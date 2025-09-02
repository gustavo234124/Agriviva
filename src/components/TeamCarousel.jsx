import React, { useState, useEffect } from "react";

const styles = {
  wrapper: {
    minHeight: "50vh",
    background: "var(--color-bg-bod)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",  // CAMBIO AQUÍ
    padding: "80px 20px ",
    position: "relative",
    overflowX: "hidden",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: "5%",  // <-- aquí el margin bottom
  },
title: {
  fontSize: "4rem",
  fontWeight: 800,
  textTransform: "uppercase",
  background: "var(--color-text-primary)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text", // para navegadores compatibles
  color: "transparent",
  top: "40px",
  textShadow: "0 0 30px rgba(96, 165, 250, 0.3)",
  backgroundSize: "200% 100%",
  animation: "shine 3s linear infinite",
  marginBottom: "5%",  // <-- aquí el margin bottom
},



  container: {
    width: "100%",
    maxWidth: "1400px",
    height: "500px",
    perspective: "2000px",
    position: "relative",
  },
  track: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },
  navArrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "linear-gradient(135deg, #60a5fa, #e879f9)",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    border: "none",
    fontSize: "1.5rem",
  },
  dotContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "40px",
  },
  dot: (active) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: active
      ? "linear-gradient(135deg, #60a5fa, #e879f9)"
      : "rgba(203, 213, 225, 0.2)",
    transform: active ? "scale(1.2)" : "scale(1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
  cardBase: {
    position: "absolute",
    width: "300px",
    height: "420px",
    borderRadius: "24px",
    overflow: "hidden",
    background: "#1e293b",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    cursor: "pointer",
    transition: "all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px",
    background: "linear-gradient(to top, rgba(15,23,42,0.95), transparent)",
    color: "white",
    transform: "translateY(100%)",
    transition: "transform 0.4s ease",
  },
};

const teamMembers = [
  {
    name: "Emily Kim",
    role: "Founder",
    img: "/images/item1.jpeg",
  },
  {
    name: "Michael Steward",
    role: "Creative Director",
    img: "/images/item2.jpeg",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "/images/item3.jpeg",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "/images/item4.jpeg",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "/images/item5.jpeg",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "/images/item3.jpeg",
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Controles con teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Swipe en móvil
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e) => (touchStartX = e.changedTouches[0].screenX);
    const handleTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        updateCarousel(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  // Posiciones 3D dinámicas
  const getCardStyle = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    let transform = "";
    let opacity = 1;
    let zIndex = 1;
    switch (offset) {
      case 0:
        transform = "translateZ(0) scale(1.15)";
        zIndex = 10;
        break;
      case 1:
        transform = "translateX(200px) rotateY(-8deg) translateZ(-50px) scale(0.95)";
        opacity = 0.8;
        break;
      case 2:
        transform = "translateX(400px) rotateY(-15deg) translateZ(-200px) scale(0.8)";
        opacity = 0.6;
        break;
      case teamMembers.length - 1:
        transform = "translateX(-200px) rotateY(8deg) translateZ(-50px) scale(0.95)";
        opacity = 0.8;
        break;
      case teamMembers.length - 2:
        transform = "translateX(-400px) rotateY(15deg) translateZ(-200px) scale(0.8)";
        opacity = 0.6;
        break;
      default:
        opacity = 0;
        transform = "translateZ(-500px) scale(0)";
    }

    return {
      ...styles.cardBase,
      transform,
      opacity,
      zIndex,
    };
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>AGRIVIVA</h1>
      <div style={styles.container}>
        <button
          style={{ ...styles.navArrow, left: "20px" }}
          onClick={() => updateCarousel(currentIndex - 1)}
        >
          ‹
        </button>

        <div style={styles.track}>
          {teamMembers.map((member, index) => (
            <div key={index} style={getCardStyle(index)}>
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                  transition: "all 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.8)")}
              />
              <div style={styles.cardContent}>
                <h3 style={{ margin: "0 0 5px", fontSize: "1.2rem" }}>{member.name}</h3>
                <p style={{ margin: "0 0 10px", fontSize: "0.9rem", opacity: 0.8 }}>
                  {member.role}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          style={{ ...styles.navArrow, right: "20px" }}
          onClick={() => updateCarousel(currentIndex + 1)}
        >
          ›
        </button>
      </div>

      <div style={styles.dotContainer}>
        {teamMembers.map((_, index) => (
          <div
            key={index}
            style={styles.dot(index === currentIndex)}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
}
