import axios from "axios";

interface Article {
  title: string;
  description: string;
  url: string;
}

interface News {
  articles: Article[];
}

export default async function Api(): Promise<News | null>{
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    console.error("API key is missing");
    return null;
  }

  try {
    const res = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us", 
        apiKey: apiKey,
      },
    });

    const news: News = res.data;
    console.log("Fetched news:", news);
    return res.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
}
