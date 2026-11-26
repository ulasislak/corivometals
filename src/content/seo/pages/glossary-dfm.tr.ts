import type { SeoPage } from "@/content/seo/types";

export const glossaryDfmTr: SeoPage = {
  slug: "glossary-dfm",
  kind: "glossary",
  term: "DFM",
  hub: "/sheet-metal",
  related: ["glossary", "sheet-metal-dfm-guidelines", "how-to-get-a-sheet-metal-quote", "laser-cutting-cost-drivers"],
  meta: {
    title: "DFM nedir? Üretilebilirlik tasarımı",
    description:
      "DFM, üretilebilirlik tasarımı; parçayı makul maliyetle güvenilir üretilecek şekilde biçimlendirir. Tanım ve sac ile CNC'de uygulaması.",
  },
  crumb: "DFM",
  kicker: "SÖZLÜK",
  h1: "DFM (üretilebilirlik tasarımı)",
  directAnswer:
    "DFM, yani üretilebilirlik tasarımı, bir parçayı seçilen prosesle güvenilir, tekrarlanabilir ve makul maliyetle üretilebilecek şekilde biçimlendirme uygulamasıdır. Sacda delik ölçüleri, büküm boşlukları, radyüsler, toleranslar, kaynak erişimi ve yüzey işlemini kapsar. DFM incelemesi, üretim başlamadan önce olası sorunları işaretler ve gereksiz maliyeti azaltır.",
  keyFacts: [
    { label: "Tanım", value: "Parçaları güvenilir ve ekonomik üretilebilecek şekilde tasarlamak" },
    { label: "Sac odağı", value: "Delik, büküm, rahatlatma, tolerans, kaynak erişimi, yüzey işlemi" },
    { label: "Ne zaman", value: "Sipariş öncesi; teklif yanıtı üretilebilirlik yorumları içerir" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "DFM pratikte ne demek",
      paragraphs: [
        "Bir tasarım CAD'de iyi görünüp yine de üretimi zor olabilir. DFM, proses sınırlarını tasarım aşamasına getirir. Sacda bu; deliklerin temiz kesilecek kadar büyük, büküm çizgilerinden uzak olması, kenarların takıma yetecek uzunlukta olması ve bükümlerin bittiği yerlerde rahatlatma kesikleri bulunması demektir.",
        "CNC işlemede DFM; iç köşe radyüslerini, cep derinliğini, takım erişimini ve bağlama sayısını kapsar. Her proseste DFM, toleransları en sıkı değere sabitlemek yerine fonksiyona uygun belirlemek demektir.",
      ],
    },
    {
      heading: "DFM incelemesi almak",
      paragraphs: [
        "Tasarımı değiştirmenin en ucuz zamanı parçalar üretilmeden öncesidir. Corivo her teklife, kesilmesi zor, çarpılma olasılığı yüksek veya başka yolla daha iyi üretilecek özellikleri işaretleyen üretilebilirlik yorumlarını ekler. DXF, STEP ve PDF'i yükleyin; 2 iş günü içinde yanıt alırsınız.",
        "Pratik kurallar için sac DFM kurallarını, göndermeniz gerekenler için teklif kontrol listesini okuyun. DFM yorumları tavsiyedir; siparişten önce neyi değiştireceğinize siz karar verirsiniz.",
      ],
    },
  ],
  faq: [
    {
      question: "DFM ne anlama gelir?",
      answer: "Üretilebilirlik tasarımı: parçayı güvenilir ve makul maliyetle üretilebilecek şekilde biçimlendirmek.",
    },
    {
      question: "DFM geri bildirimi tekliflere dahil mi?",
      answer: "Evet. Her teklif zor olabilecek özellikler hakkında üretilebilirlik yorumları içerir.",
    },
    {
      question: "DFM CNC parçalar için de geçerli mi?",
      answer: "Evet. Köşe radyüsleri, cep derinliği, takım erişimi, bağlamalar ve toleransları kapsar.",
    },
    {
      question: "DFM geri bildirimi ne zaman gelir?",
      answer: "Teklif yanıtının parçası olarak 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
