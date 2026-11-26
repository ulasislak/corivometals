import type { SeoPage } from "@/content/seo/types";

export const weldingAssembliesTr: SeoPage = {
  slug: "welding-assemblies",
  kind: "service",
  hub: "/enclosures",
  related: ["sheet-metal-fabrication", "laser-cutting", "sheet-metal-bending", "surface-finishing", "/enclosures"],
  meta: {
    title: "Kaynaklı montaj ve kaynaklı sac parçalar",
    description:
      "Çiziminize göre kaynaklı şasi, muhafaza ve sac montajlar. STEP ve PDF gönderin. 2 iş günü içinde teklif ve üretilebilirlik notu.",
  },
  crumb: "Kaynaklı montaj",
  kicker: "HİZMET",
  h1: "Şasi, muhafaza ve sac parçalar için kaynaklı montaj",
  directAnswer:
    "Kaynaklı montaj, lazer kesilmiş, bükülmüş ve işlenmiş parçaları şasi, muhafaza ve aparat olarak birleştirir. Corivo, STEP montaj modeli ve kaynak notlu PDF çizimden 2 iş günü içinde teklif verir; çizim gerektiriyorsa toz boya gibi yüzey işlemini de aynı teklife dahil edebilir.",
  keyFacts: [
    { label: "Tipik montajlar", value: "Muhafaza, şasi, braket, koruma, sehpa, aparat" },
    { label: "Malzemeler", value: "Yumuşak çelik (DKP, HRP, St37), paslanmaz, alüminyum (kalite ve kalınlık belirtin)" },
    { label: "Tercih edilen dosya", value: "STEP montaj; kaynak sembolleri, yüzey ve estetik yüzeyler için PDF" },
    { label: "Kaynak prosesleri", value: "MIG ve TIG yaygındır; montaja göre iş ortağı atölyeyle teyit edilir", verify: true },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Kaynaklı montaj neleri kapsar",
      paragraphs: [
        "Kaynaklı montaj tek tek parçalarla başlar: lazer kesilmiş blanklar, bükülmüş kenarlar, borular ve bazen işlenmiş bloklar. Bu parçalar yerleştirilir, puntalanır, kaynatılır ve yüzey işleminden önce çoğunlukla taşlanır. Sonuç bir ekipman muhafazası, makine şasisi, koruma veya sehpa olabilir; birkaç parçanın dik, düz ve doğru aralıkta bitmesi gerekir.",
        "Kaynak ısı verdiği ve ısı metali çarptığı için bir kaynaklı yapının kalitesi kaynağın kendisi kadar parça tasarımına ve bağlamaya da bağlıdır. Blanklara kesilen tırnak, yuva ve kendinden konumlandıran özellikler parçaların elde tutulan gönye olmadan hizalanmasına yardımcı olur; bu da seri içinde tekrarlanabilirliği artırır.",
      ],
    },
    {
      heading: "Çizimde kaynak bilgisini vermek",
      paragraphs: [
        "Kaynak çizimi hangi birleşimlerin kaynaklı olduğunu, kaynak tipini ve uzunluğunu göstermelidir. Sürekli dikiş, aralıklı (stitch) kaynak ve punta kaynağı farklı mukavemet, çarpılma ve görünüm verir. Tank veya sızdırmaz muhafaza gibi sızdırmazlık gereken bir kaynak varsa açıkça yazın; çünkü birleşimin hazırlanışını ve kontrolünü değiştirir.",
        "Estetik şartlar ayrı not hak eder. Görünen yüzeyde kaynak taşlanıp yüzeyle birleştirilecekse PDF'te o yüzeyi işaretleyin; taşlama işçilik ekler ve sonraki yüzey işlemini etkiler. Paslanmazda kaynak sonrası fırçalı, parlatılmış veya pasive edilmiş yüzey bekleniyorsa belirtin.",
      ],
      bullets: [
        "Sızdırmaz veya yapısal kaynakları punta ve aralıklı kaynaktan ayrı işaretleyin.",
        "Hangi yüzeylerin estetik olduğunu, hangilerinde kaynak izi olabileceğini gösterin.",
        "Bitmiş montaj için düzlemsellik, diklik veya genel tolerans yazın.",
      ],
    },
    {
      heading: "Malzeme kombinasyonları ve yüzey işlemi",
      paragraphs: [
        "DKP, HRP ve St37 gibi yumuşak çelikler kolay kaynaklanır ve korozyonu önlemek için genellikle toz boya veya boyayla bitirilir. Paslanmaz çelik iyi kaynaklanır ancak korozyon direncinin korunması için dikkat ister; ısı renginin giderilmesi ve pasivasyon konuşulmalıdır. Alüminyum çelikten farklı kaynaklanır ve çarpılmaya daha duyarlıdır; RFQ'da alaşımı ve temperi yazın. Farklı metallerin tek kaynakta karıştırılması genel olarak önerilmez.",
        "Yüzey işlemi kaynakla birlikte planlanmalıdır. Toz boya temiz, taşlanmış yüzey ister; kapalı kesitlerde ön işlem sıvıları ve boya birikmesin diye drenaj veya hava delikleri gerekebilir. Yüzey işlemleri sayfamız yaygın kaplama rotalarını ve çizimde nasıl tarif edileceğini anlatır.",
      ],
    },
    {
      heading: "Corivo kaynaklı montajları nasıl teklif eder",
      paragraphs: [
        "Teklif formuna STEP montajı ve PDF'i yükleyin; çok parça varsa malzeme listesi ekleyin, bu siparişin adedini ve tahmini yıllık adedi yazın. 2 iş günü içinde fiyat, üretim termini ve kaynak erişimi, çarpılma riski ve yüzey işlemi hakkında üretilebilirlik yorumları içeren yanıt alırsınız.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Belirli bir kaynak standardı veya kaynak muayenesi gerekiyorsa RFQ'da yazın; siparişten önce teyit edilebilsin.",
      ],
    },
  ],
  faq: [
    {
      question: "Lazer kesilmiş ve bükülmüş parçalı montajları kaynaklıyor musunuz?",
      answer: "Evet. STEP montajı ve kaynak notlu PDF gönderin; kesim, büküm ve kaynak birlikte teklif edilsin.",
    },
    {
      question: "Hangi metaller kaynaklanabilir?",
      answer: "Yumuşak çelik, paslanmaz ve alüminyum yaygın olarak teklif edilir. Her parça için kalite ve kalınlığı belirtin.",
    },
    {
      question: "Kaynaklar taşlanıp bitirilebilir mi?",
      answer: "Evet, çizim isterse. Estetik yüzeyleri işaretleyin; taşlama ve yüzey işlemi teklife dahil edilsin.",
    },
    {
      question: "Kaynaktan sonra toz boya teklif ediyor musunuz?",
      answer: "Evet. RFQ'ya yüzey işlemini ve renk referansını ekleyin; olağan seçenekler için yüzey işlemleri sayfasına bakın.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
