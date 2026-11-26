import type { SeoPage } from "@/content/seo/types";

export const materialDensityTableTr: SeoPage = {
  slug: "material-density-table",
  kind: "tool",
  hub: "/sheet-metal-fabrication",
  related: [
    "sheet-metal-weight-calculator",
    "carbon-steel-sheet",
    "stainless-steel-sheet",
    "aluminum-sheet",
    "copper-brass",
  ],
  meta: {
    title: "Sac ve CNC için malzeme yoğunluk tablosu",
    description:
      "Kütle planlaması için DKP, HRP, St37, paslanmaz, alüminyum, bakır ve pirinç yoğunlukları (g/cm³, kg/m³). 2 iş günü içinde teklif.",
  },
  crumb: "Yoğunluk tablosu",
  kicker: "TABLO",
  h1: "Sac ve işlenmiş parçalar için malzeme yoğunluk tablosu",
  directAnswer:
    "Yoğunluk birim hacmin kütlesidir ve parça hacmini ağırlığa çevirir. Yaygın el kitabı değerleri yumuşak çelik için yaklaşık 7,85 g/cm³, 304 paslanmaz için 8,0, alüminyum için 2,70, bakır için 8,96 ve pirinç için 8,5'tir. Corivo bunları yalnızca planlama için kullanır; alaşım varyantları hafif farklıdır.",
  keyFacts: [
    { label: "Yumuşak / karbon çelik (DKP, HRP, St37)", value: "≈ 7,85 g/cm³ (7.850 kg/m³)", verify: true },
    { label: "Paslanmaz çelik 304", value: "≈ 8,00 g/cm³ (8.000 kg/m³)", verify: true },
    { label: "Paslanmaz çelik 316", value: "≈ 8,00 g/cm³ (8.000 kg/m³)", verify: true },
    { label: "Alüminyum (5052, 6061)", value: "≈ 2,70 g/cm³ (2.700 kg/m³)", verify: true },
    { label: "Bakır", value: "≈ 8,96 g/cm³ (8.960 kg/m³)", verify: true },
    { label: "Pirinç", value: "Alaşıma göre ≈ 8,4–8,7 g/cm³", verify: true },
  ],
  sections: [
    {
      heading: "Yoğunluk tablosu nasıl kullanılır",
      paragraphs: [
        "Yoğunluk tablosu, sipariş vermeden önce parça kütlesini tahmin etmenizi sağlar. Parça hacmini santimetreküp olarak g/cm³ cinsinden yoğunlukla çarpın; gram elde edersiniz, kilogram için 1.000'e bölün. Sacda hacim; boy, en ve kalınlığın çarpımıdır ve hepsi aynı birimde olmalıdır. Örnek olarak 1 mm kalınlığında 1 m² sac 1.000 cm³ hacme sahiptir; 7,85 g/cm³ yoğunluktaki yumuşak çelik yaklaşık 7,85 kg eder.",
        "Kütle tahminleri koli, navlun planı, elleçleme kararları ve tedarikçi kalemlerini çapraz kontrol için kullanışlıdır. Tartı belgesi değildir. Gerçek kütle iç kesimlere, kerf'e, kaplamaya ve parçanın nesting'ine bağlıdır; bu yüzden tabloyu ilk adım, ağırlık hesaplayıcısını ise uygulamanın kolay yolu olarak görün.",
      ],
    },
    {
      heading: "Aynı malzeme neden farklı değerler verebilir",
      paragraphs: [
        "Yayımlanan yoğunluklar yuvarlanmış el kitabı değerleridir ve alaşımlar değişir. Paslanmaz kaliteler bileşime göre hafif farklıdır. Alüminyum alaşımları kabaca 2,65 ile 2,80 g/cm³ arasındadır. Pirinç, bakır-çinko oranı değiştiği için bir aralığa yayılır. Galvanizli çelik, çinko tabakası ince olduğu için planlamada genellikle düz çelik sayılır; yine de çok az kütle ekler.",
        "Uygulamanız tam kütleye bağlıysa, örneğin dengeli dönen parçalar veya sözleşmesel ağırlık sınırları için, malzeme sertifikası isteyin ve numuneyi tartın. Yalnızca el kitabı yoğunluğuna güvenmeyin. Ağırlık şartını RFQ'da yazın; atölye bunun önemli olduğunu bilsin ve seçenekleri konuşabilsin.",
      ],
      bullets: [
        "Planlama hesaplarında galvanizli sac için çelik yoğunluğunu kullanın.",
        "Pirinç ve alüminyum değerlerini tek sayı değil aralık olarak değerlendirin.",
        "Kalın toz boya gibi kaplama kütlesi önemliyse ayrıca ekleyin.",
      ],
    },
    {
      heading: "Yoğunluk ve proses seçimi",
      paragraphs: [
        "Yoğunluk yalnızca sevkiyat ağırlığını etkilemez. Alüminyum parçalar eşdeğer çelik parçaların üçte biri kütlededir; bu, elleçleme ve taşıma ekipmanında önemlidir. Bakır ve pirinç kilogram başına ağır ve pahalıdır; ince kesitler veya alternatif tasarımlar kazandırabilir. Paslanmaz, kütlece karbon çeliğine benzer ancak genellikle daha pahalıdır.",
        "Malzemeleri karşılaştırırken kalınlık değişimini de hesaba katın. Sertleştirici bir kenar veya nervür daha ince sac kullanmaya izin verebilir ve daha yüksek yoğunluk veya fiyatı dengeleyebilir. Karbon çeliği, paslanmaz, alüminyum ile bakır ve pirinç sayfalarımız imalat ve yüzey işlemindeki dengeleri anlatır.",
      ],
    },
    {
      heading: "Tablodan Corivo teklifine",
      paragraphs: [
        "Kütleyi planlamak için tabloyu ve sac ağırlık hesaplama aracını kullanın; sonra teklif formuna DXF veya STEP ile PDF yükleyin. Malzemeyi, kaliteyi, kalınlığı ve adetleri belirtin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumları içeren yanıt alırsınız.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır.",
      ],
    },
  ],
  faq: [
    {
      question: "Yumuşak çeliğin yoğunluğu nedir?",
      answer: "Yaygın el kitabı değeri olarak yaklaşık 7,85 g/cm³, yani 7.850 kg/m³. Alaşımlar hafif değişir.",
    },
    {
      question: "Paslanmaz çelik yumuşak çelikten ağır mı?",
      answer: "Biraz. 304 ve 316 yaklaşık 8,0 g/cm³, yumuşak çelik yaklaşık 7,85'tir.",
    },
    {
      question: "Alüminyum çelikten ne kadar hafif?",
      answer: "Kabaca üçte biri. Alüminyum yaklaşık 2,70 g/cm³, çelik yaklaşık 7,85'tir.",
    },
    {
      question: "Bu değerleri sözleşmesel ağırlık için kullanabilir miyim?",
      answer: "Hayır. Planlama değerleridir; tam kütle önemliyse malzeme sertifikası isteyin ve numuneyi tartın.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
