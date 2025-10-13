import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;

// 🔐 Твой Telegram бот
const TOKEN = "8391647110:AAGtxH722K9aG6dxgMBCOynYd5oPv41uFug";
const CHAT_ID = 8237111598;

// Разрешаем CORS и JSON
app.use(cors());
app.use(express.json());

// 📂 Настройка путей для статических файлов
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

// Раздаём фронтенд (Vite build)
app.use(express.static(distPath));

// 📩 API: отправка сообщения в Telegram
app.post("/send-message", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `
📩 *New Contact Form Submission*  
👤 Name: ${name}  
📧 Email: ${email}  
📝 Subject: ${subject}  
💬 Message: ${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Telegram send error:", err);
    console.error("Telegram send error:", err.response?.data || err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ⚙️ Все остальные маршруты → React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
