import type { SeoPage } from "@/content/seo/types";

export const sheetMetalFromTurkeyTr: SeoPage = {
  slug: "sheet-metal-from-turkey",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "turkey-vs-china-vs-eastern-europe-sourcing",
    "how-to-get-a-sheet-metal-quote",
    "sheet-metal-fabrication",
    "laser-cutting",
    "/request-a-quote",
  ],
  meta: {
    title: "Türkiye'den sac parça tedariki: alıcı rehberi",
    description:
      "Türkiye'de üretilen lazer kesim, büküm ve kaynaklı sac parça alırken bilinmesi gerekenler: dosyalar, malzeme, teslim şartları, teklif adımları.",
  },
  crumb: "Türkiye'den sac",
  kicker: "REHBER",
  h1: "Türkiye'den sac parça tedariki",
  directAnswer:
    "Türkiye'nin Avrupa ile Asya arasında konumlanan lazer kesim, büküm, kaynak ve CNC işleme sektörü yerleşiktir. Yurt dışındaki alıcılar çizimleri çevrimiçi gönderip anlaşılan Incoterm ile parça alabilir. Corivo teklifleri 2 iş günü içinde koordine eder ve üretimi Türkiye'deki iş ortağı atölyelerde yürütür.",
  keyFacts: [
    { label: "Tipik prosesler", value: "Lazer kesim, büküm, kaynak, CNC işleme, toz boya" },
    { label: "Konum avantajı", value: "Avrupa, Orta Doğu ve Kuzey Afrika'ya coğrafi olarak yakın" },
    { label: "AB ile ticaret ilişkisi", value: "Türkiye'nin AB ile sanayi ürünlerinde gümrük birliği vardır; ürününüz için güncel kuralları kontrol edin", verify: true },
    { label: "Malzeme adları", value: "DKP, HRP, St37, St52 yerel kısaltmalardır; RFQ'da EN/ISO kalitesini belirtin" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Alıcılar neden sac için Türkiye'ye bakar",
      paragraphs: [
        "Türkiye'de otomotiv, beyaz eşya, inşaat, enerji ve makine müşterilerine hizmet veren geniş bir yerel metal işleme sanayii vardır. Ülke dışındaki alıcı için bu, lazer kesilmiş ve bükülmüş sac parçalar, kaynaklı şasi ve muhafazalar ile işlenmiş bileşenlerde deneyimli bir atölye havuzu anlamına gelir. Avrupa ve Orta Doğu'ya yakınlık, birçok varış noktası için Uzak Doğu'dan tedarike göre taşıma süresini kısaltır.",
        "Alıcılar Türkiye'yi sıklıkla diğer bölgelere alternatif veya tamamlayıcı olarak değerlendirir; özellikle daha kısa nakliye rotaları ve küçük ile orta seri esnekliği istediklerinde. Projenize uyup uymadığı adede, toleransa, zamanlamaya ve varış pazarına bağlıdır. Bölge karşılaştırması için Türkiye, Çin ve Doğu Avrupa tedarik rehberimize bakın.",
      ],
    },
    {
      heading: "Yurt dışından Türk atölyeleriyle çalışmak",
      paragraphs: [
        "Bir atölyeyle uzaktan çalışmak net dosyalara bağlıdır. Kesim için DXF açınım, bükülmüş ve kaynaklı parçalar için STEP; malzeme, kalınlık, yüzey, tolerans ve estetik yüzeyleri içeren PDF gönderin. Türk uygulamasında DKP (soğuk haddelenmiş sac), HRP (sıcak haddelenmiş sac) ve St37 veya St52 (yapısal çelik) gibi yerel kısaltmalar sık görülür. Karışıklığı önlemek için RFQ'nuzda eşdeğer EN veya ISO kalitesini yazın.",
        "Çizimler net olduğunda dil ve birimler nadiren projeyi engeller. Milimetre, standart diş tanımları ve ISO 2768 genel tolerans notu belirsizliğin çoğunu giderir. Daha sıkı tolerans önemliyse o ölçüyü işaretleyin ve PDF'te belirtin. Corivo tek iletişim noktası olarak çalışır; her atölyeyi kendiniz yönetmeniz gerekmez.",
      ],
      bullets: [
        "Her bükümlü parça için açınım DXF, katlanmış STEP ve PDF gönderin.",
        "DKP veya St37 gibi yerel adların yanına EN/ISO kalitesini yazın.",
        "RFQ'ya varış ülkesini ve tercih ettiğiniz Incoterm'i ekleyin.",
      ],
    },
    {
      heading: "Nakliye, gümrük ve belgeler",
      paragraphs: [
        "Teslimat, teklifteki Incoterm'e göre yapılır; örneğin EXW, FCA veya DAP. Navlun ve ithalat gümrükleme işini kimin yönetmesini istediğinize göre şartı seçin. Gümrük gereklilikleri varış noktasına, ürüne ve malzeme menşeine bağlıdır; bu yüzden tarih vermeden önce gümrük müşavirinizle teyit edin. Nakliye süreleri moda ve varış noktasına bağlıdır; bu rehber bir süre taahhüdü vermez.",
        "Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Sektörünüz menşe şahadetnamesi veya uygunluk beyanı gibi belirli belgeler gerektiriyorsa RFQ aşamasında yazın; teklif bunları ele alabilsin.",
      ],
    },
    {
      heading: "Corivo teklifiyle başlamak",
      paragraphs: [
        "Çizimlerinizi teklif formuna yükleyin; malzemeyi, bu siparişin adedini ve yıllık adedi, varış noktasını ve tercih ettiğiniz Incoterm'i belirtin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumları içeren yanıt alırsınız. Üretim iş ortağı atölyelerde yapılır. Göndermeniz gerekenlerin kontrol listesi için sac teklifi nasıl alınır rehberine, tasarım ipuçları için DFM kılavuzuna bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Sipariş vermek için Türkçe bilmem gerekir mi?",
      answer: "Hayır. Milimetre cinsinden, net notlu çizimler gönderin; koordinasyonu Corivo yürütür. Yerel malzeme adlarının yanına EN/ISO kalitesini yazın.",
    },
    {
      question: "DKP, HRP ve St37 nedir?",
      answer: "DKP soğuk haddelenmiş çelik sacdır, HRP sıcak haddelenmiş çelik sacdır, St37 yaygın bir yapısal çelik tanımıdır. RFQ'nuzda tam kaliteyi teyit edin.",
    },
    {
      question: "Hangi Incoterm'ler mevcut?",
      answer: "Teslimat teklifteki Incoterm'e göre yapılır. RFQ'da tercih ettiğiniz şartı ve varış noktasını yazın.",
    },
    {
      question: "Malzeme sertifikası alabilir miyim?",
      answer: "Malzeme sertifikası siparişte talep edilirse verilir.",
    },
    {
      question: "Teklif ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
