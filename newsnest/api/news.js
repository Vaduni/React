export default async function handler(req, res) {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  // Get query params with defaults
  const { country = "us", pageSize = 7, category = "technology", page = 1 } = req.query;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&category=${category}&apiKey=${apiKey}&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Forward error if any
    if (response.status !== 200) {
      return res.status(response.status).json({ error: data.message || "Error fetching news" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
