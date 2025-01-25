// components/LatestArticles.tsx
"use client";
import React, { useEffect, useState } from "react";
import Api from "@/api/Api";
import Image from "next/image";

interface Article {
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
}

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await Api();
      if (data) {
        setArticles(data.articles.slice(0, 5));
      } else {
        setError("Failed to fetch articles");
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!articles) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-white mt-16 mx-4 flex flex-col items-center">
      <h1 className="text-5xl text-center">Latest Articles</h1>
      <ul className="mt-10 flex flex-col gap-[3rem]">
        {articles.map((article) => (
          <li className="" key={article.title}>
            {article.urlToImage && (
              <Image
                className="rounded h-[380px]  object-cover "
                src={article.urlToImage}
                alt={article.title}
                width={500}
                height={500}
              />
            )}
            <p className="my-3">{article.publishedAt}</p>
            <h2 className="text-3xl">{article.title}</h2>
            <p className="text-gray-400 my-2">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>

      <button className="bg-[#6cff22] py-3 px-7 rounded mt-10 uppercase text-black">See more</button>
    </div>
  );
}
