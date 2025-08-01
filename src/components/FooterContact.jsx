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
          <iframe
            title="Mapa Ubicación"
            className="w-full h-full rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.814872409153!2d-99.13320858509338!3d19.432607986884654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b93d88d3b%3A0xb4a1e5d5ef7b5f91!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1670102032521!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FORMULARIO */}
        <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 flex flex-col justify-center gap-4 shadow-lg">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Dirección: calle Venustiano Carranza N:32
            </h2>
            <p className="text-gray-700 mt-2">📞 2337893465</p>
            <p className="text-gray-700 mt-1">✉️ nombre@gmail.com</p>
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
