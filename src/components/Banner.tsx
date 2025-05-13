import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 bg-white rounded-xl shadow-md flex flex-col lg:flex-row overflow-hidden">
        {/* Sol: Metin Alanı */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            LASSA ÜRÜNLERİNDE 1. slider
          </h2>
          <h3 className="text-2xl font-extrabold text-green-700 mb-4">
            SEPETTE %20 İNDİRİM
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <button className="w-fit px-5 py-2 bg-green-700 text-white text-sm rounded-full hover:bg-green-800 transition flex items-center gap-2 shadow-md">
            ŞİMDİ DAHA FAZLASI →
          </button>
        </div>

        {/* Sağ: Görsel Alanı */}
        <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
          <Image
            src="/banner-tyre.jpg" // kendi banner görselini buraya koy
            alt="Lassa Banner"
            width={600}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

{/* Alt: Thumbnail Görseller  */}
<div className="w-full mt-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-center gap-4 flex-wrap">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <Image
            src="/banner-thumb.jpg" //  thumb görselin
            alt={`Slide ${index + 1}`}
            width={160}
            height={90}
            className="rounded shadow"
          />
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default Banner;
