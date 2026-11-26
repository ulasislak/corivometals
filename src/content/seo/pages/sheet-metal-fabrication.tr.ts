import type { SeoPage } from "@/content/seo/types";

export const sheetMetalFabricationTr: SeoPage = {
  slug: "sheet-metal-fabrication",
  kind: "service",
  hub: "/sheet-metal",
  related: ["laser-cutting", "sheet-metal-bending", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Sac işleme ve imalat",
    description:
      "Özel sac işleme: lazer kesim, büküm, kaynak ve yüzey. Eksiksiz talebe 2 iş günü içinde teklif. Dünya geneli gönderim.",
  },
  crumb: "Sac işleme",
  kicker: "HİZMET",
  h1: "Özel parçalar için sac işleme",
  directAnswer:
    "Sac işleme, düz sacı kesim, büküm, birleştirme ve yüzey işlemleriyle bitmiş parçaya dönüştürür. Corivo DXF, DWG, STEP veya PDF üzerinden 2 iş günü içinde fiyat, termin ve üretilebilirlik notu verir; üretimi partner atölyelerde yaptırır ve dünyanın her yerine gönderir.",
  keyFacts: [
    { label: "Tipik kalınlık", value: "Çoğu lazer ve abkant işi için 0,5–12 mm", verify: true },
    { label: "Yaygın malzemeler", value: "DKP / HRP (DC01, S235), paslanmaz 304/316, alüminyum, galvaniz" },
    { label: "Dosya formatları", value: "DXF, DWG, STEP, PDF" },
    { label: "Teklif süresi", value: "Eksiksiz talepte 2 iş günü" },
    { label: "Prosesler", value: "Lazer kesim, abkant, kaynak, toz boya, donanım" },
  ],
  sections: [
    {
      heading: "Sac işleme neyi kapsar",
      paragraphs: [
        "Sac işleme, düz blanktan başlayıp kullanılabilir parça veya kaynaklı montajla biter. Kesim dış konturu ve iç boşlukları tanımlar. Büküm flanş, kanal ve kutu oluşturur. Birleştirme kaynak, perçin veya bağlantı elemanı ekler. Yüzey işlemi koruma veya renk verir. Sanayi kapakları, braketler, şasiler ve dolaplar çoğunlukla bu yolla üretilir; kütük talaşlı imalatla değil.",
        "Alıcılar genelde sözlü tarif yerine çizim seti gönderir. Açınım DXF/DWG’si veya katlanmış parçanın STEP’i, malzeme kalitesi, kalınlık, büküm notu ve toleransı yazan PDF ile birlikte teklife yeter. Toz boya, maskeleme, PEM somun veya kaynak sembolleri önemliyse çizimde veya RFQ notlarında olmalıdır; aksi halde teklif çıplak kes-bük parçayı fiyatlar.",
      ],
      bullets: [
        "Açınım ve katlı 3D birlikte gelebilir; çelişirse hangisinin esas olduğunu yazın.",
        "Hadde yönü, görünür yüz ve boyasız kalacak yüzeyleri belirtin.",
        "Yalnız lazer blankları ile kaynak/yüzey isteyen montajları ayırın.",
      ],
    },
    {
      heading: "Türkiye’deki üreticilerin tipik şartnamesi",
      paragraphs: [
        "Türkiye’de sac işlerinde DKP, HRP, St37 / S235JR, paslanmaz 304–316 ve galvaniz sac sık kullanılır. Kalınlık milimetre cinsinden yazılır. Genel tolerans için çoğu zaman ISO 2768-m veya çizimdeki özel toleranslar esas alınır. Diş, geçme ve büküm yarıçapı çizime göre olmalı; atölye varsayılanına bırakılmamalıdır. PDF ile DXF çelişirse teklif hangisinin geçerli olduğunu sorar.",
        "Parti adedi ve tahmini yıllık adet proses seçimini değiştirir. Tek prototip lazer kesilip elde bitirilebilir. Tekrarlayan muhafaza için fikstür, RAL standardı ve donanım seti mantıklı olur. Corivo hem bu sipariş adedini hem tahmini yıllık adedi ister; teklif yalnızca ilk partiyi değil, tekrar üretimi de yansıtabilsin diye.",
      ],
    },
    {
      heading: "RFQ’dan sevkiyata",
      paragraphs: [
        "Eksiksiz talepte çizim veya net parça tarifi, iş e-postası, malzeme, adet, tahmini yıllık adet, ad ve firma vardır. Kalınlık ve teslim tarihi isteğe bağlıdır. Corivo 2 iş günü içinde fiyat, üretim termini ve üretilebilirlik notuyla yanıtlar. Üretim termini teklif penceresinden ayrıdır ve teklifte yazılır.",
        "Parçalar partner atölyelerde üretilir. Yetenek dışı bir özellik varsa siparişten sonra değil, teklif penceresinde belirtilir. Her sevkiyatta ölçü raporu ve parça fotoğrafları vardır. Malzeme sertifikası siparişte istenirse gönderilir. Gönderim teklifteki Incoterm’e (EXW, FCA veya DAP) göre dünya genelidir.",
      ],
    },
    {
      heading: "Sac işleme mi, CNC mi",
      paragraphs: [
        "İnce cidar, geniş panel, şekillendirilmiş kanal ve kaynaklı kutuda sac işleme daha uygundur; kütükten talaş kaldırmak malzeme ve süre kaybettirir. Kalın prizmatik parçalar, birçok yüzde sıkı konum toleransı ve abkantın şekillendiremeyeceği torna özellikleri için CNC öndedir. Birçok proje ikisini birleştirir: kapaklar lazer+abkant, mil ve boss’lar CNC. Parçalar birbirine oturuyorsa tek RFQ’da gönderin; üretilebilirlik notu büküm, kaynak veya frezenin hangi adımda daha temiz olduğunu yazar.",
      ],
    },
  ],
  faq: [
    {
      question: "Sac teklifi için hangi dosyalar gerekir?",
      answer:
        "DXF, DWG, STEP veya PDF. Açınım DXF’si ile malzeme, kalınlık ve büküm notlu PDF yaygındır. Kaynaklı veya çok bükümlü parçada STEP yardımcı olur. En fazla 8 dosya, her biri 20 MB.",
    },
    {
      question: "Teklif ne kadar sürede gelir?",
      answer:
        "Eksiksiz talepte 2 iş günü içinde. Yanıtta fiyat, üretim termini ve üretilebilirlik notu vardır.",
    },
    {
      question: "Yalnız kesim mi, büküm ve kaynak da var mı?",
      answer:
        "Kesim, büküm, kaynak, toz boya ve donanım, notlar ve çizimler söylediğinde aynı talepte tekliflenebilir.",
    },
    {
      question: "Nereye gönderim yapıyorsunuz?",
      answer: "Dünya geneli. Teslim sorumluluğunu teklifteki Incoterm (EXW, FCA veya DAP) belirler.",
    },
    {
      question: "Fiyat listesi var mı?",
      answer: "Hayır. Fiyatlar çiziminize, malzemeye, adede ve yüzeye göre teklifte yazılır; sitede listelenmez.",
    },
  ],
  updated: "26 Kasım 2026",
};
