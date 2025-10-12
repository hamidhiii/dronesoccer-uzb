import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const TOKEN = "8391647110:AAGtxH722K9aG6dxgMBCOynYd5oPv41uFug";
const CHAT_ID = "1208682308";

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
    console.error("Telegram send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(4000, () => console.log("Server started on port 4000"));
