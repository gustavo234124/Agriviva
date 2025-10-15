import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

const ContenidoCursos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const cursos = [
    {
      id: 1,
      titulo: "Modulo 1: Caracterizacion del suelo y muestreo agronomico",
      urlPdf: "/pdfs/hojablanca.pdf",
      imagen: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      detalles: [
        "Tipos y clasificación de suelos agrícolas",
        "Técnicas de muestreo representativo",
        "Profundidad y patrones de recolección",
        "Herramientas necesarias para el muestreo",
        "Preservación y etiquetado de muestras",
        "Interpretación básica de características físicas"
      ]
    },
    {
      id: 2,
      titulo: "Modulo 2: Interpretacion del analisis de suelo y diagnostico nutrimental",
      urlPdf: "/pdfs/hojablanca.pdf",
      imagen: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      detalles: [
        "Lectura de reportes de laboratorio",
        "Parámetros químicos principales (pH, CE, MO)",
        "Macronutrientes: N, P, K, Ca, Mg, S",
        "Micronutrientes esenciales",
        "Identificación de deficiencias y excesos",
        "Correlación análisis-síntomas visuales"
      ]
    },
    {
      id: 3,
      titulo: "Modulo 3: Calculos de requerimientos y exraccion nutrimental",
      urlPdf: "/pdfs/hojablanca.pdf",
      imagen: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      detalles: [
        "Determinación de requerimientos por cultivo",
        "Curvas de extracción nutrimental",
        "Cálculo de demanda según etapa fenológica",
        "Balance entre disponibilidad y necesidad",
        "Factores de eficiencia de fertilizantes",
        "Ajustes según tipo de suelo"
      ]
    },
    {
      id: 4,
      titulo: "Modulo 4: Conversion de nutrienters y formulacion del programa de fertilizacion",
      urlPdf: "/pdfs/hojablanca.pdf",
      imagen: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      detalles: [
        "Conversión de unidades nutrimentales",
        "Selección de fuentes de fertilizantes",
        "Compatibilidad y mezclas físicas",
        "Programación temporal de aplicaciones",
        "Métodos de aplicación (suelo, foliar, fertirriego)",
        "Consideraciones económicas y logísticas"
      ]
    },
    {
      id: 5,
      titulo: "Modulo 5: Formulacion final y ejercicios aplicados",
      urlPdf: "/pdfs/hojablanca.pdf",
      imagen: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
      detalles: [
        "Casos prácticos de cultivos comerciales",
        "Ejercicios de cálculo completo",
        "Ajustes según condiciones específicas",
        "Monitoreo y correcciones durante ciclo",
        "Evaluación de eficiencia del programa",
        "Documentación y registro de aplicaciones"
      ]
    }
  ];

  const abrirModal = (curso) => {
    setCursoSeleccionado(curso);
    setModalAbierto(true);
    document.body.style.overflow = 'hidden'; 
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setCursoSeleccionado(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Del laboratorio al campo: Interpretacion y calculo de fertilizacion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={curso.imagen}
                  alt={curso.titulo}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">
  {curso.titulo}
</h3>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => abrirModal(curso)}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="font-semibold">Ver Más</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Modal */}
      {modalAbierto && cursoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-white/30">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
            <div className="w-full h-120 md:w-2/5 md:h-auto relative rounded-xl md:rounded-none overflow-hidden mx-auto md:mx-0 mt-4 md:mt-0">
               <img
                src="/public/images/logocursos.png"
                alt=""
                class="w-30 h-20 md:w-40 md:h-30 object-cover absolute bg-white"
              />
              <img
                src={cursoSeleccionado.imagen}
                alt={cursoSeleccionado.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="md:w-3/5 p-8 overflow-y-auto flex flex-col">
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

             <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-6 pr-10">
            {cursoSeleccionado.titulo}
            </h2>

              <div className="mb-8 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Contenido del Módulo:
                </h3>
                <ul className="space-y-3">
                  {cursoSeleccionado.detalles.map((detalle, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-lg">{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <a
                  href={cursoSeleccionado.urlPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                  <Eye className="w-5 h-5" />
                  Ver PDF
                </a>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContenidoCursos;