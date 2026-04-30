import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

const api = express.Router();

const CITIES_FILE = path.join(__dirname, "cities.json");

api.use(cors());
api.use(express.json());

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

api.get("/cities", async (req, res) => {
  try {
    const cities = await readJson(CITIES_FILE);

    const filtered = cities.filter((item) => Number(item.population) > 50000);

    const sorted = filtered.sort((a, b) => a.city.localeCompare(b.city, "ru"));

    const biggestCity = sorted.reduce((max, current) =>
      Number(current.population) > Number(max.population) ? current : max,
    );

    const result = [
      biggestCity,
      ...sorted.filter((item) => item.city !== biggestCity.city),
    ];

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при загрузке городов" });
  }
});
api.post("/register", (req, res) => {
  console.log("Form data:", req.body);
  return res.status(200).json({ message: "ok" });
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
