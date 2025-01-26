import axios from 'axios';

interface Article {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage: string;
}

interface News {
  articles: Article[];
}

export async function fetchNews(): Promise<News | null> {
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

    
    if (!Array.isArray(news.articles)) {
      console.error("Invalid articles format");
      return null;
    }

    console.log("Fetched news:", news);
    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
}