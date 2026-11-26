import type { SeoPage } from "@/content/seo/types";

export const glossaryNestingTr: SeoPage = {
  slug: "glossary-nesting",
  kind: "glossary",
  term: "Nesting",
  hub: "/sheet-metal",
  related: ["glossary", "laser-cutting", "laser-cutting-cost-drivers", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Lazer kesimde nesting nedir? Tanım",
    description:
      "Nesting, parçaları sac üzerinde malzemeyi verimli kullanacak ve fireyi azaltacak şekilde yerleştirmektir. Tanım ve iyi nesting için tasarım.",
  },
  crumb: "Nesting",
  kicker: "SÖZLÜK",
  h1: "Nesting",
  directAnswer:
    "Nesting, çok sayıda parçanın tek bir sac üzerinde mümkün olduğunca fazla malzeme kullanılacak ve fire en aza inecek biçimde yerleştirilmesidir. Verim olarak adlandırılan yüksek sac kullanımı genellikle parça başı maliyeti düşürür. Parça şekli, aralık, kerf ve adet nesting'in ne kadar iyi çalıştığını etkiler.",
  keyFacts: [
    { label: "Tanım", value: "Fireyi azaltmak için parçaları sac üzerinde yerleştirmek" },
    { label: "Ana ölçüt", value: "Sac kullanımı (verim)" },
    { label: "Nesting'e yardımcı olanlar", value: "Sade dış hatlar, ortak kenarlar, standart malzeme ve kalınlık" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Nesting nedir",
      paragraphs: [
        "Lazer kesim standart bir sacla başlar ve parçalar üzerine yapboz parçaları gibi dizilir. Nesting yazılımı, parçalar arasında kalan kullanılmayan malzemeyi, yani iskelet firesini azaltacak şekilde yerleştirir. Sonuç, tek sacdan çok sayıda parça kesen bir kesim programıdır.",
        "Kullanım önemlidir; çünkü fire de ödenir. Yüksek verimli bir nest parça başına daha az malzeme harcar. Düzensiz şekilli, büyük iç kesimli veya olağandışı ölçülü parçalar daha fazla fire bırakır. Aynı malzeme ve kalınlıktaki parçalar birlikte yerleştirilebilir; bu yüzden bir proje boyunca bunları standartlaştırmak yardımcı olur.",
      ],
    },
    {
      heading: "İyi nesting için tasarım ve dosya gönderimi",
      paragraphs: [
        "Kapalı konturlu, çift çizgisiz açınım DXF dosyaları verin. Atölye nest planlayabilsin diye parça başına adedi ve tahmini yıllık adedi yazın. Parçalar arasında kerf için makul bir boşluk bırakın ve geniş aralık gerektiren minik özelliklerden kaçının.",
        "Parçaların değdiği yerlerde ortak kenarlar bir kez kesilebilir; bu malzemeyle birlikte süre de kazandırır. Nesting'in fiyatı nasıl etkilediği için lazer kesim maliyet etkenleri sayfasını, neler göndereceğiniz için lazer kesim sayfasını okuyun. Corivo 2 iş günü içinde yanıt verir.",
      ],
    },
  ],
  faq: [
    {
      question: "Nesting fiyatı değiştirir mi?",
      answer: "Evet. Yüksek verim daha az malzeme firesi demektir; bu genellikle parça başı maliyeti düşürür.",
    },
    {
      question: "Parçaları kendim yerleştirmeli miyim?",
      answer: "Hayır. Tek tek açınım DXF dosyalarını gönderin; atölye bunları sac için yerleştirir.",
    },
    {
      question: "Hangi parçaları yerleştirmek zordur?",
      answer: "Düzensiz dış hatlar, büyük iç kesimler ve çok sayıda farklı kalınlık veya malzemenin karışması.",
    },
    {
      question: "Lazer kesim teklifi ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
