import React, { useState } from "react";
import confetti from "canvas-confetti";

export default function FooterContact() {
  // Estado para los campos
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // Estado para mensaje enviado
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispara confeti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Limpiar formulario
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
    });

    // Mostrar mensaje enviado
    setMensajeEnviado(true);

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000); 
  };

  return (
    <footer
      className="relative w-full py-10 px-4 sm:px-8 md:px-[50px] rounded-tr-4xl rounded-tl-4xl"
      style={{
        backgroundColor: "#4e9956",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E\")",
      }}
    >
      <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* MAPA */}
        <div className="flex-1 h-64 md:h-auto">
          {/* <iframe
            title="Mapa Ubicación"
            className="w-full h-full rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.814872409153!2d-99.13320858509338!3d19.432607986884654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b93d88d3b%3A0xb4a1e5d5ef7b5f91!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1670102032521!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
           <div className="bg-white w-full h-105 flex items-center justify-center rounded-3xl shadow-md">
    <img  
      src="/images/logotipoagriviva.png" 
      alt="Logotipo Agriviva" 
      className="max-h-90 object-contain"
    />
  </div>
        </div>

        {/* FORMULARIO */}
        <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 flex flex-col justify-center gap-4 shadow-lg">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Dirección: calle Venustiano Carranza N:32
            </h2>
<p className="text-gray-700 mt-2 flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 201 201"
    className="w-6 h-6"
  >
    <rect width="201" height="201" rx="19" ry="19" fill="#2DC100" />
    <path
      fill="#FEFEFE"
      d="M107 34c37,5 54,23 59,60 0,0 0,0 0,0 0,4 0,8 4,8 4,0 4,-3 4,-6 0,0 0,-1 0,-2 1,-35 -30,-67 -66,-68 -3,0 -9,-2 -9,4 0,4 5,3 8,4z"
    />
    <path
      fill="#FEFEFE"
      d="M114 44c-4,-1 -8,-2 -9,2 -1,6 4,5 8,6 23,5 31,13 35,36 0,1 0,2 0,3 0,2 1,5 5,4 2,0 3,-1 3,-3 0,-1 0,-3 0,-4 0,-22 -19,-42 -42,-44z"
    />
    <path
      fill="#FEFEFE"
      d="M116 61c-2,0 -5,1 -5,3 -2,4 1,5 4,5 9,2 14,7 15,16 0,2 1,3 1,4 1,0 2,1 4,1 0,0 1,-1 1,-1 2,-1 2,-3 2,-5 0,-11 -12,-23 -22,-23z"
    />
    <path
      fill="#FEFEFE"
      d="M164 134c-5,-4 -10,-7 -14,-10 -10,-7 -19,-7 -27,3 -4,6 -9,7 -15,4 -17,-7 -30,-19 -37,-35 -1,-3 -2,-5 -2,-8 -1,-4 1,-8 6,-11 4,-3 8,-6 8,-12 0,-8 -20,-34 -27,-37 -3,-1 -6,-1 -10,0 -18,6 -25,21 -18,38 4,9 9,18 14,26 22,37 54,64 96,81 3,2 6,2 7,3 12,0 26,-11 30,-22 3,-11 -5,-15 -11,-20z"
    />
  </svg>
  +52 333 173 6603
</p>
<p className="text-gray-700 mt-1 flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className="w-6 h-6"
  >
    <path
      fill="#F0C4DB"
      d="M42.29,14.14v8.15l5.71-3.64L42.29,14.14z"
    />
    <path
      fill="#F0C4DB"
      d="M7.72,14.14L2,18.65l5.72,4.15V14.14z"
    />
    <polygon
      fill="#FFFFFF"
      points="42.29,22.29 42.29,2 25,2 7.72,2 7.72,22.3 25,33.32"
    />
    <polygon
      fill="#E9F4BC"
      points="48,18.65 30.19,30.01 48,47.99"
    />
    <polygon
      fill="#E9F4BC"
      points="2,18.65 2,47.99 19.81,30.01"
    />
    <polygon
      fill="#FDE4A1"
      points="30.19,30.01 25,33.32 19.81,30.01 2,47.99 48,47.99"
    />
    <path
      fill="#117D19"
      d="M48.75,18.65c0-0.01-0.01-0.02-0.01-0.02c0-0.01,0-0.01,0-0.02
      c0-0.05-0.02-0.1-0.03-0.15c-0.01-0.05-0.02-0.09-0.04-0.13c-0.01-0.01-0.01-0.03-0.02-0.04
      c-0.01-0.02-0.03-0.04-0.05-0.06c-0.03-0.04-0.06-0.08-0.1-0.12l-5.42-4.28V2
      c0-0.2-0.08-0.4-0.22-0.53c-0.14-0.14-0.33-0.22-0.53-0.22H13.58c-0.41,0-0.75,0.33-0.75,0.75
      c0,0.41,0.34,0.75,0.75,0.75h27.96v19.12L25,32.43L8.47,21.88V2.75h1.11
      c0.41,0,0.75-0.34,0.75-0.75c0-0.42-0.34-0.75-0.75-0.75H7.72
      c-0.2,0-0.39,0.08-0.53,0.22C7.05,1.6,6.97,1.8,6.97,2v11.77l-5.43,4.28
      c-0.04,0.03-0.07,0.08-0.1,0.12c-0.02,0.04-0.03,0.09-0.04,0.13
      c-0.01,0.05-0.03,0.1-0.03,0.15c0,0.02-0.01,0.03-0.01,0.04V48
      c0,0.41,0.34,0.75,0.75,0.75h46c0.31,0,0.58-0.19,0.69-0.46
      c0.04-0.09,0.06-0.19,0.06-0.29V18.65z"
    />
  </svg>
  agriviva.in@gmail.com
</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
             <input
  type="text"
  name="nombre"
  placeholder="Nombre"
  value={formData.nombre}
  onChange={handleChange}
  className="flex-1 p-2 rounded-full bg-gray-100 shadow-md placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            <input
  type="email"
  name="correo"
  placeholder="Correo"
  value={formData.correo}
  onChange={handleChange}
  className="flex-1 p-2 rounded-full bg-gray-100 shadow-md placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            </div>
         <textarea
  name="mensaje"
  placeholder="Escriba su mensaje"
  value={formData.mensaje}
  onChange={handleChange}
  className="w-full p-2 rounded-2xl bg-gray-100 shadow-md placeholder-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
  rows="4"
></textarea>
            <button
              type="submit"
              className="self-end bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-green-700 transition"
            >
              Enviar
            </button>
          </form>

          {/* Mensaje enviado */}
          {mensajeEnviado && (
            <p className="mt-3 text-green-700 font-semibold text-center">
              ¡Mensaje enviado con éxito! 🎉
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
