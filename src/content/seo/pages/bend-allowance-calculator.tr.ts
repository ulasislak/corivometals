import type { SeoPage } from "@/content/seo/types";

export const bendAllowanceCalculatorTr: SeoPage = {
  slug: "bend-allowance-calculator",
  kind: "tool",
  toolId: "bend-allowance",
  hub: "/sheet-metal-fabrication",
  related: ["sheet-metal-bending", "glossary", "sheet-metal-dfm-guidelines", "laser-cutting", "/request-a-quote"],
  meta: {
    title: "Sac büküm payı hesaplama aracı",
    description:
      "Kalınlık, radyüs, açı ve K-faktöründen büküm payı, büküm düşümü ve açınım boyu tahmini. Planlama aracıdır; atölye föyü esastır.",
  },
  crumb: "Büküm payı hesabı",
  kicker: "ARAÇ",
  h1: "Büküm payı hesaplama aracı",
  directAnswer:
    "Büküm payı, bükümden geçen tarafsız eksenin yay uzunluğudur ve katlanmış ölçüleri açınım boyuna çevirmek için kullanılır. Kalınlık, iç radyüs, büküm açısı ve K-faktörünü girerek pay ve düşümü tahmin edin. Corivo sonucu yalnızca planlama kontrolü sayar; üretimde her zaman atölyenin proses föyü geçerlidir.",
  keyFacts: [
    { label: "Büküm payı", value: "BA = açı (rad) × (iç radyüs + K × kalınlık)" },
    { label: "Büküm düşümü", value: "BD = 2 × (iç radyüs + kalınlık) × tan(açı / 2) − BA" },
    { label: "Tipik K-faktörü aralığı", value: "Malzeme, radyüs ve takıma göre kabaca 0,3 ile 0,5", verify: true },
    { label: "Girdiler", value: "Kalınlık, iç radyüs, büküm açısı, K-faktörü, kenar uzunlukları" },
    { label: "Proses föyü değildir", value: "Atölye takımı ve malzeme partisi gerçek değerleri kaydırabilir" },
  ],
  sections: [
    {
      heading: "Büküm payı ne demek",
      paragraphs: [
        "Düz sac büküldüğünde dış yüzey uzar, iç yüzey sıkışır. İkisi arasında orijinal uzunluğunu koruyan bir tarafsız eksen bulunur. Büküm payı, bu tarafsız eksenin bükümden geçen uzunluğudur ve tek bir bükümün tükettiği düz malzeme miktarıdır. Düz kenar uzunlukları ile büküm paylarını toplamak, kesilecek blankın boyunu verir.",
        "Bu sayfadaki hesaplayıcı standart geometrik formülü kullanır. Büküm açısı, sacın döndüğü açıdır; yani dik bir kenar 90 derecelik bükümdür. K-faktörü, tarafsız eksen konumunun kalınlığa oranıdır ve malzemeye, kalınlığa, radyüse ve kullanılan takıma bağlı olduğu için en belirsiz girdidir.",
      ],
    },
    {
      heading: "Büküm payı ve büküm düşümü",
      paragraphs: [
        "Büküm payı ve büküm düşümü aynı davranışı iki yönden tarif eder. Pay, büküme kadar ölçülen düz kenar uzunluklarına eklenir. Düşüm, birçok çizimin ölçülendirildiği dış ölçülerin toplamından çıkarılır. Yanlış kabulün kullanılması, blankın fazla uzun veya kısa çıkmasının yaygın nedenidir.",
        "RFQ'da CAD açınımınızın hangi kabulü kullandığını yazın. CAD açınım üretiyorsa DXF olarak gönderin ve K-faktörü veya düşüm tablosunun referans sayılması gerektiğini belirtin. Atölye kendi takımına göre teyit eder; üretilebilirlik notu açınım boyunun gönderdiğinizden farklı olduğu yerleri işaretler.",
      ],
      bullets: [
        "Büküm düşümü ile dış ölçüleri, büküm payı ile iç uzunlukları kullanın.",
        "Model ve çizim arasında kalınlık ve radyüsü tutarlı tutun.",
        "Standart dışı takım veya radyüs varsa PDF'e yazın.",
      ],
    },
    {
      heading: "Hesaplayıcının sınırları",
      paragraphs: [
        "Hesaplayıcı belirli bir partinin geri yaylanmasını, atölyenin kullandığı kalıp açıklığını veya belirli bir paslanmaz bobinin nasıl davrandığını bilemez. Gerçek büküm sonuçları malzeme kalitesine, tane yönüne ve radyüs/kalınlık oranına göre değişir. Sıkı radyüslü küçük bükümler ve sert temperler en değişkenleridir. Sonucu, açınımı göndermeden önce makul olup olmadığını kontrol etmenin bir yolu olarak görün.",
        "Açınım boyu hataları çok bükümlü parçalarda birikir. Birkaç bükümlü bir parçada hata, montajda deliklerin hizalanmayacağı seviyeye çıkabilir. Kritik geçmelerde kilit ölçülere tolerans verin; ölçü raporunda hangi ölçülerin kontrol edildiği teklifte belirtilsin.",
      ],
    },
    {
      heading: "Hesaplamadan Corivo teklifine",
      paragraphs: [
        "Açınım boyu doğru görünüyorsa teklif formuna açınım DXF'ini, katlanmış STEP'i ve büküm açıları, radyüsler ve yönleri içeren PDF'i yükleyin. 2 iş günü içinde fiyat, üretim termini ve büküm sırası, minimum kenar uzunluğu ve rahatlatma kesikleri hakkında üretilebilirlik yorumları içeren yanıt alırsınız.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Kenar, radyüs ve takımın nasıl incelendiği için sac büküm sayfasına; tasarım kuralları için DFM kılavuzuna bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Hangi K-faktörünü kullanmalıyım?",
      answer: "Birçok tasarımcı 0,3 ile 0,5 arasında başlar. Atölyenin K-faktörü malzemeye, radyüse ve takıma bağlıdır; bu yüzden her değeri tahmin sayın.",
    },
    {
      question: "Bu, büküm düşümü ile aynı şey mi?",
      answer: "İlişkilidirler. Düşüm dış ölçülerden çıkarılır; pay iç uzunluklara eklenir. Araç ikisini de gösterir.",
    },
    {
      question: "Parçalarım hesaplanan açınım boyuyla eşleşir mi?",
      answer: "Yaklaşık olarak. Nihai blank boyunu atölyenin proses föyü belirler; teklif belirgin farkları işaretler.",
    },
    {
      question: "DXF açınım göndermeli miyim?",
      answer: "Evet. Katlanmış STEP ve büküm açıları, radyüsler ve yönleri listeleyen PDF ile birlikte açınım DXF'ini gönderin.",
    },
    {
      question: "Teklif ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
