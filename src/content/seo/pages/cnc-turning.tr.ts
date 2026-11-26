import type { SeoPage } from "@/content/seo/types";

export const cncTurningTr: SeoPage = {
  slug: "cnc-turning",
  kind: "service",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-milling", "surface-finishing", "iso-2768-tolerance-table", "/request-a-quote"],
  meta: {
    title: "CNC torna hizmeti: mil, burç, yuvarlak parça",
    description:
      "Mil, burç, pul ve dişli yuvarlak parçalar için CNC torna. STEP ve PDF gönderin. 2 iş günü içinde teklif ve üretilebilirlik notu.",
  },
  crumb: "CNC torna",
  kicker: "HİZMET",
  h1: "Mil, burç ve yuvarlak parçalar için CNC torna",
  directAnswer:
    "CNC torna, çubuk malzemeyi veya dövme ön parçayı döndürüp kesici takımla işleyerek mil, burç, pul, pim ve dişli gövde gibi silindirik geometriler üretir. Corivo, STEP ve PDF çizimden 2 iş günü içinde teklif verir; torna işini freze, yüzey işlemi veya sac montajla birleştirebilir.",
  keyFacts: [
    { label: "Tipik parçalar", value: "Mil, pim, burç, mesafe pulu, flanş, dişli bağlantı parçaları" },
    { label: "Malzemeler", value: "Karbon çeliği, paslanmaz, alüminyum, pirinç, bakır (kalite RFQ'da belirtilir)" },
    { label: "Tercih edilen dosya", value: "Model için STEP; tolerans, diş ve yüzey notları için PDF" },
    { label: "Ulaşılabilir tolerans", value: "Çap, boy ve malzemeye bağlıdır; kritik ölçüleri PDF'te belirtin", verify: true },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "CNC torna en çok nerede işe yarar",
      paragraphs: [
        "Torna, tek eksen etrafında yuvarlak olan parçalar için en ekonomik yöntemdir. İş parçası dönerken takım boyuna ve enine hareket ederek çap, alın, kanal, konik ve diş oluşturur. Dönel simetrik parçalarda talaş sürekli alındığı için çevrim süresi çoğunlukla frezeden kısadır.",
        "Tipik tornalı parçalar arasında tahrik milleri, makaralar, burçlar, mesafe pulları, boru ve hortum bağlantıları, ara bağlantı elemanları ve pimler yer alır. Birçok endüstriyel montajda tornalı bir parça sac braket veya gövdeyle birlikte çalışır; bu yüzden çizim seti gerektiriyorsa Corivo torna işini lazer kesim ve büküm ile aynı projede ele alabilir.",
      ],
    },
    {
      heading: "Torna mı, freze mi, ikisi birden mi",
      paragraphs: [
        "Baskın şekli yuvarlak olan parça torna adayıdır. Aynı parçada alın yüzeyleri, çapraz delik, kama kanalı veya eksen dışı cep varsa teklif torna ile freze operasyonunu birleştirebilir. Ağırlıklı olarak prizmatik geometriler baştan freze olarak teklif edilmelidir. Emin değilseniz STEP gönderip bunu belirtin; üretilebilirlik notu daha mantıklı rotayı önerir.",
        "Çubuk çapı malzeme maliyetini ve firesini belirler. Milin en büyük çapını standart bir çubuk ölçüsüne yakın tasarlamak, atölyenin daha az malzemeyle başlamasını sağlar. Uzun ve ince parçalar kesme kuvvetiyle esneyebilir; sıkı salgı veya doğrusallık isteniyorsa boy/çap oranını erkenden belirtmek faydalıdır.",
      ],
      bullets: [
        "Referans çapları ve montajda parçayı konumlayan yüzeyleri işaretleyin.",
        "Diş tipini, adımı, sınıfını ve dişin kesme mi haddeleme mi olduğunu yazın.",
        "Eş merkezlilik, salgı veya doğrusallığı yalnızca fonksiyon gerektiriyorsa verin.",
      ],
    },
    {
      heading: "Teklifi hızlandıran çizim detayları",
      paragraphs: [
        "Tornalı parça PDF'inde her kritik çap toleransıyla, toplam boy, pah ve radyüsler, diş bilgileri ve varsa yüzey pürüzlülüğü gösterilmelidir. Tek tek limiti olmayan ölçüler için genel tolerans olarak ISO 2768 referans verilebilir. ISO 2768 tolerans tablomuz bu sınıfların nasıl okunduğunu açıklar.",
        "Malzeme ve durum şekil kadar önemlidir. Kaliteyi yazın: örneğin St37 veya St52 gibi karbon çeliği, 304 ya da 316 paslanmaz, 6061 alüminyum veya pirinç. İşlemeden sonra ısıl işlem, kaplama, eloksal veya pasivasyon varsa belirtin. Kaplama ölçüleri değiştirdiği için toleransın kaplama öncesi mi sonrası mı geçerli olduğunu yazın.",
      ],
    },
    {
      heading: "Corivo tornalı parça tekliflerini nasıl yürütür",
      paragraphs: [
        "Teklif formuna STEP ve PDF'i yükleyin; malzemeyi, bu siparişin adedini ve tahmini yıllık adedi belirtin. 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik yorumları içeren yanıt alırsınız. Üretim, parça tipine ve adede göre seçilen iş ortağı atölyelerde yapılır.",
        "Prototip adetleri de tekrarlı seri üretim de olağandır. Yıllık adedi vermek, tekrar siparişler için bağlama ve proses seçimlerinin teklifte değerlendirilmesine yardımcı olur. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat, teklifteki Incoterm'e göre yapılır.",
      ],
    },
  ],
  faq: [
    {
      question: "Tornalı parça için hangi dosyalar gerekir?",
      answer:
        "STEP model ve tolerans, diş, malzeme ve yüzey bilgisi içeren PDF çizim. İlk fiyat için malzeme ve adet belirtilirse yalnız STEP de kabul edilir.",
    },
    {
      question: "Torna ve freze birlikte teklif edilebilir mi?",
      answer:
        "Evet. Ağırlıklı olarak yuvarlak olup alın yüzeyi, çapraz delik veya kama kanalı gereken parçalar genellikle iki operasyonla tek talepte teklif edilir.",
    },
    {
      question: "Hangi malzemeler tornalanabilir?",
      answer:
        "Karbon çeliği, paslanmaz çelik, alüminyum, pirinç ve bakır yaygın olarak teklif edilir. Teklifin doğru olması için RFQ'da tam kaliteyi yazın.",
    },
    {
      question: "Prototip ve küçük seri teklif veriyor musunuz?",
      answer: "Evet. Sipariş adedini ve olası yıllık adedi yazın; tekrar üretim de değerlendirilebilsin.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
