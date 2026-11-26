import type { SeoPage } from "@/content/seo/types";

export const cncMachiningTr: SeoPage = {
  slug: "cnc-machining",
  kind: "service",
  hub: "/cnc-parts",
  related: ["sheet-metal-fabrication", "laser-cutting", "sheet-metal-bending", "/cnc-parts"],
  meta: {
    title: "CNC işleme hizmeti",
    description:
      "Özel metal parçalarda CNC freze ve torna. STEP ve PDF gönderin. 2 iş günü içinde teklif ve üretilebilirlik notu.",
  },
  crumb: "CNC işleme",
  kicker: "HİZMET",
  h1: "Özel metal parçalar için CNC işleme",
  directAnswer:
    "CNC işleme, çubuk veya plakadan programlı freze ve torna ile malzeme kaldırarak çiziminize uyar. Corivo STEP ve PDF’ten 2 iş günü içinde fiyat, termin ve üretilebilirlik notu verir; aynı talepte sac parçalar da varsa CNC ile birleştirebilir.",
  keyFacts: [
    { label: "Prosesler", value: "Freze, torna, diş ve geçmeler çizime göre" },
    { label: "Tercih edilen dosyalar", value: "STEP + toleranslı PDF; yalnız DXF 3D parça için zayıf" },
    { label: "Malzemeler", value: "Alüminyum, St37/S235, paslanmaz; diğerleri duruma göre", verify: true },
    { label: "Sınır", value: "Karmaşık çok eksen veya havacılık sertifikalı iş duruma göre / reddedilebilir" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "CNC RFQ’da ne olmalı",
      paragraphs: [
        "CNC teklifi 3D katı (STEP) ve tolerans, diş, yüzey ve kontrol datumu taşıyan 2D PDF ister. Tek yüzün DXF’si prizmatik parça için yetmez. Stok ölçüsü, malzeme kalitesi ve varsa ısıl işlem açık yazılmalı. Yalnız kritik yüzler varsa onları işaretleyin; her ölçüye sıkı tolerans maliyeti artırır, işlevi iyileştirmez.",
        "Dişler standart çağrıyla gelmeli (ör. M8×1.25-6H). Geçmeler (H7/g6 vb.) eşlenen parçayı veya sınıfı çizimde ister. Derin cep, ince cidar ve küçük iç yarıçap takım ve süreyi belirler—yarıçap açılabilecekse yazın.",
      ],
    },
    {
      heading: "Freze, torna ve karma rota",
      paragraphs: [
        "Freze prizmatik parça, cep, yüzey ve delik dizisine uyar. Torna çubuktan yuvarlak parçaya uyar. Birçok parça ikisini ister: çap torna, düzler ve enine delikler freze. CNC plakaya bağlanan sac kapaklar tek RFQ’da gelsin; üretilebilirlik incelemesinde delik dizileri hizalı kalsın.",
        "Prototip adetleri çoğu zaman plakadan 3 eksen frezede yürür. Tekrarlayan yıllık hacim fikstür gerektirebilir. İlk PO küçük olsa bile tahmini yıllık adedi yazın—teklif siteye fiyat basmadan o yolu yansıtabilir.",
      ],
    },
    {
      heading: "Tolerans ve kontrol",
      paragraphs: [
        "Çizim kritik olmayan ölçülerde suskunsa ISO 2768-m yaygın genel toleranstır; kritik ölçüler açık limit ister. Konum, düzlemsellik, diklik montajı etkiliyorsa geometrik tolerans yazılmalı. Her Corivo sevkiyatında ölçü raporu ve fotoğraf vardır; malzeme sertifikası siparişte istenirse mallarla gider.",
        "Parça partner atölye yeteneğinin dışındaysa—karmaşık çok eksen, havacılık sertifikalı veya çok sıkı tolerans—Corivo bunu teklif penceresinde söyler. RFQ’yu sonradan başarısız kabul etmek yerine baştan net tutar.",
      ],
    },
    {
      heading: "Corivo CNC teklifi nasıl işler",
      paragraphs: [
        "Teklif formundan STEP ve PDF’i malzeme, adet ve yıllık adetle gönderin. Eksiksiz talepte 2 iş günü içinde yanıt alırsınız. Üretim termini teklif penceresinden ayrı olarak teklifte yazar. Gönderim EXW, FCA veya DAP ile teklifte basıldığı gibi dünya geneli. Ödeme şartları teklifte yazıldığı üzere üretim öncesi avans ve sevkiyat öncesi bakiye—siteden tahsilat yok.",
      ],
    },
  ],
  faq: [
    {
      question: "Yalnız STEP mi, PDF de mi?",
      answer: "İkisi de. STEP şekli; PDF tolerans, diş ve notları taşır. STEP tek başına bunları net iletmez.",
    },
    {
      question: "Paslanmaz ve alüminyum işlenir mi?",
      answer: "Yaygın kalitelerde evet. Kaliteyi yazın. Alışılmadık alaşımlar duruma göre tekliflenir.",
    },
    {
      question: "CNC ve sac tek teklifte olur mu?",
      answer: "Evet—seti birlikte gönderin, oturmayı notlarda anlatın.",
    },
    {
      question: "Parça çok karmaşıksa?",
      answer:
        "Partner yeteneği dışındaysa teklif penceresinde bildirilir. Çok eksen veya havacılık sertifikalı iş duruma göre veya reddedilir.",
    },
    {
      question: "Teklif ne kadar sürer?",
      answer: "Eksiksiz talepte 2 iş günü.",
    },
  ],
  updated: "26 Kasım 2026",
};
