import type { SeoPage } from "@/content/seo/types";

export const sheetMetalWeightCalculatorTr: SeoPage = {
  slug: "sheet-metal-weight-calculator",
  kind: "tool",
  toolId: "weight",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "sheet-metal-fabrication", "/request-a-quote"],
  meta: {
    title: "Sac ağırlık hesaplama",
    description:
      "Boy, en, kalınlık ve malzeme yoğunluğundan düz sac kütlesi tahmini. RFQ planı içindir; tartı belgesi değildir.",
  },
  crumb: "Ağırlık hesabı",
  kicker: "ARAÇ",
  h1: "Sac ağırlık hesaplama",
  directAnswer:
    "Sac ağırlık hesabı, blank hacmini malzeme yoğunluğuyla çarparak sipariş öncesi kütle tahmini verir. Boy, en ve kalınlığı milimetre girin, yaygın yoğunluğu seçin, adetle çarpın. Corivo bu tahmini yalnızca planlama için kullanır—nihai kütle nesting, kerf ve kaplamaya bağlıdır.",
  keyFacts: [
    { label: "Formül", value: "kütle = L × W × T × yoğunluk × adet (mm → cm³ → kg)" },
    { label: "DKP / St37 yoğunluk", value: "≈ 7,85 g/cm³", verify: true },
    { label: "Paslanmaz 304 yoğunluk", value: "≈ 8,00 g/cm³", verify: true },
    { label: "Alüminyum yoğunluk", value: "≈ 2,70 g/cm³", verify: true },
    { label: "Dahil değil", value: "Kerf firesi, büküm uzaması, toz boya filmi" },
  ],
  sections: [
    {
      heading: "Sonucu nasıl okumalı",
      paragraphs: [
        "Hesaplayıcı dikdörtgen dolu blank varsayar. Gerçek lazer nesting’inde iskelet fire kalır; iç kesimler kütle düşürür; bükümler hacim eklemez ama sevkiyat zarfını değiştirir. Rakamı koli boyutu, navlun sınıfı veya tedarikçi satırını kontrol için kullanın—sertifikalı kantar sonucu olarak değil.",
        "Düzensiz blankta sınırlayıcı kutu ölçüleriyle yaklaşın ve fire faktörüyle düşürün veya şekli dikdörtgenlere bölüp toplayın. Boru ve şekillendirilmiş profillerde düz-blank hesabı sapar; kütle sözleşmeye bağlıysa RFQ ile STEP gönderin.",
      ],
    },
    {
      heading: "Burada kullanılan yoğunluklar",
      paragraphs: [
        "Yoğunluklar planlama için yaygın el kitabı değerleridir: DKP/St37 ≈7,85, paslanmaz 304 ≈8,0, alüminyum ≈2,70, bakır ≈8,96, pirinç ≈8,5 g/cm³. Alaşım varyantları (316, 5052, DC01 vs S355) hafif sapar. Galvaniz burada çelik yoğunluğuyla alınır; çinko kaplama kütlesi yok sayılır.",
        "Sevkiyatta malzeme sertifikası veya tartı belgesi gerekiyorsa siparişte yazın. Corivo sevkiyatlarında ölçü raporu ve fotoğraf vardır; sertifika sitede belirtildiği üzere talep üzerine verilir.",
      ],
    },
    {
      heading: "Ağırlık tahmininden Corivo teklifine",
      paragraphs: [
        "Yalnız ağırlık parçayı fiyatlamaz—kesim boyu, pierce, büküm, kaynak ve yüzey baskındır. Kütleyi tahmin ettikten sonra teklif formuna DXF veya STEP yükleyin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik notu gelir. Gönderim teklifteki Incoterm ile dünya geneli.",
      ],
    },
  ],
  faq: [
    {
      question: "Bu ağırlık sevkiyat için bağlayıcı mı?",
      answer: "Hayır. Planlama tahminidir. Gerçek kütle nesting, iç kesim ve yüzeye göre değişir.",
    },
    {
      question: "Araç hangi birimleri kullanır?",
      answer: "Ölçüde milimetre, yoğunlukta g/cm³, çıktıda kilogram veya gram.",
    },
    {
      question: "Bükülü kutu hesaplanır mı?",
      answer: "Açınım alanı ve kalınlıktan yaklaşın veya atölye tahmini için RFQ ile STEP gönderin.",
    },
    {
      question: "Kilogram fiyatı yayımlıyor musunuz?",
      answer: "Hayır. Fiyatlar çiziminize ve proses rotasına göre teklifte yazılır.",
    },
  ],
  updated: "26 Kasım 2026",
};
