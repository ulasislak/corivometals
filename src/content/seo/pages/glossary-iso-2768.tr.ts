import type { SeoPage } from "@/content/seo/types";

export const glossaryIso2768Tr: SeoPage = {
  slug: "glossary-iso-2768",
  kind: "glossary",
  term: "ISO 2768",
  hub: "/cnc-parts",
  related: ["glossary", "iso-2768-tolerance-table", "cnc-machining", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "ISO 2768 nedir? Genel toleranslar",
    description:
      "ISO 2768, tek tek limiti olmayan ölçüler için f, m, c, v sınıflarında genel tolerans verir. Tanım ve çizimde nasıl belirtileceği.",
  },
  crumb: "ISO 2768",
  kicker: "SÖZLÜK",
  h1: "ISO 2768",
  directAnswer:
    "ISO 2768, çizimde tek tek toleransı olmayan doğrusal ve açısal ölçüler ile geometrik özellikler için uluslararası genel tolerans standardıdır. Doğrusal sınıfları ince (f), orta (m), kaba (c) ve çok kabadır (v). Çizimin antet bloğundaki “ISO 2768-m” gibi tek bir not, seçilen sınıfı tüm bu ölçülere uygular.",
  keyFacts: [
    { label: "Tanım", value: "Tek tek limiti olmayan ölçüler için genel toleranslar" },
    { label: "Doğrusal sınıflar", value: "f (ince), m (orta), c (kaba), v (çok kaba)" },
    { label: "2. kısım", value: "Geometrik sınıflar H, K, L", verify: true },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "ISO 2768 nedir",
      paragraphs: [
        "ISO 2768 genel tolerans standardıdır. Her ölçüye tolerans yazmak yerine çizimde tek bir sınıf belirtilir ve toleransı yazılmamış her ölçü karşılık gelen limitleri devralır. Birinci kısım doğrusal ve açısal ölçüleri, ikinci kısım düzlemsellik ve doğrusallık gibi geometrik özellikleri kapsar.",
        "İzin verilen sapma nominal ölçüyle büyür. Orta sınıfta kısa bir ölçünün limiti uzun bir ölçüden çok daha dardır. Rulman yuvası ve eşleşen yüzey gibi kritik özellikler yine de kendi toleransını taşımalı; gerisini ISO 2768 karşılamalıdır.",
      ],
    },
    {
      heading: "Çizimde nasıl belirtilir",
      paragraphs: [
        "Antet bloğuna bir not ekleyin; örneğin “Genel toleranslar ISO 2768-m”. Olmazsa atölye kendi varsayılanını uygulayabilir; bu beklentinizden farklı olabilir. İşe yarayan en gevşek sınıfı seçin; çünkü daha sıkı sınıflar maliyet ekler.",
        "Tipik değerler için ISO 2768 tolerans tablosuna, toleransların tekliflere etkisi için CNC işleme sayfasına bakın. Corivo teklif verirken notu okur ve 2 iş günü içinde yanıtlar.",
      ],
    },
  ],
  faq: [
    {
      question: "ISO 2768-m ne anlama gelir?",
      answer: "Çizimde toleransı yazılmamış tüm ölçülere orta genel tolerans sınıfını uygular.",
    },
    {
      question: "ISO 2768 özel toleransların yerini alır mı?",
      answer: "Hayır. Kritik özellikler kendi toleranslarını gerektirir; gerisini ISO 2768 karşılar.",
    },
    {
      question: "Sac için hangi sınıf yaygındır?",
      answer: "Büküm ve kaynak değişim eklediği için orta veya kaba yaygındır.",
    },
    {
      question: "Teklif ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
