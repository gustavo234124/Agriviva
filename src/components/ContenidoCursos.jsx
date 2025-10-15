import { Download, Eye } from 'lucide-react';

const ContenidoCursos = () => {
  // Array de cursos con información
  const cursos = [
    {
      id: 1,
      titulo: "Introducción a la Agricultura Sostenible",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      urlPdf: "/pdfs/curso-agricultura-sostenible.pdf",
      imagen: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      titulo: "Técnicas de Riego Eficiente",
      descripcion: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      urlPdf: "/pdfs/curso-riego-eficiente.pdf",
      imagen: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      titulo: "Control de Plagas Orgánico",
      descripcion: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      urlPdf: "/pdfs/curso-control-plagas.pdf",
      imagen: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      titulo: "Fertilización Natural del Suelo",
      descripcion: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      urlPdf: "/pdfs/curso-fertilizacion-natural.pdf",
      imagen: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      titulo: "Cultivos Hidropónicos para Principiantes",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
      urlPdf: "/pdfs/curso-hidroponicos.pdf",
      imagen: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descarga nuestros materiales educativos en formato PDF y aprende a tu propio ritmo
          </p>
        </div>

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={curso.imagen}
                  alt={curso.titulo}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {curso.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {curso.descripcion}
                </p>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={curso.urlPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="font-semibold">Ver</span>
                  </a>
                  
                  <a
                    href={curso.urlPdf}
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-semibold">Descargar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContenidoCursos;