import type { SeoPage } from "@/content/seo/types";

export const cncMillingTr: SeoPage = {
  slug: "cnc-milling",
  kind: "service",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-turning", "surface-finishing", "iso-2768-tolerance-table", "/request-a-quote"],
  meta: {
    title: "CNC freze hizmeti: plaka, gövde, prizmatik parça",
    description:
      "Çelik, paslanmaz ve alüminyumdan plaka, gövde ve cepli parçalar için CNC freze. 2 iş günü içinde teklif ve DFM notu.",
  },
  crumb: "CNC freze",
  kicker: "HİZMET",
  h1: "Plaka, gövde ve prizmatik parçalar için CNC freze",
  directAnswer:
    "CNC freze, dönen kesicilerle blok veya plaka malzemeden talaş kaldırarak düz yüzey, cep, kanal, delik ve profilli geometri üretir. Corivo, STEP ve PDF çizimden 2 iş günü içinde teklif verir ve gerekirse frezeyi torna, sac, kaynak ve yüzey işlemiyle aynı talepte birleştirebilir.",
  keyFacts: [
    { label: "Tipik parçalar", value: "İşlenmiş plaka, gövde, braket, aparat, manifold, flanş" },
    { label: "Malzemeler", value: "Karbon çeliği, paslanmaz, alüminyum, pirinç, bakır (kalite RFQ'da belirtilir)" },
    { label: "Tercih edilen dosya", value: "Model için STEP; tolerans, diş ve yüzey için PDF" },
    { label: "Eksen sayısı ve ölçü zarfı", value: "İş ortağı atölyeye göre değişir; parça zarfını RFQ'da yazın", verify: true },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Freze ne zaman doğru proses",
      paragraphs: [
        "Freze, geometrisi ağırlıklı olarak prizmatik parçalara uygundur: düz referans yüzeyler, cepler, çıkıntılar, kanallar, delik ve diş açma ile yalnızca sacdan üretilemeyen profiller. Lazer kesimle karşılaştırıldığında freze, düz bir blankın veremeyeceği düzlemsellik ve derinlik özelliklerini sağlar; plakadan, bloktan veya dökümden başlayabilir.",
        "Endüstriyel ekipmanlarda sık görülen düzen, lazer kesilmiş ve bükülmüş bir muhafazaya monte edilen frezelenmiş bir bağlantı plakası veya manifolddur. İkisini tek talepte teklif etmek arayüz ölçülerini tutarlı tutar ve farklı tedarikçilerde ayrı çizim revizyonlarını uzlaştırma zahmetini ortadan kaldırır.",
      ],
    },
    {
      heading: "İşleme süresini etkileyen tasarım tercihleri",
      paragraphs: [
        "İşleme süresini kaldırılan hacim, cep derinliği, takım erişimi ve bağlama sayısı belirler. Derin ve dar ceplerde uzun takım ve hafif paso gerekir. Yuvarlak kesici keskin iç köşe üretemez; takım yarıçapından biraz büyük bir köşe radyüsü vermek süreyi kısaltır ve takım ömrünü artırır.",
        "Başka bir yüzeye ulaşmak için parça yeniden bağlandığında bir bağlama daha eklenir. Bir veya iki yönden erişilebilen özellikler, çok sayıda yön gerektirenlerden daha temiz teklif alır. İnce duvarlar ve uzun nervürler kesim sırasında titreyebilir; duvar kalınlığı sağlam saymadığınız seviyedeyse belirtin.",
      ],
      bullets: [
        "Mümkünse standart delik ölçüleri ve diş tanımları kullanın.",
        "İç köşelere keskin kenar yerine radyüs verin.",
        "Sıkı toleransı yalnızca gerçekten kritik ölçülere verin; gerisini ISO 2768 karşılasın.",
      ],
    },
    {
      heading: "Malzeme, ham madde ve yüzey",
      paragraphs: [
        "Malzeme kalitesini ve gerekiyorsa ham madde durumunu yazın. Lazerle kesilip sonra frezelenen plaka, gerilim boşaldığında çarpılabilir; düzlemsellik şartı olan parçalarda bunu belirtin, teklif gerilim giderme veya işleme payı içerebilir. Alüminyum ve yumuşak çelik kolay işlenir; paslanmaz çelikler pekleşir ve parça başına genellikle daha fazla tezgâh zamanı gerektirir.",
        "Çoğu rotada yüzey işlemi işlemeden sonra gelir: alüminyumda eloksal, çelikte kaplama veya siyah oksit, paslanmazda pasivasyon, açıkta kalan yüzeylerde toz boya. Kaplama kalınlık eklediği için toleransın işlem öncesi mi sonrası mı geçerli olduğunu belirtin. Yüzey işlemleri sayfamız yaygın seçenekleri anlatır.",
      ],
    },
    {
      heading: "Corivo frezelenmiş parça tekliflerini nasıl yürütür",
      paragraphs: [
        "Teklif formuna STEP ve PDF'i yükleyin; malzemeyi, bu siparişin adedini ve tahmini yıllık adedi belirtin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumlarını içeren yanıt alırsınız. Üretim, parça boyutuna ve karmaşıklığına uygun iş ortağı atölyelerde yapılır.",
        "Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Freze, torna ve sac parçaları karışık montajlarda montaj ilişkisini belirtin; arayüz ölçüleri birlikte kontrol edilsin.",
      ],
    },
  ],
  faq: [
    {
      question: "CNC freze için hangi dosyalar gerekir?",
      answer: "STEP model ve tolerans, diş, malzeme ve yüzey içeren PDF çizim. Adet ve yıllık hacmi ekleyin.",
    },
    {
      question: "Lazer kesilmiş plakadan frezeleme yapar mısınız?",
      answer: "Evet. Blankın lazer kesimden geldiğini ve varsa düzlemsellik şartını yazın; gerilim boşalması dikkate alınsın.",
    },
    {
      question: "Hangi malzemeler frezelenebilir?",
      answer: "Karbon çeliği (örneğin St37, St52), paslanmaz, alüminyum, pirinç ve bakır yaygın olarak teklif edilir. RFQ'da kaliteyi yazın.",
    },
    {
      question: "İşlemeden sonra yüzey işlemi destekleniyor mu?",
      answer: "Evet. Eloksal, kaplama, pasivasyon ve toz boya talep edilebilir; toleransın kaplama öncesi mi sonrası mı geçerli olduğunu belirtin.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
