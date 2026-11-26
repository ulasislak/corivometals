import type { SeoPage } from "@/content/seo/types";

export const iso2768ToleranceTableTr: SeoPage = {
  slug: "iso-2768-tolerance-table",
  kind: "tool",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-milling", "cnc-turning", "glossary", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "ISO 2768 tolerans tablosu (f, m, c, v)",
    description:
      "Doğrusal ölçüler için ISO 2768-1 genel tolerans sınıfları f, m, c, v ve çizimde nasıl belirtileceği. 2 iş günü içinde teklif.",
  },
  crumb: "ISO 2768 tablosu",
  kicker: "TABLO",
  h1: "ISO 2768 genel tolerans tablosu",
  directAnswer:
    "ISO 2768-1, tek tek limiti yazılmayan doğrusal ve açısal ölçüler için dört sınıfta genel tolerans tanımlar: ince (f), orta (m), kaba (c) ve çok kaba (v). Çizimdeki “ISO 2768-m” notu, toleransı yazılmamış her ölçüye orta sınıfı uygular. Corivo işlenmiş ve sac parçaları teklif ederken bu notu okur.",
  keyFacts: [
    { label: "Sınıflar", value: "f (ince), m (orta), c (kaba), v (çok kaba)" },
    { label: "Orta, 6–30 mm", value: "±0,2 mm", verify: true },
    { label: "Orta, >30–120 mm", value: "±0,3 mm", verify: true },
    { label: "Orta, >120–400 mm", value: "±0,5 mm", verify: true },
    { label: "İnce, 6–30 mm", value: "±0,1 mm", verify: true },
    { label: "Kaba, 6–30 mm", value: "±0,5 mm", verify: true },
    { label: "Geometrik sınıflar", value: "ISO 2768-2 doğrusallık, düzlemsellik gibi özellikler için H, K, L kullanır", verify: true },
  ],
  sections: [
    {
      heading: "ISO 2768 neleri kapsar",
      paragraphs: [
        "ISO 2768 genel tolerans standardıdır. Birinci kısmı, yanında tolerans yazılmayan doğrusal ölçüler ve açılar için izin verilen sapmaları verir. İkinci kısmı doğrusallık, düzlemsellik, diklik ve salgı gibi geometrik özellikler için genel toleransları verir. Kullanılması, çizimde her ölçüye tek tek tolerans yazma ihtiyacını ortadan kaldırır.",
        "Standart, normal atölye hassasiyetinde talaşlı imalat veya sac şekillendirmeyle üretilen parçalar için tasarlanmıştır. Fonksiyonel özelliklerdeki özel toleransların yerini almaz. Kritik geçmeler, rulman yuvaları ve eşleşen yüzeyler kendi limitlerini taşımalı; gerisini ISO 2768 karşılamalıdır.",
      ],
    },
    {
      heading: "Dört sınıf ve tipik doğrusal değerler",
      paragraphs: [
        "Sınıf harfi, genel toleransın ne kadar sıkı olduğunu belirler. Aşağıdaki yaygın değerler milimetre cinsinden doğrusal ölçüler içindir ve ölçü büyüdükçe izin verilen sapma genişler. Hızlı referans olarak verilmiştir; sözleşmede kullanmadan önce standardın güncel baskısıyla kontrol edilmelidir.",
        "İnce (f): 6 mm'ye kadar yaklaşık ±0,05, 6–30 mm arası ±0,1, 30–120 mm arası ±0,15 mm. Orta (m): 6 mm'ye kadar yaklaşık ±0,1, 6–30 arası ±0,2, 30–120 arası ±0,3, 120–400 arası ±0,5 mm. Kaba (c): 6 mm'ye kadar yaklaşık ±0,2 ile ±0,3, 6–30 arası ±0,5, 30–120 arası ±0,8, 120–400 arası ±1,2 mm. Çok kaba (v): 3–6 mm arası ±0,5, 6–30 arası ±1, 30–120 arası ±1,5 mm.",
      ],
      bullets: [
        "İşlenmiş parçalarda genellikle orta veya ince sınıf belirtilir.",
        "Lazer kesilmiş ve bükülmüş sac parçalarda genellikle orta veya kaba sınıf belirtilir.",
        "Sınıfı yalnızca kesim hassasiyetine değil büküm ve kaynak çarpılmasına göre de kontrol edin.",
      ],
    },
    {
      heading: "Çizimde nasıl belirtilir",
      paragraphs: [
        "Antet bloğuna standardı ve sınıfı ekleyin; örneğin “Genel toleranslar ISO 2768-m”. İsterseniz geometrik sınıfı da yazın: “ISO 2768-mK”. Genel tolerans notu olmazsa atölye kendi standardını uygulayabilir; bu da beklediğinizden farklı olabilir. Tek bir not bu belirsizliği ortadan kaldırır.",
        "İşe yarayan en gevşek sınıfı kullanın. Daha sıkı sınıflar daha dikkatli bağlama, kontrol ve bazen ikincil operasyon gerektirir; maliyet artar. Sac parçalarda büküm ve kaynak kendi değişimini ekler; şekillendirilmiş özelliklerde kaba veya orta sınıf, ince sınıftan çoğunlukla daha gerçekçidir.",
      ],
    },
    {
      heading: "Corivo tekliflerde tolerans notlarını nasıl kullanır",
      paragraphs: [
        "Teklif formuna tolerans notunuzu içeren PDF'i ve STEP'i yükleyin. Üretilebilirlik notu, belirtilen toleransın proses için zor göründüğü özellikleri yorumlar; gevşetmeyi veya özelliği ayrı operasyona bölmeyi önerir. 2 iş günü içinde yanıt alırsınız.",
        "Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Ölçü raporunda hangi ölçülerin yer alması gerektiğini yazın. Teslimat teklifteki Incoterm'e göre yapılır. Prosese özel notlar için CNC freze ve torna sayfalarına, ilgili terimler için sözlüğe bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "ISO 2768-m ne anlama gelir?",
      answer: "Çizimde toleransı yazılmamış tüm doğrusal ve açısal ölçülere orta genel tolerans sınıfını uygular.",
    },
    {
      question: "ISO 2768 özel toleransların yerini alır mı?",
      answer: "Hayır. Kritik özellikler kendi toleranslarını taşımalıdır; ISO 2768 tek tek limiti olmayan ölçüleri kapsar.",
    },
    {
      question: "Sac parçalar için hangi sınıf uygun?",
      answer: "Büküm ve kaynak değişim eklediği için orta veya kaba yaygındır. Parçalarınız için teklifte teyit edin.",
    },
    {
      question: "Tablodaki değerler resmi mi?",
      answer: "Hızlı referanstır. Sözleşmesel kullanımdan önce ISO 2768'in güncel baskısını kontrol edin.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
