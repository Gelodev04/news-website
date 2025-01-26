import Image from "next/image";
import { fetchNews } from "../api/Api";

export default async function LatestArticles() {
  const news = await fetchNews();
  
  return (
    <div className="text-white mt-16 mx-4 flex flex-col items-center">
      <h1 className="text-5xl text-center">Latest Articles</h1>
      <ul className="mt-10 flex flex-col gap-[3rem]">
        {news?.articles.slice(0, 3).map((article) => (
          <li key={article.title}>
            <Image
            className="rounded"
              src={article.urlToImage}
              alt="Article image"
              width={500}
              height={500}/>
            <p className="text-sm text-gray-400 mt-2 py-3">{article.publishedAt}</p>
            <h2 className="text-[2rem] leading-10">{article.title}</h2>
            <p className="text-gray-400 py-2">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-[#6cff22] py-3 px-7 rounded mt-10 uppercase text-black">
        See more
      </button>
    </div>
  );
}
