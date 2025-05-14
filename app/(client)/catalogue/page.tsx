"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Zəncir",
    image: "/products/zencir.png",
    description:
      "Zəncir bir-birinə bağlanmış roliklər toplusudur və mexaniki gücün ötürülməsi üçün ən çox istifadə edilən ötürücü növüdür. ",
  },
  {
    id: 2,
    name: "Ulduz",
    image: "/products/ulduz.png",
    description:
      "Ulduzlar mexaniki gücün bir yerdən digərinə ötürülməsində istifadə olunur. ",
  },
  {
    id: 3,
    name: "Mufta",
    image: "/products/mufta.png",
    description:
      "Bir-birinə nisbətən oxboyu fırlanan vallar, çarxlar və ya başqa fırlanan hissələr arasında daimi və ya müvəqqəti ötürmə yaratmaq və bununla bir tərəfdən digər tərəfə qüvvə ötürmək üçün birləşmə qurğusudur.",
  },
  {
    id: 4,
    name: "Şkiv",
    image: "/products/skiv.png",
    description:
      "Kəməri və ya kəndiri  tutmaq üçün tez-tez istifadə olunan və bir kasnağa daxil olan  yivli bir təkərdir.",
  },
  {
    id: 5,
    name: "Kabel Kanallar",
    image: "/products/kabelKanallar.png",
    description:
      "Kabel kanallar qurğunun daxilindəki kabellərin nizamlı hərəkətinin tənzimlənməsinə və zədələnməməsinə kömək edir.",
  },
  {
    id: 6,
    name: "Dişli çarx",
    image: "/products/disliCarx.png",
    description:
      "Dişli çarx üzərində silindrik və ya konik səth üzrə dişlər kəsilmiş qasnaqdır. O başqa dişli çarxla təmasda olaraq dişli ötürmənin əsas elementi sayılır.",
  },
  {
    id: 7,
    name: "Yaylar/Porşenlər",
    image: "/products/yaylarPorsenler.png",
    description:
      "Yay mexaniki enerji saxlayan elastik bir cisimdir. Yaylar adətən yay poladdan hazırlanır. ",
  },
  {
    id: 8,
    name: "Saxlama Halqası",
    image: "/products/saxlamaHalqasi.png",
    description:
      "Saxlama Halqaları əsasən vallarda, podşipniklərdə və s. dəzgah hissələrində cismin hərəkət səbəbi ilə yerindən çıxmaması üçün tətbiq olunur. ",
  },
  {
    id: 9,
    name: "Podşipnik ",
    image: "/products/podsipnik.png",
    description:
      "Nisbi hərəkəti yalnız istənilən hərəkətə məhdudlaşdıran və hərəkət edən hissələr arasında sürtünməni azaldan maşın elementidir. ",
  },
  {
    id: 10,
    name: "İşqil",
    image: "/products/isqil.png",
    description:
      "Şkiv ilə mator arasında bağlantı yaradır və hər hansısa nasazlıq yaranarsa ilkin olaraq özü sıradan çıxıb nasazlıqın dəzgah daxili olmasının qarşısını alır.",
  },
];

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col md:flex-row overflow-hidden">
      <aside className="w-full md:w-1/3 lg:w-1/4 border-b md:border-b-0 md:border-r border-gray-700 overflow-y-auto h-auto md:h-screen p-4 scrollbar-thin scrollbar-thumb-cyan-500">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 animate-pulse text-center">
          Catalogue
        </h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`flex flex-col md:px-6 sm:flex-row items-center justify-between cursor-pointer p-3 rounded-lg transition-all hover:bg-cyan-700/20 hover:scale-105 shadow-md ${
                selectedProduct.id === product.id
                  ? "bg-cyan-700/30"
                  : "bg-gray-800"
              }`}
            >
              <p className="text-center text-lg font-semibold text-cyan-300">
                {product.name}
              </p>
              <div className="mt-2 sm:mt-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 sm:w-full sm:h-32 object-contain rounded-md animate-fadeIn"
                />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 relative animate-fadeIn bg-gray-950/50 backdrop-blur-sm">
        <div className=" mx-auto rounded-xl shadow-xl p-6 md:p-8 bg-gray-900/80 backdrop-blur-lg border border-cyan-600">
          <h1 className="text-2xl md:text-4xl font-extrabold text-cyan-400 mb-4 md:mb-6 text-center">
            {selectedProduct.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 md:h-[400px] w-full mb-4 md:mb-6 rounded-xl overflow-hidden relative drop-shadow-xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col  md:items-center justify-center md:gap-20">
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex items-center justify-center w-full">
                <Link href={`/catalogue/${selectedProduct.id}`}>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Ətraflı
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
