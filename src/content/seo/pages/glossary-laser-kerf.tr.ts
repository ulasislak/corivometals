import type { SeoPage } from "@/content/seo/types";

export const glossaryLaserKerfTr: SeoPage = {
  slug: "glossary-laser-kerf",
  kind: "glossary",
  term: "Lazer kerf",
  hub: "/sheet-metal",
  related: ["glossary", "laser-cutting", "laser-cutting-cost-drivers", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Lazer kerf nedir? Tanım ve önemi",
    description:
      "Lazer kerf, ışının kesim sırasında kaldırdığı malzemenin genişliğidir. Kerf'in ölçüleri, küçük özellikleri ve nesting aralığını nasıl etkilediğini görün.",
  },
  crumb: "Lazer kerf",
  kicker: "SÖZLÜK",
  h1: "Lazer kerf",
  directAnswer:
    "Lazer kerf, lazer ışınının kesim sırasında buharlaştırdığı veya eritip uzaklaştırdığı dar malzeme kanalıdır. Genişliği malzemeye, kalınlığa, odağa ve gaza bağlıdır; bitmiş ölçüler çizimle eşleşsin diye kesim programında telafi edilir. Kerf ayrıca iç içe yerleştirilen parçalar arasındaki asgari pratik boşluğu da belirler.",
  keyFacts: [
    { label: "Tanım", value: "Kesim yolu boyunca kaldırılan malzemenin genişliği" },
    { label: "Tipik genişlik", value: "Milimetrenin bir kesri; malzeme, kalınlık ve ayara göre değişir", verify: true },
    { label: "Telafi", value: "Kesim programında yapılır; DXF'e çizilmez" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Lazer kerf nedir",
      paragraphs: [
        "Lazer sacı keserken yol boyunca ince bir malzeme şeridini kaldırır. Bu şerit kerf'tir. Genişliği ışına, malzeme ve kalınlığa, odak konumuna ve yardımcı gaza bağlıdır. Kalın malzeme ve belirli ayarlar, en uygun hızda kesilen ince sacdan daha geniş kerf üretir; kesim yüzeyleri de her zaman tam paralel olmaz.",
        "Kesilen parçanın telafisiz yolun ölçüsünde olmamasının nedeni kerf'tir. Kesim programı, bitmiş delik veya dış hat çizimle eşleşsin diye yolu kerf'in yarısı kadar öteler. DXF'e kerf çizmezsiniz; bitmiş geometriyi çizin, telafiyi atölye yapsın.",
      ],
    },
    {
      heading: "Kerf tasarım ve teklif için neden önemli",
      paragraphs: [
        "Kerf, özelliklerin ve parçaların ne kadar yakın olabileceğini sınırlar. Çok dar kanallar, ince bağlar ve minik delikler kerf ve ısıdan etkilenebilir. Parçalar yerleştirilirken aralarına küçük bir boşluk bırakmak kerf'i hesaba katar ve çakışmayı önler. Birbirine yakın kesimler ince sacı da çarpıtabilir; bu yüzden üretilebilirlik notu daha fazla aralık önerebilir.",
        "Sıkı geçme veya dar boşluklu özelliklerde şartı çizimde belirtin; atölye bunu prosesiyle karşılaştırsın. Neler göndereceğiniz için lazer kesim sayfasına, nesting ve kesim boyunun fiyatı nasıl etkilediği için maliyet etkenleri sayfasına bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "DXF'ime kerf eklemeli miyim?",
      answer: "Hayır. Bitmiş geometriyi çizin. Atölye kerf'i kesim programında telafi eder.",
    },
    {
      question: "Kerf kalınlıkla değişir mi?",
      answer: "Evet. Kerf malzemeye, kalınlığa, odağa ve gaza bağlıdır; işten işe farklılık gösterir.",
    },
    {
      question: "Kerf nesting'i nasıl etkiler?",
      answer: "Parçalar arasında asgari bir boşluk belirler. Çok sıkı aralık ince sacda ısı çarpılmasına da yol açabilir.",
    },
    {
      question: "Lazer kesim teklifi ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
