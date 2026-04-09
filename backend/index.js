import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

const CITIES_FILE = path.join(__dirname, "cities.json");

app.use(cors());
app.use(express.json());

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

app.get("/cities", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
