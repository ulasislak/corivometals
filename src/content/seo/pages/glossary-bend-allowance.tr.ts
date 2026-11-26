import type { SeoPage } from "@/content/seo/types";

export const glossaryBendAllowanceTr: SeoPage = {
  slug: "glossary-bend-allowance",
  kind: "glossary",
  term: "Büküm payı",
  hub: "/sheet-metal",
  related: ["glossary", "bend-allowance-calculator", "sheet-metal-bending", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Büküm payı nedir? Tanım ve formül",
    description:
      "Büküm payı, bükümden geçen tarafsız eksenin uzunluğu, yani bir bükümün tükettiği düz malzemedir. Tanım, formül ve büküm düşümü.",
  },
  crumb: "Büküm payı",
  kicker: "SÖZLÜK",
  h1: "Büküm payı",
  directAnswer:
    "Büküm payı, bir bükümden geçen tarafsız eksenin yay uzunluğudur ve o bükümün tükettiği düz malzemeye eşittir. Kenar uzunlukları ile büküm paylarını toplamak kesilecek blank boyunu verir. Büküm açısından, iç radyüsten, sac kalınlığından ve K-faktöründen hesaplanır; dış ölçülerden çıkarılan büküm düşümüyle yakından ilişkilidir.",
  keyFacts: [
    { label: "Tanım", value: "Bükümden geçen tarafsız eksen uzunluğu" },
    { label: "Formül", value: "BA = açı (rad) × (iç radyüs + K × kalınlık)" },
    { label: "İlgili terim", value: "Dış ölçülerden çıkarılan büküm düşümü" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Büküm payı nedir",
      paragraphs: [
        "Büküm, düz bir sac parçasını eğri bir köşeye çevirir. Tarafsız eksen boyunca malzeme uzunluğunu korur; bu yayın uzunluğu büküm payıdır. Büküme karışıp kaybolan düz uzunluktur ve tam açınım boyunu bulmak için düz kenar uzunluklarına eklenir.",
        "Formül, radyan cinsinden büküm açısını, iç radyüsü, kalınlığı ve K-faktörünü kullanır. K-faktörü malzemeye ve takıma bağlı olduğu için büküm payı, atölye kendi proses föyüne göre teyit edene kadar bir tahmindir.",
      ],
    },
    {
      heading: "Büküm payı ve büküm düşümü",
      paragraphs: [
        "Büküm düşümü aynı etkiyi dışarıdan ifade eder. İç uzunluklara pay eklemek yerine dış ölçülerin toplamından düşüm çıkarırsınız. Dış köşelere göre ölçülendirilmiş çizimler çoğunlukla düşüm kullanır; iki kabulün karıştırılması yanlış blank boyunun yaygın nedenidir.",
        "RFQ'da açınımınızın hangi kabulü kullandığını yazın. Bu sitedeki büküm payı hesaplayıcı iki değeri de gösterir; sac büküm sayfası teklif için neler göndereceğinizi açıklar.",
      ],
    },
  ],
  faq: [
    {
      question: "Büküm payı formülü nedir?",
      answer: "BA, radyan cinsinden büküm açısı çarpı iç radyüs ile K-faktörü çarpı kalınlığın toplamıdır.",
    },
    {
      question: "Büküm payı ile büküm düşümü aynı mı?",
      answer: "Hayır, ama ilişkilidirler. Pay iç uzunluklara eklenir; düşüm dış ölçülerden çıkarılır.",
    },
    {
      question: "Büküm payı malzemeye bağlı mı?",
      answer: "Evet, malzemeye, kalınlığa, radyüse ve takıma göre değişen K-faktörü üzerinden.",
    },
    {
      question: "Büküm teklifi ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
