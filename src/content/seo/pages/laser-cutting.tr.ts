import type { SeoPage } from "@/content/seo/types";

export const laserCuttingTr: SeoPage = {
  slug: "laser-cutting",
  kind: "service",
  hub: "/sheet-metal-fabrication",
  related: ["sheet-metal-fabrication", "sheet-metal-bending", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Lazer kesim hizmeti",
    description:
      "DKP, paslanmaz ve alüminyum sacda lazer kesim. DXF veya STEP gönderin. 2 iş günü içinde teklif ve üretilebilirlik notu.",
  },
  crumb: "Lazer kesim",
  kicker: "HİZMET",
  h1: "Sac parçalar için lazer kesim",
  directAnswer:
    "Lazer kesim, odaklı ışınla sacı programlı yörüngelerde ayırır; doğru blank ve iç kesimler üretir. Corivo DXF, DWG, STEP veya PDF ile 2 iş günü içinde lazer kesim teklifi verir; çizim seti gerektiriyorsa büküm, kaynak ve yüzeyi aynı talepte birleştirebilir.",
  keyFacts: [
    { label: "Tipik kalınlık", value: "Kalite ve tezgâha göre yaklaşık 0,5–20 mm", verify: true },
    { label: "Malzemeler", value: "DKP/HRP, paslanmaz 304/316, alüminyum, galvaniz" },
    { label: "Tercih edilen dosyalar", value: "Açınım DXF/DWG; notlar için PDF; bağlam için STEP" },
    { label: "Kerf ve nesting", value: "Fiyat nesting veriminden; parçalar arası çok dar boşluktan kaçının" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Lazer kesim ne zaman doğru ilk adımdır",
      paragraphs: [
        "Temiz kenar, sıkı iç boşluk ve tekrarlanabilir kontur isteyen sanayi sac parçalarında lazer varsayılan blank yöntemidir. Punçlamaya göre karmaşık konturları ve sık tasarım değişimini özel kalıp olmadan çözer. Su jetiyle kıyaslandığında, ısı etkisi kabul edilebildiğinde orta kalınlıkta çelik ve paslanmazda genelde daha hızlıdır.",
        "Tipik lazer parçaları montaj plakaları, düz braketler, rakor plakaları, panel açınımları ve sonra abkanta gidecek flat’lerdir. Bitmiş parça bükülü kutu olsa bile kesim için açınım DXF’sini, bükümler için katlı görünümü gönderin—atölyeler nesting’i 3D’den değil flat’ten yapar.",
      ],
    },
    {
      heading: "Teklife temiz giren geometri",
      paragraphs: [
        "Kapalı konturlar, tutarlı katmanlar ve milimetre birimi en sık RFQ gecikmelerini önler. Çift çizgi ve yardımcı geometriyi silin. Malzeme kalınlığından küçük delikler delme gerektirebilir veya reddedilebilir—bunları işaretleyin. Slot, tırnak ve gravür işaretleri ayrı katmanda veya net etiketli olsun; yanlışlıkla delik gibi kesilmesin.",
        "Kenar kalitesi kalınlık, kalite, yardımcı gaz ve ilerlemeye bağlıdır. Görünür yüz ve hadde yönü PDF’te olsun. Paslanmaz ve alüminyumda oksit, çapak veya film toz boya/montaj öncesi kalkacaksa yazın. Galvanizde kesim çekirdeği açıyorsa kenar rötuşu gerekip gerekmediğini not edin.",
      ],
      bullets: [
        "Dosya başına bir parça veya net katman adları; BOM’suz karışık parçaları gömmeyin.",
        "Her unique blank için adet ve tahmini yıllık adedi yazın.",
        "Üretim dosyasından önce NDA gerekiyorsa notlarda söyleyin ve tek sayfalık yer tutucu PDF ekleyin.",
      ],
    },
    {
      heading: "Nesting, fire ve parti ekonomisi",
      paragraphs: [
        "Lazer fiyatı kesim uzunluğu, delme (pierce) sayısı, sac kullanımı ve malzeme kalitesine bağlıdır. Kalın plakada küçük parti, ince sacda tekrarlayan nesting’e göre parça başına daha pahalıdır. Tahmini yıllık adet, tekrarlar için daha büyük nesting veya ayrılmış proses rotasının anlamlı olup olmadığını teklifte değerlendirmeye yarar—genel fiyat listesi yayımlamadan.",
        "Aynı RFQ’da lazer blank ile bükümü birleştirmek flanş uyumsuzluğunu önler. Yalnız kesim isteniyorsa notlara “yalnız düz / flat only” yazın; teklif abkant varsaymasın. Üretilebilirlik notu zor kesilen, çarpılma riski taşıyan veya freze/punça taşınması daha iyi özellikleri işaretler.",
      ],
    },
    {
      heading: "Corivo lazer işini nasıl teklifler",
      paragraphs: [
        "Teklif formuna çizimi yükleyin, malzemeyi seçin, bu sipariş ve yıllık adedi yazın. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumu gelir. Üretim partner atölyelerde yürür. Sevkiyatlarda ölçü raporu ve parça fotoğrafları vardır; malzeme sertifikası siparişte istenirse verilir. Teslimat teklifteki Incoterm’e göredir.",
      ],
    },
  ],
  faq: [
    {
      question: "Lazer için DXF mi STEP mi?",
      answer:
        "Nesting için açınım DXF/DWG tercih edilir. Büküm veya montaj çevresindeyse STEP yardımcı olur. Kalınlık ve malzemeyi PDF’te mutlaka yazın.",
    },
    {
      question: "Paslanmaz ve alüminyum kesiliyor mu?",
      answer: "Evet—304/316, alüminyum sac, DKP/HRP ve galvaniz sık teklif edilir. Kaliteyi RFQ’da belirtin.",
    },
    {
      question: "Yalnız kesim teklifi olur mu?",
      answer: "Evet. Büküm veya kaynak yoksa parçaların düz kalacağını yazın.",
    },
    {
      question: "Çok küçük delikler?",
      answer:
        "Kalınlığa göre çok küçük delikler ikincil delme gerektirebilir veya yetenek dışı olabilir. Üretilebilirlik notu hangisi olduğunu yazar.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz talepte 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
