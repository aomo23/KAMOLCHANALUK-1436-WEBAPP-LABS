import express from "express";
import axios from "axios";

const app = express();
const PORT = 8082;
const IP_API_URL = "https://httpbin.org/ip";

let cachedIP = null;

async function fetchIP() {
  try {
    const response = await axios.get(IP_API_URL);
    const ip = response.data.origin;
    cachedIP = ip;
    console.log("Fetched IP address:", ip);
    return ip;
  } catch (error) {
    console.error("Error fetching IP address:", error.message);
    throw new Error(error.message);
  }
}

app.get("/ip", async (req, res) => {
  console.log("Received GET request to /ip"); 

  try {
    const ip = cachedIP || (await fetchIP());
    res.json({ ip, source: "httpbin.org" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch IP address",
      message: error.message,
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  try {
    await fetchIP();
  } catch {
    console.error("Initial IP fetch failed — will try again on /ip request");
  }
});
