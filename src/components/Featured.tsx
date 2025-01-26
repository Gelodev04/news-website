import Image from "next/image";

export default async function Featured() {
  const featured = [
    {
      title: "Article 1",
      description: "Description 1",
      url: "https://www.example.com",
      urlToImage: "/images/image1.jpg",
      publishedAt: "2022-01-01",
    },
    {
      title: "Article 2",
      description: "Description 2",
      url: "https://www.example.com",
      urlToImage: "/images/image1.jpg",
      publishedAt: "2022-01-02",
    },
    {
        title: "Article 3",
        description: "Description 3",
        url: "https://www.example.com",
        urlToImage: "/images/image1.jpg",
        publishedAt: "2022-01-02",
      },
  ];

  return (
    <div className="text-white mt-[6rem] mx-4 flex flex-col items-center">
      <h1 className="text-5xl text-center">Featured</h1>
      <ul className="mt-10 flex flex-col gap-[3rem]">
        {featured.map((article, index) => (
          <li key={index}>
            <Image
              src={article.urlToImage}
              alt="Article image"
              width={500} // Set the width explicitly
              height={500} // Set the height explicitly
              className="rounded object-cover"
            />

            <p className="text-sm text-gray-400 mt-2 py-3">
              {article.publishedAt}
            </p>
            <h2 className="text-[2rem] leading-10">{article.title}</h2>
            <p className="text-gray-400 py-2">{article.description}</p>
            <a href="" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-[#6cff22] py-3 px-7 rounded mt-10 uppercase text-black text-sm">
        See more
      </button>
    </div>
  );
}
