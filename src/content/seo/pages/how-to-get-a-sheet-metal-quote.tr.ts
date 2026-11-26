import type { SeoPage } from "@/content/seo/types";

export const howToGetASheetMetalQuoteTr: SeoPage = {
  slug: "how-to-get-a-sheet-metal-quote",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "sheet-metal-dfm-guidelines",
    "laser-cutting",
    "sheet-metal-bending",
    "sheet-metal-from-turkey",
    "/request-a-quote",
  ],
  meta: {
    title: "Sac teklifi nasıl alınır: dosya kontrol listesi",
    description:
      "Doğru sac teklifi için gönderilecekler: DXF, STEP, PDF, malzeme, kalınlık, yüzey, adet ve Incoterm. 2 iş günü içinde yanıt.",
  },
  crumb: "Teklif nasıl alınır",
  kicker: "REHBER",
  h1: "Doğru bir sac teklifi nasıl alınır",
  directAnswer:
    "Doğru bir sac teklifi için açınım DXF veya STEP model, malzeme, kalınlık, yüzey ve tolerans içeren PDF çizim, sipariş adedi, yıllık tahmin ve teslimat noktası gerekir. Bunları Corivo'ya gönderin; 2 iş günü içinde fiyat, termin ve üretilebilirlik yorumları içeren yanıt alırsınız.",
  keyFacts: [
    { label: "Geometri dosyaları", value: "Kesim için DXF/DWG açınım; bükümlü veya kaynaklı parçalar için STEP" },
    { label: "Çizim", value: "Malzeme, kalınlık, yüzey, tolerans ve estetik yüzeyleri içeren PDF" },
    { label: "Adetler", value: "Sipariş adedi ve tahmini yıllık adet" },
    { label: "Teslimat", value: "Varış noktası ve tercih edilen Incoterm" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Atölyenin gerçekten ihtiyaç duyduğu dosyalar",
      paragraphs: [
        "Atölye geometriden ve talimatlardan teklif verir. Geometri, lazer kesim için açınım DXF veya DWG'den; bükümlü, kaynaklı veya işlenmiş parçalar için STEP modelden gelir. Talimatlar ise malzeme, kalınlık, yüzey, tolerans, diş ve estetik yüzeyleri belirten PDF çizimden gelir. Her kaynak farklı soruları yanıtlar; yalnızca birini göndermek genellikle bir netleştirme turu başlatır.",
        "Dosya başına tek parça tutun veya katmanları net adlandırın. Milimetre kullanın, çift çizgileri ve yapı geometrisini silin, tüm konturları kapatın. Montaj varsa her parçayı adediyle listeleyen bir malzeme listesi ekleyin. Temiz bir paket ilk yanıtta bir gün veya daha fazlasını kazandırır ve üretimdeki hataları azaltır.",
      ],
    },
    {
      heading: "Fiyatı değiştiren ayrıntılar",
      paragraphs: [
        "Birkaç girdi teklifi güçlü biçimde etkiler: malzeme kalitesi, kalınlık, yüzey, adet ve tolerans. Yalnızca “çelik” veya “paslanmaz” değil, kaliteyi yazmak belirsizliği önler. Çelikte DKP, HRP veya St37 gibi yerel kısaltmalara eşdeğer EN veya ISO kalitesi eşlik etmelidir. Kalınlık kesim hızını, büküm kuvvetini ve malzeme maliyetini belirler.",
        "Adet iki şekilde önemlidir. Sipariş adedi nesting'i ve hazırlık dağılımını belirler; yıllık tahmin ise atölyeye tekrara uygun bir rota hazırlayıp hazırlamayacağını söyler. Yıllık rakam kaba olsa bile ikisini de yazın. Prosesin normalde tuttuğundan sıkı toleranslar muayene ve bazen ikincil operasyon ekler; bu yüzden yalnızca fonksiyonel ölçüleri kritik işaretleyin.",
      ],
      bullets: [
        "Her parça için malzeme kalitesini ve kalınlığı yazın.",
        "Yüzeyi, renk referansını ve maskelemeyi belirtin.",
        "Sipariş adedi, tahmini yıllık adet ve hedef tarihi ekleyin.",
      ],
    },
    {
      heading: "Sürprizleri önleyen notlar",
      paragraphs: [
        "Büküm izleri, kaynak dikişleri ve taşıma çizikleri gizli yüzeylere düşsün diye estetik yüzeyleri işaretleyin. Sızdırmaz kaynak, tane yönü, koruyucu film veya ambalaj gibi özel şartları yazın. Üretim dosyası paylaşılmadan önce NDA gerekiyorsa belirtin ve tek sayfalık bir yer tutucu PDF gönderin.",
        "Varış noktasını ve tercih ettiğiniz Incoterm'i yazın; örneğin EXW, FCA veya DAP. Teslimat teklifteki Incoterm'e göre yapılır ve gümrük belgeleri varış noktanıza bağlıdır. Sertifika, belirli bir muayene veya belirli belgeler gerekiyorsa RFQ aşamasında isteyin; teklif bunları ele alsın.",
      ],
    },
    {
      heading: "Talebi gönderdikten sonra ne olur",
      paragraphs: [
        "Dosyalarınızı teklif formuna yükleyin. Corivo paketi inceler ve 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumlarıyla yanıt verir. Bu yorumlar kesilmesi zor, çarpılma olasılığı yüksek veya başka prosesle daha iyi üretilecek özellikleri işaretler ve siparişten önce değişiklik önerir.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Göndermeden önce tasarım ipuçları için DFM kılavuzuna, büküme özgü ayrıntılar için büküm sayfasına bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Teklif için PDF yeterli mi?",
      answer: "PDF teklifi başlatabilir ancak doğru kesim ve büküm için DXF veya STEP gerekir. Mümkünse ikisini de gönderin.",
    },
    {
      question: "Malzeme listesi göndermem gerekir mi?",
      answer: "Birkaç parçalı montajlarda evet. Her parçayı, malzemeyi, kalınlığı ve adedi listeleyin.",
    },
    {
      question: "Kaba bir yıllık adetle teklif alabilir miyim?",
      answer: "Evet. Tahmin atölyenin tekrara uygun rota planlamasına yardımcı olur; buna taahhüt vermeniz gerekmez.",
    },
    {
      question: "Çizimim eksikse ne olur?",
      answer: "Elinizdekini gönderin ve bilinmeyenleri yazın. Teklif varsayımları ve soruları listeler.",
    },
    {
      question: "Teklif ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
