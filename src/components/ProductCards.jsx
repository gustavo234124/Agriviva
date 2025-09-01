import { useState } from "react";

export default function ProductCards() {
    // MAnejador de estado para el modal (abierto o cerrado = null)
    const [openModal, setOpenModal] = useState(null);

    // Datos para card
    const cards = [
        {
            id: 1, title: "Alfa-Desarrollo", text: "Alfa-Desarrollo", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#5eb853", pdfFileName: "alfa-desarrollo.pdf", imageFileName: "/images/alfaDesarrollo.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "3%" },
                { element: "Fósforo (P2O5)", value: "2%" },
                { element: "Potasio (K2O)", value: "1%" },
                { element: "Calcio (Ca)", value: "0.5%" },
                { element: "Magnesio (Mg)", value: "0.1%" },
                { element: "Ácido ascórbico", value: "5000 ppm" },
                { element: "Extracto de algas", value: "2000 ppm" },
                { element: "L-aminoácidos", value: "2000 ppm" },
                { element: "Ácidos carboxílicos", value: "1000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
                { element: "Níquel (Ni)", value: "50 ppm" },
                { element: "Cobalto (Co)", value: "50 ppm" },
                { element: "Lantano (La)", value: "50 ppm" },
            ],
            // NUEVOS CAMPOS
            info: {
                informacion:
                    "ALFA-DESARROLLO: Es un fertilizante orgánico mineral formulado principalmente por los macroelementos que las plantas necesitan para tener un adecuado desarrollo inicial durante su primera etapa fenológica. ALFA-DESARROLLO, cuanta con una mezcla de elementos secundarios y beneficiosos eficazmente quelatados con una solución de aminoácidos libres, vitaminas y ácidoscarboxílicos; los cuales inducirán en la planta el desarrollo de raíces fuertes, brotes, tallos y hojas.",
                beneficios: [
                    "Estimula el desarrollo de raíces fuertes.",
                    "Mejora la absorción de nutrientes.",
                    "Aumenta la resistencia al estrés hídrico."
                ],
                recomendaciones: [
                    "Aplicar durante las primeras etapas de crecimiento.",
                    "Compatible con la mayoría de fertilizantes y pesticidas.",
                    "Realizar prueba de compatibilidad antes de mezclar."
                ]
            }
        },


        {
            id: 2, title: "Brote-Fuerte", text: "Brote-Fuerte", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#8c5b30", pdfFileName: "brote-fuerte.pdf", imageFileName: "/images/broteFuerte.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "5%" },
                { element: "Fósforo (P2O5)", value: "3%" },
                { element: "Potasio (K2O)", value: "1%" },
                { element: "Calcio (Ca)", value: "0.5%" },
                { element: "Magnesio (Mg)", value: "0.1%" },
                { element: "Ácido ascórbico", value: "5000 ppm" },
                { element: "Extracto de algas", value: "2000 ppm" },
                { element: "L-aminoácidos", value: "2000 ppm" },
                { element: "Ácidos carboxílicos", value: "1000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
                { element: "Níquel (Ni)", value: "50 ppm" },
                { element: "Cobalto (Co)", value: "50 ppm" },
                { element: "Lantano (La)", value: "50 ppm" },
            ],
             info: {
                informacion:
                    "BROTE-FUERTE: Es un fertilizante orgánico mineral compuesto principalmente por los macroelementos que las plantas necesitan para tener un adecuado desarrollo inicial durante sus primeras etapas fenológicas. BROTE-FUERTE, cuenta con un complejo de oligoelementos y elementos beneficiosos fuertemente quelatados con una mezcla de ácidos carboxílicos, extractos de algas, vitaminas y aminoácidos libres; los cuales ayudaran a las plántulas a tener un fuerte desarrollo inicial. BROTE-FUERTE, es un excelente fertilizante que participa en el desarrollo del sistema radicular de las plántulas; así, como la generación de tallos, brotes y hojas fuertes.",
                beneficios: [
                    "Promueve la rápida formación y crecimiento de las raíces",
                     "Desarrolla raíces fuertes.",
                     "Ayuda a las raíces y a las plántulas a desarrollarse rápidamente y mejora su resistencia a las bajas temperaturas",
                     "Desempeña una función indispensable en el metabolismo energético.",
                     "Transfiere energía celular, sintetiza ATP forma moléculas de ADN y el ARN",
                     "Promueve el desarrollo de hojas y tallos",
                     "Produce un desarrollo rápido en las fases iniciales de crecimiento",
                     "Incrementa el contenido de proteínas, ácidos nucleicos y clorofila.",
                     "Influye en el crecimiento y da color verde intenso.",
                     "Participa en la síntesis de los aminoácidos.",
                     "Proporciona mayor vigor y resistencia a las enfermedades",
                ],
                recomendaciones: [
                     "Agite el envase, desenrosque la tapa y retire el sello de seguridad",
 		             "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
		             "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
                     "Revuelva y complete el total del volumen de aspersión.",
                ]
            }
        },
        {
            id: 3, title: "Verde-Forte", text: "Verde-Forte", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#74c272", pdfFileName: "verde-forte.pdf", imageFileName: "/images/verdeForte.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "5%" },
                { element: "Fósforo (P2O5)", value: "3%" },
                { element: "Potasio (K2O)", value: "3%" },
                { element: "Calcio (Ca)", value: "3%" },
                { element: "Magnesio (Mg)", value: "1%" },
                { element: "Ácido ascórbico", value: "5000 ppm" },
                { element: "Extracto de algas", value: "4000 ppm" },
                { element: "L-aminoácidos", value: "2000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Hierro (Fe)", value: "1000 ppm" },
                { element: "Vitamina E (Zn)", value: "150 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
                { element: "Níquel (Ni)", value: "50 ppm" },
                { element: "Cobalto (Co)", value: "50 ppm" },
                { element: "Lantano (La)", value: "50 ppm" },
            ],
             info: {
                informacion:
                    "VERDE-FORTE: Es un fertilizante orgánico mineral con acción de bioestimulación destinado a biofortificar e inducir resistencia sistémica durante el desarrollo vegetativo de los cultivos, dándole a la planta calidad sensorial e induciendo en esta elicitores que activan el mecanismo ‘‘priming’’durante su desarrollo, favoreciendo su condición de crecimiento frente a factores bióticos y abióticos.",
               beneficios: [
    "Constituyente de proteínas, ácidos nucleicos y muchas otras sustancias importantes para la planta.",
    "Promueve el desarrollo de hojas y tallos.",
    "Participa en la síntesis de energía en la planta.",
    "Esencial para activar las zonas de desarrollo, especialmente las puntas de las raíces.",
    "Proporciona mayor vigor y resistencia a las enfermedades y estrés.",
    "Esencial en la formación y transferencia de almidón y azúcares.",
    "Regula la apertura y cierre de estomas.",
    "Participa en la formación de la pared celular y la regulación de la permeabilidad de las membranas celulares.",
    "Esencial para mantener la integridad estructural de las plantas."
  ],
                recomendaciones: [
                     "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
 		     "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
		     "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
             "Revuelva y complete el total del volumen de aspersión.",
                ]
            }
        },
        {
            id: 4, title: "Optimus-Vital", text: "Optimus-Vital", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#ed4a26", pdfFileName: "optimus-vital", imageFileName: "/images/optimusVital.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "5%" },
                { element: "Fósforo (P2O5)", value: "3%" },
                { element: "Potasio (K2O)", value: "2%" },
                { element: "Calcio (Ca)", value: "1%" },
                { element: "Magnesio (Mg)", value: "0.5%" },
                { element: "Silicio (Si)", value: "5000 ppm" },
                { element: "Ácido ascórbico", value: "5000 ppm" },
                { element: "Extracto de algas", value: "4000 ppm" },
                { element: "L-aminoácidos", value: "2000 ppm" },
                { element: "Ácidos carboxílicos", value: "1000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Manganeso (Mn)", value: "1000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Hierro (Fe)", value: "1000 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
                { element: "Cobalto (Co)", value: "50 ppm" },
            ],
            info: {
  informacion:
    "OPTIMUS-VITAL: Es un fertilizante orgánico mineral compuesto por elementos esenciales y beneficiosos quelatados con una solución de aminoácidos libres, ácidos carboxílicos y algas marinas. Es un fertilizante que aporta a las plantas los elementos que estas necesitan para su desarrollo integral, ideal para ser aplicado en todas las etapas fenológicas del cultivo. Participa en el crecimiento de la planta, aumenta su biomasa con el brote de raíces nuevas, tallos, hojas, yemas, meristemos, botones florales, flores y frutos. Además, bioestimula a la planta induciendo en ella respuestas adaptativas frente a factores bióticos y abióticos.",

  beneficios: [
    "Participa en la formación de estructuras celulares.",
    "Da aumento en el número de proteínas y clorofila; dando coloración a la planta y aumentando su tasa fotosintética.",
    "Aumenta el contenido de vitaminas y aminoácidos esenciales en la planta.",
    "Promueve el desarrollo de raíces, tallos, brotes, flores y frutos; aumentando la calidad y el rendimiento de los cultivos.",
    "Es un constituyente de proteínas, ácidos nucleicos y muchas otras sustancias importantes.",
    "Participa en el metabolismo energético de la planta; manteniéndola vigorosa durante las diferentes etapas fenológicas.",
    "Desempeña un papel importante en el proceso de la fotosíntesis y respiración de la planta.",
    "Mejora la calidad de frutas y granos.",
    "Proporciona mayor vigor y resistencia a las enfermedades.",
    "Regula las condiciones de agua dentro de las células de la planta y las pérdidas de agua por transpiración.",
    "Regula la apertura y cierre de estomas.",
    "Participa en el transporte de azúcares y la lignificación de la pared celular.",
    "Interviene en la translocación de azúcares.",
    "Interviene en la síntesis de ácidos nucleicos y fitohormonas."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 5, title: "Presto-Plus", text: "Presto-Plus", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#d72023", pdfFileName: "presto-plus", imageFileName: "/images/prestoPlus.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "3%" },
                { element: "Fósforo (P2O5)", value: "1%" },
                { element: "Potasio (K2O)", value: "3%" },
                { element: "Calcio (Ca)", value: "1.5%" },
                { element: "Magnesio (Mg)", value: "0.5%" },
                { element: "Silicio (Si)", value: "5000 ppm" },
                { element: "Ácido ascórbico", value: "5000 ppm" },
                { element: "Extracto de algas", value: "2000 ppm" },
                { element: "L-aminoácidos", value: "2000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Manganeso (Mn)", value: "1000 ppm" },
                { element: "Vitamina E", value: "150 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
                { element: "Níquel (Ni)", value: "50 ppm" },
                { element: "Lantano (La)", value: "50 ppm" },
            ],
             info: {
  informacion: `PRESTO-PLUS: Es un fertilizante orgánico mineral formulado por elementos primarios,
secundarios, oligoelementos y elementos beneficiosos; quelatados con un compuesto de aminoácidos
libres, extracto de algas marinas y una mezcla rica en vitaminas. Es un fertilizante tecnológicamente
diseñado para corregir las deficiencias nutricionales de la planta obteniendo una respuesta rápida;
contribuyendo a la nutrición inmediata del cultivo, aumentando su productividad, biofortificando y
bioestimulando a la planta para un mayor desarrollo de raíces, tallos, brotes, hojas, flores, frutos y
granos. Además, induce respuestas adaptativas en la plata frente a factores bióticos y abióticos.`,

  beneficios: [
    "Promueve el desarrollo de las raíces.",
    "Activa las de zonas desarrollo, especialmente las puntas de las raíces.",
    "Contribuye en la regulación del flujo de nutrientes.",
    "Participa en la formación de la pared celular, la regulación de la permeabilidad de las membranas celulares.",
    "Es esencial para mantener la integridad estructural de las plantas.",
    "Sintetiza proteínas y activa las hormonas vegetales.",
    "Ayuda a activar varios sistemas de enzimas.",
    "Produce un desarrollo rápido en las fases iniciales de crecimiento.",
    "Promueve el desarrollo de hojas y tallos.",
    "Componente esencial de los aminoácidos; los cuales forman proteínas.",
    "Da defensa contra patógenos.",
    "Estimula la formación de semillas.",
    "Ayuda a desarrollar enzimas y vitaminas.",
    "Promueve la absorción de otros nutrientes.",
    "Participa en el transporte de azúcares.",
    "Asegura la integridad y resistencia de las paredes celulares.",
    "Regula la respiración.",
    "Favorece la floración.",
    "Llena granos y engorda frutos."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 6, title: "Brokel-K", text: "Brokel-K", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#2a76b6", pdfFileName: "brokel-k.pdf", imageFileName: "/images/brokelK.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "3%" },
                { element: "Potasio (K2O)", value: "10%" },
                { element: "Silicio (Si)", value: "5000 ppm" },
                { element: "Ácido glutámico", value: "5000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Ácido GABA", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Ácido salicílico", value: "2000 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Lantano (La)", value: "50 ppm" },
                { element: "Yodo (I)", value: "2 ppm" },
            ],
           info: {
  informacion: `Brokel-K: Es un fertilizante orgánico mineral formulado con una concentración rica en potasio (K+)
que tiene un poderoso efecto protector en la planta frente a los factores bióticos y abióticos. Brokel-K, cuenta con un complejo nutricional de aminoácidos libres, vitaminas y elementos beneficiosos que
inducen en la planta la activación de elicitores para que estas tengan respuestas adaptativas ante los
diferentes tipos de estreses; creando en ellas resiliencia ante fenómenos meteorológicos extremos,
sequía, salinidad, viento, altas y bajas temperaturas, entre otros.`,

  beneficios: [
    "Es un ESCUDO PROTECTOR de la planta ante los distintos tipos de estreses.",
    "Proporciona mayor vigor y resistencia a las enfermedades.",
    "Mejora el estado hídrico.",
    "Disminuye la tasa de transpiración en la planta.",
    "Aumenta la cantidad de osmolitos.",
    "Aumenta la cantidad de metabolitos antioxidantes.",
    "Induce metabolitos y proteínas de defensa contra bacterias, hongos y virus.",
    "Es esencial en la formación y transferencia de almidón y azúcares.",
    "Actúa como acelerador de la acción de las enzimas.",
    "Regula la apertura y cierre de estomas.",
    "Sintetiza proteínas y carbohidratos.",
    "Da calidad de los frutos y semillas.",
    "Aumenta grados brix.",
    "Además de influir en la calidad de los frutos al afectar su sabor, tamaño, color, textura y contenido de azúcares, contribuye a la acumulación de azúcares en los frutos, lo que mejora su sabor y valor comercial.",
    "Ayuda a la planta a resistir los ataques de enfermedades.",
    "Mejora la resistencia de la planta a las heladas.",
    "Aumenta el rendimiento de los cultivos."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 7, title: "FORTASIL", text: "FORTASIL", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#abadae", pdfFileName: "fortasil.pdf", imageFileName: "/images/fortrasil.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "5%" },
                { element: "Calcio (Ca)", value: "5%" },
                { element: "Silicio (Si)", value: "1.5%" },
                { element: "Ascophyllum nodosum", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Alginato", value: "3000 ppm" },
                { element: "Ácido glutámico", value: "3000 ppm" },
                { element: "Ácido GABA", value: "3000 ppm" },
                { element: "Ácido salicílico", value: "3000 ppm" },
                { element: "Ácidos carboxílicos", value: "3000 ppm" },
                { element: "Glicina betaína", value: "3000 ppm" },
                { element: "Manitol", value: "3000 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Yodo (I)", value: "2 ppm" },
            ],
            info: {
  informacion: `FORTASIL: Es un fertilizante orgánico mineral cuyos bioelementos principales son Nitrógeno (N),
Calcio (Ca) y Silicio (Si), que van poderosamente acompañados con una mezcla de oligómeros;
ácidos carboxílicos, ácidos orgánicos, ácido salicílico, extractos de algas y vitamina C. FORTASIL
induce la generación de antioxidantes en las plantas protegiendo sus células de los daños causados por
los radicales libres. FORTASIL induce la generación de elicitores en la planta lo que ayuda a reducir
el daño causado por enfermedades, plagas y factores abióticos.`,

  beneficios: [
    "Participa en el desarrollo de todas las etapas fenológicas de la planta.",
    "Participa en la estructura de la pared celular.",
    "Es un mensajero secundario en una variedad de vías de transducción de señales de estrés, incluyendo sequía, salinidad, frío, calor y estrés por toxicidad por metales pesados.",
    "Regula varios aspectos en la vida de la planta, que abarca el crecimiento, el desarrollo y la inmunidad.",
    "Cumple un papel importante en el equilibrio entre los mecanismos de crecimiento y defensa.",
    "Tras el ataque y la infección del patógeno, FORTASIL desencadena una resistencia adquirida localizada o sistémica en la que la planta adquiere una inmunidad duradera.",
    "FORTASIL juega un papel importante en la inducción de la defensa de las plantas contra una variedad de estreses bióticos y abióticos.",
    "Participa en la provocación de respuestas de estrés abiótico como la salinidad, los metales pesados, la sequía, el frío, el calor y el estrés UV.",
    "Regula varios procesos fisiológicos."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 8, title: "Impulso-Floral", text: "Impulso-Floral", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#f0569b", pdfFileName: "impulso-floral.pdf", imageFileName: "/images/inpulsoFloral.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "1.5%" },
                { element: "Fósforo (P2O5)", value: "3%" },
                { element: "Potasio (K2O)", value: "1%" },
                { element: "Calcio (Ca)", value: "0.5%" },
                { element: "Magnesio (Mg)", value: "0.25%" },
                { element: "Manitol", value: "10000 ppm" },
                { element: "Ácido glutámico", value: "10000 ppm" },
                { element: "Ácido GABA", value: "5000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Titanio (Ti)", value: "2000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Citoquininas", value: "150 ppm" },
                { element: "Giberelinas", value: "150 ppm" },
                { element: "Molibdeno (Mo)", value: "50 ppm" },
            ],
            info: {
  informacion: `Impulso-Floral: Es un fertilizante orgánico mineral formulado principalmente de elementos secundarios, oligoelementos y titanio; que ejercen en la planta un poderoso estímulo induciéndola a aumentar el número de brotes florales. Impulso-Floral cuenta con un complejo de vitaminas y aminoácidos específicos responsables de aumentar los recorridos florales en los tallos, incrementando mayor número de cargadores, botones y flores; repercutiendo en el rendimiento y calidad de los cultivos.`,

  beneficios: [
    "Interviene en la floración y cuajado de futuros frutos.",
    "Favorece la floración y ayuda en la formación de la semilla.",
    "Incrementa el número de botones florales.",
    "Aumenta el número de flores.",
    "Previene aborto de flores.",
    "Previene aborto de frutos cuajados.",
    "aumenta el numero de yemas.",
    "Mejora la polinización de yemas.",
    "Aumenta granos de polen en germinación.",
    "Da mayor crecimiento del tubo polínico.",
    "Mejora la receptividad del estigma.",
    "Da mejor adhesión del polen al estigma y germinación del polen en el estigma.",
    "Aumenta grados brix en la fruta.",
    "Mejora la calidad de la fruta.",
    "Participa en el transporte y azúcares.",
    "Interviene en la transolocación de azúcares.",
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 9, title: "Calibre-Máximo", text: "Calibre-Máximo", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#fece38", pdfFileName: "calibre-maximo.pdf", imageFileName: "/images/calibreMaximo.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "3%" },
                { element: "Fósforo (P2O5)", value: "3%" },
                { element: "Potasio (K2O)", value: "3%" },
                { element: "Calcio (Ca)", value: "1%" },
                { element: "Magnesio (Mg)", value: "0.5%" },
                { element: "Manitol", value: "10000 ppm" },
                { element: "Ácido glutámico", value: "10000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Ácido GABA", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Titanio (Ti)", value: "2000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Zinc (Zn)", value: "1000 ppm" },
                { element: "Boro (B)", value: "1000 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Citoquininas", value: "150 ppm" },
                { element: "Giberelinas", value: "150 ppm" },
            ],
         info: {
  informacion: `CALIBRE-MÁXIMO: Es un fertilizante orgánico mineral formulado con un balance nutricional
rico en N-P-K, poderosamente quelatados con aminoácidos específicos. CALIBRE-MÁXIMO,
cuenta con una tecnología exclusiva para incrementar el calibre y llenado de los frutos en desarrollo;
cuenta con citoquininas y giberelinas, las cuales incrementan significativamente el peso y desarrollo
de los frutos. CALIBRE-MÁXIMO va acompañado con Titanio, un elemento beneficioso clave y
fundamental para el desarrollo de los frutos; juntamente con un complejo vitamínico que a su vez
incrementará el rendimiento y calidad de los frutos.`,

  beneficios: [
    "Interviene poderosamente en el desarrollo de los frutos.",
    "Biofortifica las paredes celulares de los frutos evitando su deshidratación.",
    "Mantiene la turgencia y presión osmótica de la planta durante la etapa de llenado de frutos y granos asegurando su óptimo desarrollo.",
    "Efectúa de igual forma el amarre eficaz de aquellos frutos en cuajado.",
    "Incrementa el contenido nutricional en frutos y semillas, aumentando su peso y tamaño.",
    "Incrementa colores y grados brix en los frutos.",
    "Participa en el transporte de azúcares.",
    "Interviene en la translocación de azúcares."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 10, title: "Llenado-Brix", text: "Llenado-Brix", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#75c9ba", pdfFileName: "llenado-brix.pdf", imageFileName: "/images/llenadoBrix.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "2%" },
                { element: "Fósforo (P2O5)", value: "1%" },
                { element: "Potasio (K2O)", value: "5%" },
                { element: "Calcio (Ca)", value: "0.5%" },
                { element: "Manitol", value: "10000 ppm" },
                { element: "Ácido glutámico", value: "10000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Ácido GABA", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Cobre (Cu)", value: "1000 ppm" },
                { element: "Magnesio (Mg)", value: "500 ppm" },
                { element: "Zinc (Zn)", value: "500 ppm" },
                { element: "Boro (B)", value: "500 ppm" },
                { element: "Hierro (Fe)", value: "500 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Giberelinas", value: "150 ppm" },
            ],
           info: {
  informacion: `LLENADO-BRIX: Es un fertilizante orgánico mineral formulado con una concentración rica en
potasio (K+), que va acomplejado con tres aminoácidos específicos para el incremento de azúcares
en granos y frutos, incrementando su contenido significativamente en grados brix. LLENADO-BRIX
cuenta con un conjunto de oligoelementos y un complejo vitamínico; los cuales incrementan el peso
y calibre en frutos y granos.`,

  beneficios: [
    "Incremento de grados brix.",
    "Participa en el transporte de azúcares.",
    "Interviene en la translocación de azúcares.",
    "Incrementa el peso y calibre en frutos y granos.",
    "Incrementa el rendimiento y calidad de los frutos y semillas.",
    "Da vigor a la planta durante la maduración de sus frutos."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 11, title: "Meta-Ideal", text: "Meta-Ideal", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#888857", pdfFileName: "meta-ideal.pdf", imageFileName: "/images/metaIdeal.png",
            ingredients: [
                { element: "Nitrógeno (N)", value: "1%" },
                { element: "Fósforo (P2O5)", value: "1%" },
                { element: "Potasio (K2O)", value: "1%" },
                { element: "Calcio (Ca)", value: "1%" },
                { element: "Manitol", value: "10000 ppm" },
                { element: "Ácido glutámico", value: "10000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Ácido GABA", value: "5000 ppm" },
                { element: "Alginato", value: "5000 ppm" },
                { element: "Vitamina C", value: "5000 ppm" },
                { element: "Magnesio (Mg)", value: "500 ppm" },
                { element: "Manganeso (Mn)", value: "500 ppm" },
                { element: "Zinc (Zn)", value: "500 ppm" },
                { element: "Boro (B)", value: "500 ppm" },
                { element: "Cobre (Cu)", value: "500 ppm" },
                { element: "Hierro (Fe)", value: "500 ppm" },
                { element: "Vitamina B1", value: "200 ppm" },
                { element: "Vitamina B9", value: "200 ppm" },
                { element: "Vitamina E", value: "200 ppm" },
                { element: "Giberelinas", value: "150 ppm" },
                { element: "Molibdeno", value: "50 ppm" },
            ],
            info: {
  informacion: `META-IDEAL: Es un fertilizante orgánico mineral formulado con un balance nutricional rico en N-P-K + Ca, juntamente acompañados con oligoelementos y aminoácidos específicos que los quelatan poderosamente. META-IDEAL cuenta con una tecnología diseñada específicamente para terminar de aumentar el calibre en los frutos y granos; y posteriormente acelerar su maduración. META-IDEAL cuenta con un complejo de vitaminas y extractos de algas que protegen a los frutos de la radiación UV e incrementan su tamaño y valor nutritivo.`,

  beneficios: [
    "Incrementa el contenido nutricional en frutos y semillas, aumentando su peso y tamaño.",
    "Incrementa colores y grados brix en los frutos.",
    "Participa en el transporte de azúcares.",
    "Terminado de llenado en granos y frutos.",
    "Acelera la maduración."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 12, title: "BOOSTER-ROOT", text: "BOOSTER-ROOT", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#533318", pdfFileName: "booster-root.pdf", imageFileName: "/images/boosterRoot.png",
            ingredients: [
                { element: "Fósforo (P2O5)", value: "15%" },
                { element: "Calcio (CaO)", value: "10%" },
                { element: "Zinc (Zn)", value: "3%" },
                { element: "Ácido glutámico", value: "5000 ppm" },
                { element: "Folcisteína", value: "5000 ppm" },
                { element: "Glicina betaína", value: "5000 ppm" },
                { element: "Ácido 3-indol acético", value: "350 ppm" },
                { element: "Ácido 3-indolbutírico", value: "250 ppm" },
                { element: "Ácido alfa naftalenacético", value: "250 ppm" },
                { element: "Citocininas", value: "120 ppm" },
                { element: "Giberelinas", value: "120 ppm" },
                { element: "Kinetina", value: "50 ppm" },
            ],
            info: {
  informacion: `BOOSTER-ROOT: Es un poderoso enraizador formulado específicamente para estimular e inducir en las platas la formación de raíces primarias, raíces secundarias y pelos absorbentes durante las primeras etapas fenológicas. BOOSTER-ROOT, cuenta con una tecnología específica, en donde el Fósforo (P2O5), Calcio (CaO) y Zinc, juegan un papel crucial en el desarrollo del sistema radicular. BOOSTER-ROOT, cuenta con un consorcio hormonal de auxinas, citocininas y giberelinas; precursores esenciales en la formación de raíces.`,

  beneficios: [
    "Incrementa y estimula la biomasa del sistema radicular.",
    "Incrementa la formación de pelos absorbentes.",
    "Estimula a las plantas a tener un adecuado desarrollo inicial.",
    "Genera el desarrollo de raíces fuertes y sanas.",
    "Incrementa la eficacia del uso del agua.",
    "Activa las zonas de desarrollo, especialmente las puntas de las raíces.",
    "Tiene participación directa con la síntesis del ácido indolacético.",
    "Propicia el desarrollo vegetal, estimulando el crecimiento de la planta.",
    "Ayuda a reducir el estrés de trasplante.",
    "Propicia un adecuado anclaje en la planta.",
    "Incrementa el rendimiento en los cultivos."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 13, title: "Control-BF", text: "Control-BF", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#734fa0", pdfFileName: "control-bf.pdf", imageFileName: "/images/producto.png",
            ingredients: [
                { element: "Elementos activos (K, Cu, Mn)", value: "12%" },
                { element: "Diluyente", value: "88%" },
                { element: "Totales", value: "100%" },
            ],
            info: {
  informacion: `CONTROL B-F: Es un Bactericida-Fungicida orgánico mineral, que cuenta con una tecnología diseñada que le permite actuar como un agente oxidante sobre los patógenos que dañan los cultivos, destruyendo sus estructuras celulares y alterando su ADN. CONTROL B-F es un Bactericida-Fungicida formulado para ser aplicado en agricultura orgánica y convencional. CONTROL B-F actúa inhibiendo la germinación de esporas de hongos y bacterias fitopágenos.`,

  beneficios: [""],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
        {
            id: 14, title: "AERO-POLEN", text: "AERO-POLEN", price: "$50", prices: {
                "1L": 50,
                "5L": 150,
                "10L": 300,
                "20L": 600
            }, modalContent: "...", headerColor: "#fcb731", pdfFileName: "aero-polen.pdf", imageFileName: "/images/aeroPolen.png",
            ingredients: [
                { element: "Compuesto de aceite esencial de origen vegetal", value: "20.40%" },
                { element: "Acido glutámico", value: "1%" },
                { element: "Molibdeno (Mo)", value: "3,000 ppm" },
                { element: "Titanio (Ti)", value: "1,500 ppm" },
                { element: "Vitamina A", value: "250 ppm" },
                { element: "Vitamina B1", value: "250 ppm" },
                { element: "Vitamina B2", value: "250 ppm" },
                { element: "Vitamina C", value: "250 ppm" },
                { element: "Vitamina B9 (Acido fólico)", value: "250 ppm" },
                { element: "Vitamina E", value: "250 ppm" },
                { element: "Vitamina K", value: "250 ppm" },
            ],
            info: {
  informacion: `AERO-POLEN: Es un potente atrayente de insectos polinizadores libre de feromonas, cuenta con una formulación a base compuestos de aceite esencial de origen vegetal. AERO-POLEN, cuanta con una tecnología innovadora, en donde el Titanio (Ti) y el Ácido glutámico; ejercen poderosos impulsos en la atracción de insectos polinizadores, participando también, en el desarrollo floral, la fecundación, el cuajado de los frutos y en su maduración. AERO-POLEN, va eficazmente acomplejado con un consorcio vitamínico, que repercutirá en altos rendimientos.`,

  beneficios: [
    "Es un atrayente eficaz de abejas, abejorros y una amplia gama de insectos polinizadores.",
    "Instala fauna benéfica, efectuando visitas efectivas.",
    "Mejora la autopolinización espontánea de la flor.",
    "Previene aborto de frutos.",
    "Previene caída prematura de flores.",
    "Aumenta el número de flores.",
    "Aumenta el diámetro de los frutos.",
    "Aumenta el peso en frutos.",
    "Aumenta el contenido de pigmentos en flores.",
    "Aumenta el contenido de antocianinas en flores y frutos.",
    "Interviene en la floración y cuajado de futuros frutos.",
    "Aumenta granos de polen en germinación.",
    "Incrementa el crecimiento del tubo polínico.",
    "Mejor viabilidad del polen y capacidad de germinación.",
    "Mejora la receptividad del estigma.",
    "Mejora la adhesión del polen al estigma y germinación del polen en el estigma.",
    "Da mejor número de tubos polínicos que crecen a través del pistilo y llegan al ovario.",
    "Incrementa un mayor número de semillas, afectando positivamente el peso, tamaño y uniformidad de la fruta.",
    "Da aumento de la producción del exudado que cubre el estigma logrando mejor adhesión de polen a la superficie del estigma.",
    "Las semillas producen hormonas: auxinas y giberelinas, que afectan el peso, tamaño y uniformidad del fruto.",
    "Aumenta sólidos solubles, vitamina C y polifenoles en la fruta.",
    "Aumenta grados brix en la fruta de arándano.",
    "Aumenta el contenido de licopeno, peso y rendimiento en el fruto.",
    "Aumenta número de yemas.",
    "Mejora la calidad de la fruta."
  ],

  recomendaciones: [
    "Agite el envase, desenrosque la tapa y retire el sello de seguridad.",
    "Mida la dosis a aplicar en una probeta graduada y vierta en una cubeta para premezcla.",
    "Vierta el contenido de la cubeta en el tanque de la aspersora conteniendo la mitad del volumen de aspersión.",
    "Revuelva y complete el total del volumen de aspersión."
  ]
}

        },
    ];

    const [selectedLiters, setSelectedLiters] = useState("1L");

    const [activeTab, setActiveTab] = useState("Información");


    return (
        <>
            <div className="bg-[var(--color-bg-body)] py-24 sm:py-32">
                <div className="mx-auto max-w-15xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {cards.map(({ id, text, price, imageFileName, }) => (
                            <div
                                key={id}
                                className="
    mx-auto
    flex max-w-md flex-col items-center
    bg-[var(--color-cards-products)]
    border-2 border-[var(--border-cards-products)]
    rounded-4xl p-6
    gap-y-2 sm:gap-y-3 md:gap-y-4
    min-h-[auto] md:min-h-[165px]
  "
                            >
                                {/* Imagen */}
                                <img
                                    src={imageFileName}
                                    alt={`Imagen de ${text}`}
                                    className="w-80 h-100 object-contain mb-2"
                                />


                                {/* Truco para evitar desborde */}
                                <p className="invisible">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                </p>

                                {/* Texto */}
                                <p className="text-3xl text-[var(--color-text-primary)]">{text}</p>

                                {/* Precio */}
                                <span className="text-3xl text-[var(--color-text-blue-primary)]">{price}</span>

                                {/* Botón */}
                                <button
                                    onClick={() => {
                                        setOpenModal(id);
                                        setSelectedLiters("1L"); // Reinicia el litro seleccionado al abrir modal
                                    }}
                                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                                >
                                    Ver más
                                </button>

                            </div>

                        ))}
                    </dl>

                </div>
            </div>

            {/* Modal */}
            {openModal !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                    }}
                    onClick={() => setOpenModal(null)}
                >
                    <div
                        className="bg-white rounded-4xl max-w-3xl mx-4 relative shadow-lg w-full max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header dinámico */}
                        <div
                            className="flex justify-between items-center p-4 rounded-tl-4xl rounded-tr-4xl sticky top-0"
                            style={{ backgroundColor: cards.find(c => c.id === openModal).headerColor }}
                        >
                            <h2 className="text-white font-bold text-base sm:text-lg md:text-xl">
                                {cards.find(c => c.id === openModal).title}
                            </h2>

                            <div className="flex items-center gap-2 sm:gap-4">
                                {/* Icono SVG responsivo */}
                                <a
                                    href={`/pdfs/${cards.find(c => c.id === openModal).pdfFileName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:opacity-80"
                                    aria-label="Abrir ficha técnica"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                                        viewBox="0 0 54 68"
                                        fill="none"
                                    >
                                        <path
                                            d="M33.75 0.255676L54 20.4174V60.741C54 62.5234 53.2888 64.2328 52.023 65.4931C50.7571 66.7535 49.0402 67.4616 47.25 67.4616H6.75C4.95979 67.4616 3.2429 66.7535 1.97703 65.4931C0.711158 64.2328 0 62.5234 0 60.741V6.97626C0 5.19385 0.711158 3.48445 1.97703 2.22409C3.2429 0.963736 4.95979 0.255676 6.75 0.255676H33.75ZM47.25 60.741V23.7777H30.375V6.97626H6.75V60.741H47.25ZM27 57.3807L13.5 43.9395H21.9375V33.8586H32.0625V43.9395H40.5L27 57.3807Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>

                                {/* Texto responsivo */}
                                <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                                    Ficha Técnica
                                </span>

                                <button
                                    className="text-white text-lg sm:text-xl font-bold"
                                    onClick={() => setOpenModal(null)}
                                    aria-label="Cerrar modal"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>


                        {/* Contenido del modal */}
                        <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            {/* Imagen */}
                            <img
                                src={cards.find((card) => card.id === openModal)?.imageFileName}
                                alt={`Imagen de ${cards.find((card) => card.id === openModal)?.title}`}
                                className="w-50 h-60 sm:w-52 sm:h-52 md:w-64 md:h-100 object-contain mt-0 lg:mt-20"
                            />





                            {/* Detalles */}
                            <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 md:ml-20">
                                {/* Título */}
                                <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                                    Presentación
                                </p>

                                {/* Botones de litros */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                                    {["1L", "5L", "10L", "20L"].map((litro) => (
                                        <button
                                            key={litro}
                                            onClick={() => setSelectedLiters(litro)}
                                            className={`px-3 py-1 border rounded-lg transition 
            ${selectedLiters === litro ? "bg-green-600 text-white" : "text-gray-700"}`}
                                        >
                                            {litro}
                                        </button>
                                    ))}
                                </div>

                                {/* Precio dinámico */}
                                <div>
                                    <p className="text-3xl font-bold text-[var(--color-text-primary)]">Precio</p>
                                    <p className="text-2xl sm:text-3xl  text-[var(--color-text-blue-primary)]">
                                        ${cards.find((card) => card.id === openModal)?.prices[selectedLiters]}
                                    </p>
                                </div>
                                {/* Composición */}
                                <div className="composicion mt-6 text-left px-4 sm:px-6 md:px-0">
                                    <p className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                                        Composición
                                    </p>
                                    <div className="border border-gray-300 rounded-2xl shadow-sm overflow-auto">
                                        <table className="min-w-[300px] w-full text-gray-700 border-collapse text-sm sm:text-base">
                                            <tbody>
                                                {cards.find(card => card.id === openModal)?.ingredients.map(({ element, value }, index) => (
                                                    <tr key={index} className="border-b border-gray-200 last:border-0">
                                                        <td className="py-2 px-3 sm:px-4 font-medium">{element}</td>
                                                        <td className="py-2 px-3 sm:px-4 text-right">{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>




                                {/* Tabs dinámicos RESPONSIVOS */}
                                <div className="w-full mt-6 px-3 sm:px-4 md:px-0">
                                    {/* Botones */}
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                        {["Información", "Beneficios", "Recomendaciones"].map((tab, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveTab(tab)}
                                                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-medium border rounded-lg 
          ${activeTab === tab
                                                        ? "text-green-600 border-green-600 bg-green-50"
                                                        : "text-gray-600 border-gray-300 hover:text-green-500"} 
          transition-colors`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3 border border-gray-300 rounded-2xl p-4 text-gray-700 text-sm sm:text-base bg-white shadow-sm">
                                        {activeTab === "Información" && (
                                            <p>{cards.find(c => c.id === openModal)?.info.informacion}</p>
                                        )}

                                        {activeTab === "Beneficios" && (
                                            <ul className="list-disc list-inside space-y-1">
                                                {cards.find(c => c.id === openModal)?.info.beneficios.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {activeTab === "Recomendaciones" && (
                                            <ol className="list-decimal list-inside space-y-1">
                                                {cards.find(c => c.id === openModal)?.info.recomendaciones.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ol>
                                        )}
                                    </div>

                                </div>









                            </div>
                        </div>


                    </div>
                </div>
            )}

        </>
    );
}

