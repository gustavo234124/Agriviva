import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors()); // Permitir peticiones desde tu front
app.use(express.json());

// Ruta para enviar el correo
app.post("/send-email", async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  try {
    // Configuración de transporte usando Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación
      },
    });

    // Correo que enviarás
    await transporter.sendMail({
      from: correo,
      to: process.env.EMAIL_USER, // Te llegará a tu mismo correo
      subject: `Nuevo mensaje de ${nombre}`,
      text: `De: ${nombre} (${correo})\n\n${mensaje}`,
    });

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
