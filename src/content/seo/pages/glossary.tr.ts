import type { SeoPage } from "@/content/seo/types";

export const glossaryTr: SeoPage = {
  slug: "glossary",
  kind: "aeo",
  hub: "/sheet-metal",
  related: [
    "bend-allowance-calculator",
    "iso-2768-tolerance-table",
    "sheet-metal-dfm-guidelines",
    "laser-cutting-cost-drivers",
    "/faq",
  ],
  meta: {
    title: "Sac sözlüğü: kerf, K-faktörü, nesting, DFM",
    description:
      "Sac ve CNC alıcıları için lazer kerf, K-faktörü, büküm payı, ISO 2768, nesting ve DFM terimlerinin sade tanımları.",
  },
  crumb: "Sözlük",
  kicker: "SÖZLÜK",
  h1: "Sac ve CNC sözlüğü",
  directAnswer:
    "Bu sözlük, sac ve işlenmiş parça siparişinde alıcıların karşılaştığı altı terimi tanımlar: lazer kerf, K-faktörü, büküm payı, ISO 2768, nesting ve üretilebilirlik tasarımı (DFM). Her madde terimi sade dille açıklar ve çizimde ya da RFQ'da neyin yazılacağını gösterir. Corivo tekliflere 2 iş günü içinde yanıt verir.",
  keyFacts: [
    { label: "Kapsanan terimler", value: "Lazer kerf, K-faktörü, büküm payı, ISO 2768, nesting, DFM" },
    { label: "Nerede önemli", value: "Kesim hassasiyeti, açınım boyu, tolerans, malzeme verimi, tasarım incelemesi" },
    { label: "İlgili araçlar", value: "Büküm payı hesaplayıcı ve ISO 2768 tolerans tablosu" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Kesim terimleri",
      paragraphs: [
        "İki terim, lazerle kesilen parçaların nasıl üretildiğini ve fiyatlandığını tarif eder. Kesilen parçanın çizime ne kadar yakın olduğunu ve ne kadar malzeme kullanıldığını etkilerler. İkisini anlamak teklifi okumanıza ve temiz kesilen dosyalar hazırlamanıza yardımcı olur.",
      ],
      bullets: [
        "Lazer kerf: lazer ışınının kesim sırasında kaldırdığı malzemenin genişliği. Parçalar kerf telafisiyle programlanır; bitmiş ölçü çizimle eşleşir. Tam madde: /glossary-laser-kerf.",
        "Nesting: Çok sayıda parçayı tek sacın mümkün olduğunca çoğunu kullanacak ve fireyi azaltacak biçimde yerleştirmek. Yüksek verim genellikle maliyeti düşürür. Tam madde: /glossary-nesting.",
      ],
    },
    {
      heading: "Büküm terimleri",
      paragraphs: [
        "Büküm, düz blankı şekillendirilmiş parçaya çevirir ve açınım boyu metalin nasıl uzadığını hesaba katmalıdır. Bu iki terim, katlanmış bir çizimi açınıma çevirmenin temelidir.",
      ],
      bullets: [
        "K-faktörü: tarafsız ekseni sac kalınlığı içinde konumlandıran oran. Büküm payını hesaplamak için kullanılır. Tam madde: /glossary-k-factor.",
        "Büküm payı: bükümden geçen tarafsız eksenin uzunluğu; yani o bükümün tükettiği düz malzeme. Tam madde: /glossary-bend-allowance. Ayrıca büküm payı hesaplayıcıya bakın.",
      ],
    },
    {
      heading: "Tolerans ve tasarım terimleri",
      paragraphs: [
        "Genel toleranslar ve tasarım kuralları alıcılarla atölyeler arasındaki çoğu anlaşmazlığı önler. Bunları çizimde net belirlemek maliyeti ve beklentileri hizalı tutar.",
      ],
      bullets: [
        "ISO 2768: tek tek limiti olmayan ölçüler için ince, orta ve kaba gibi sınıfları olan genel tolerans standardı. Tam madde: /glossary-iso-2768. Ayrıca tolerans tablosuna bakın.",
        "DFM (üretilebilirlik tasarımı): bir tasarımı güvenilir ve makul maliyetle üretilebilecek şekilde biçimlendirmek. Tam madde: /glossary-dfm. Ayrıca sac DFM kurallarına bakın.",
      ],
    },
    {
      heading: "Bu terimleri RFQ'nuzda kullanmak",
      paragraphs: [
        "Teklif almak için jargonu kullanmanız gerekmez; ancak dayandığınız kabulleri yazmak yanlış anlaşılmaları önler. Açınımınızın büküm payı mı büküm düşümü mü kullandığını belirtin, ISO 2768-m gibi bir genel tolerans notu ekleyin ve parçaların belirli bir şekilde yerleştirilmesi gerekiyorsa yazın. Corivo 2 iş günü içinde fiyat, termin ve üretilebilirlik yorumlarıyla yanıt verir.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Gönderilecek dosya ve ayrıntıların tam listesi için sac teklifi alma rehberimize bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Teklif istemek için bu terimleri bilmem gerekir mi?",
      answer: "Hayır. Çizimlerinizi ve notlarınızı sade dille gönderin; teklif yanıtı belirsiz olan her şeyi netleştirir.",
    },
    {
      question: "Hangi terim açınım boyunu etkiler?",
      answer: "Büküm payı ve arkasındaki K-faktörü, her bükümün ne kadar düz malzeme tükettiğini belirler.",
    },
    {
      question: "Hangi terim çizimdeki toleransları etkiler?",
      answer: "ISO 2768, tek tek limiti olmayan ölçüler için genel tolerans belirler. Kritik özellikler kendi toleranslarını taşımalıdır.",
    },
    {
      question: "Hesaplayıcı ve tabloları nerede bulabilirim?",
      answer: "Büküm payı hesaplayıcı, ISO 2768 tolerans tablosu ve sac ağırlık hesaplama aracına bakın.",
    },
  ],
  updated: "26 Kasım 2026",
};
