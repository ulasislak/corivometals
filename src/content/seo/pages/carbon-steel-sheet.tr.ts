import type { SeoPage } from "@/content/seo/types";

export const carbonSteelSheetTr: SeoPage = {
  slug: "carbon-steel-sheet",
  kind: "material",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "welding-assemblies", "surface-finishing", "material-density-table"],
  meta: {
    title: "Karbon çelik sac: DKP, HRP, galvaniz",
    description:
      "DKP, HRP ve galvaniz karbon çelik sac çizime göre lazer kesim, büküm ve kaynak. 2 iş günü içinde teklif ve DFM notu.",
  },
  crumb: "Karbon çelik sac",
  kicker: "MALZEME",
  h1: "Karbon çelik sac: DKP, HRP ve galvaniz",
  directAnswer:
    "Karbon çelik sac; güçlü, kolay kesilip kaynaklanan ve ekonomik olduğu için çoğu endüstriyel muhafaza, braket ve şasinin varsayılan malzemesidir. DKP, HRP veya galvaniz olarak bulunur. Kalınlık ve kalite belirtildiğinde Corivo lazer kesilmiş, bükülmüş, kaynaklanmış ve kaplanmış karbon çelik parçaları 2 iş günü içinde teklif eder.",
  keyFacts: [
    { label: "Yaygın formlar", value: "Soğuk haddelenmiş (DKP/DC01), sıcak haddelenmiş (HRP), galvanizli sac" },
    { label: "Yapısal kaliteler", value: "S235 (≈ St37) ve S355 (≈ St52) kalın plakada yaygındır", verify: true },
    { label: "Yoğunluk", value: "Yaklaşık 7,85 g/cm³; yoğunluk tablosuna bakın", verify: true },
    { label: "Korozyon koruması", value: "Çıplak çelik paslanır; toz boya, boya, kaplama veya galvaniz gerekir" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "DKP, HRP ve galvaniz karşılaştırması",
      paragraphs: [
        "Türkiye'de DKP, Avrupa tanımlarında DC01 olarak anılan soğuk haddelenmiş çelik sac, pürüzsüz temiz yüzeye ve dar kalınlık toleransına sahiptir. Yüzey boyayı iyi aldığı ve açınım ölçüsü öngörülebilir olduğu için toz boyalı veya boyalı muhafaza, kapak ve parçalarda olağan seçimdir.",
        "HRP olarak bilinen sıcak haddelenmiş sac, tufal ile kaplı daha pürüzlü yüzeye ve daha geniş kalınlık toleransına sahiptir. Daha ucuzdur; görünümün ikincil olduğu yapısal parça, şasi ve kalın plakalarda yaygındır. Galvaniz sac, paslanmaya karşı koruyan çinko tabakası taşır; havalandırma, dış mekân kabinleri ve boyanmayacak parçalarda sık seçilir. Kesilen kenarlar çıplak çeliği açığa çıkarır; korozyon önemliyse kenar koruması için not düşün.",
      ],
    },
    {
      heading: "RFQ'da kalite ve kalınlık",
      paragraphs: [
        "Daha kalın yapısal parçalarda S235 ve S355 gibi kaliteler kullanılır; bunlar Türkiye'deki St37 ve St52 kısaltmalarına yaklaşık karşılık gelir. Eşdeğerlik yaklaşıktır ve standartlar arasında birebir aynı değildir; uygulamanızda belirli bir kalite veya sertifika önemliyse takma ada güvenmek yerine çizimde tam tanımı yazın.",
        "Kalınlık kesim hızını, büküm kuvvetini, ağırlığı ve maliyeti belirler. Rijitlik ve yük ihtiyacını karşılayan en düşük kalınlığı seçin; çünkü malzeme, kesim süresi ve büküm tonajı kalınlıkla artar. Hedef rijitlikse bir sertleştirici kenar veya nervür çoğu zaman daha kalın sacdan fazlasını sağlar; kütleyi ve maliyeti düşürebilir.",
      ],
      bullets: [
        "Formu yazın: DKP, HRP veya galvaniz.",
        "Sertifika gerekiyorsa kalite veya standardı verin.",
        "Özellikle HRP plakada kalınlığı ve tolerans beklentisini belirtin.",
      ],
    },
    {
      heading: "Karbon çeliğinde kesim, büküm ve kaynak",
      paragraphs: [
        "Karbon çeliği, lazer kesim, büküm ve kaynak için en toleranslı sac malzemedir. Kenarlar temiz kesilir, bükümler yaygın takımlarla öngörülebilirdir ve kaynak için temizlik ve geçme dışında özel önlem gerekmez. HRP plakada en iyi kenar kalitesi için kesimden önce tufal temizliği gerekebilir; kalın plakada ısıdan etkilenmiş kenarlar sonraki işleme için konuşulmaya değer.",
        "Çıplak karbon çeliği paslandığı için yüzey işlemini tasarımla birlikte planlayın. Toz boya, boya, çinko kaplama ve siyah oksit yaygındır; dişli veya temas yüzeyli parçalar maskeleme ister. Galvaniz sac kaynaklanabilir ancak duman çıkarır ve çinkoyu yerel olarak yakar; kaynaklı galvaniz parçalarda rötuş gerekiyorsa belirtin. Yüzey işlemleri sayfamız korumanın nasıl tarif edileceğini açıklar.",
      ],
    },
    {
      heading: "Corivo karbon çelik parçaları nasıl teklif eder",
      paragraphs: [
        "DXF veya STEP ile PDF yükleyin; formu, kaliteyi, kalınlığı, yüzeyi ve adetleri belirtin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumları içeren yanıt alırsınız. Kesim, büküm, kaynak ve kaplama birlikte teklif edilebilir.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Siparişten önce kütleyi tahmin etmek için sac ağırlık hesaplama aracını kullanın.",
      ],
    },
  ],
  faq: [
    {
      question: "DKP ile HRP arasındaki fark nedir?",
      answer: "DKP soğuk haddelenmiştir; yüzeyi daha pürüzsüz, kalınlık toleransı daha dardır. HRP sıcak haddelenmiştir; tufallıdır, daha ucuzdur ve yapısal parçalarda kullanılır.",
    },
    {
      question: "St37 ile S235 aynı mı?",
      answer: "Yaklaşık eşdeğerdir, birebir aynı değildir. Belirli bir standart veya sertifika gerekiyorsa tam tanımı yazın.",
    },
    {
      question: "Galvaniz sac lazerle kesilip bükülebilir mi?",
      answer: "Evet. Kesilen kenarlar çıplak çeliği açar; kesim sonrası kenar koruması gerekiyorsa belirtin.",
    },
    {
      question: "Karbon çelik parçaları toz boyayabiliyor musunuz?",
      answer: "Evet. RFQ'ya renk referansını ekleyin ve maskelenecek yerleri işaretleyin.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
