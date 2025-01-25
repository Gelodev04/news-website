import React from "react";
import Image from "next/image";

export default function FirstSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className=" text-white py-20 mx-2">
        <div className="container text-center">
          <h1 className="text-7xl font- ">
            Keep up with the latest news
          </h1>
          <p className="text-lg mt-4 ">
            Access trustworthy information quickly and easily through our news
            portal. Stay informed with us at all times!
          </p>
        </div>
      </div>

      <div
        className="relative h-[450px] w-[450px]  rounded"
        style={{
          backgroundImage: "url(/images/image1.jpg)",
          backgroundPosition: "65%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </section>
  );
}
