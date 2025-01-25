import axios from "axios";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

interface News {
  articles: Article[];
}

export default async function Api(): Promise<News | null> {
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

    // Ensure 'articles' is an array before using slice
    if (!Array.isArray(news.articles)) {
      console.error("Articles data is not an array");
      return null;
    }

    console.log("Fetched news:", news);
    
    // Return the first 5 articles
    return {
      articles: news.articles.slice(0, 5), // This ensures you get only the first 5 articles
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
}
