export const products: Product[] = [
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
      "Ulduzlar mexaniki gücün bir yerdən digərinə ötürülməsində istifadə olunur.",
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
      "Kəməri və ya kəndiri  tutmaq üçün tez-tez istifadə olunan və bir kasnağa daxil olan  yivli bir təkərdir. ",
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
    name: "Podşipnik",
    image: "/products/podsipnik.png",
    description:
      "Nisbi hərəkəti yalnız istənilən hərəkətə məhdudlaşdıran və hərəkət edən hissələr arasında sürtünməni azaldan maşın elementidir. ",
  },
  {
    id: 10,
    name: "Işqil",
    image: "/products/isqil.png",
    description:
      "Şkiv ilə mator arasında bağlantı yaradır və hər hansısa nasazlıq yaranarsa ilkin olaraq özü sıradan çıxıb nasazlıqın dəzgah daxili olmasının qarşısını alır.",
  },
];

export const PATHS = {
  HOME: "/",
  CATALOGUE: "/catalogue",
  ABOUT: "/about",
  CONTACT: "/contact",
  ORDER: "/order",
  PRODUCT_DETAIL: (id: string) => `/catalogue/${id}`,
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  FAQ: "/faq",
  SUPPORT: "/support",
};
