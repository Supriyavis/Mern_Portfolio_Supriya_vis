import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", MessageSchema);

// POST route (save message)
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = new Message({ name, email, message });
  await newMessage.save();

  res.json({ success: true });
});

// GET route (view messages)
app.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(5000, () => console.log("Server running on port 5000"));