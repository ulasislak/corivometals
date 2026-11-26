import type { SeoPage } from "@/content/seo/types";

export const laserCuttingCostDriversTr: SeoPage = {
  slug: "laser-cutting-cost-drivers",
  kind: "aeo",
  hub: "/sheet-metal",
  related: [
    "laser-cutting",
    "sheet-metal-dfm-guidelines",
    "how-to-get-a-sheet-metal-quote",
    "carbon-steel-sheet",
    "glossary",
  ],
  meta: {
    title: "Lazer kesim maliyetini ne belirler? Ana etkenler",
    description:
      "Lazer kesim maliyeti malzeme, kalınlık, kesim boyu, delme sayısı, nesting, adet ve ikincil işlemlere bağlıdır. Nasıl düşürülür, görün.",
  },
  crumb: "Lazer kesim maliyeti",
  kicker: "YANIT",
  h1: "Lazer kesim maliyetini ne belirler?",
  directAnswer:
    "Lazer kesim maliyetini esas olarak malzeme ve kalınlık, toplam kesim boyu, delme (pierce) sayısı, parçaların sacda ne kadar verimli yerleştirildiği, sipariş adedi ve büküm, çapak alma veya yüzey işlemi gibi ikincil işler belirler. Konturları sadeleştirmek ve yıllık adedi paylaşmak genellikle maliyeti düşürür. Corivo 2 iş günü içinde teklif verir.",
  keyFacts: [
    { label: "Ana etkenler", value: "Malzeme kalitesi, kalınlık, kesim boyu, pierce, nesting verimi, adet" },
    { label: "İkincil işler", value: "Büküm, çapak alma, kaynak ve yüzey işlemi kesimin ötesinde maliyet ekler" },
    { label: "Kalınlık etkisi", value: "Kalın sac daha yavaş kesilir ve daha çok malzeme kullanır" },
    { label: "Maliyet nasıl düşer", value: "Konturları sadeleştirin, kesim hatlarını birleştirin, malzeme ve kalınlığı standartlaştırın" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Malzeme ve kalınlık",
      paragraphs: [
        "Malzeme ilk maliyet etkenidir. Kalite önemlidir; çünkü paslanmaz çelik ve alüminyum kilogram başına DKP veya HRP gibi yumuşak çelikten pahalıdır ve bazı alaşımlar farklı kesilir. Kalınlık iki kez önemlidir: kalın sac parça başına daha çok malzeme tutar ve daha yavaş kesilir; böylece metre başına tezgâh zamanı artar. Rijitliği karşılayan en ince sacı seçmek çoğu zaman maliyeti belirgin düşürür.",
        "Bir proje boyunca malzemeleri standartlaştırmak da yardımcı olur. Birkaç parçada ortak sac ebadı ve kalınlığı kullanmak, atölyenin parçaları birlikte yerleştirmesini ve tek seferde malzeme almasını sağlar. Çok sayıda farklı kalınlığın karışması ek malzeme elleçlemesi ve sac alımı gerektirir. RFQ'da malzeme kalitesini ve kalınlığı yazın; DKP veya St37 gibi yerel adların yanına EN ya da ISO kalitesini ekleyin.",
      ],
    },
    {
      heading: "Kesim boyu, pierce ve geometri",
      paragraphs: [
        "Lazer, malzemeye ve kalınlığa bağlı bir hızla keser; bu yüzden toplam kesim boyu doğrudan maliyet etkenidir. Işının kesime başladığı her delme noktası da süre ekler ve kalın plakada delme daha yavaştır. Çok sayıda küçük deliği olan bir parça, sade dış hatlı daha büyük bir parçadan pahalı olabilir; çünkü her delik kendi delmesini ister.",
        "Geometri tercihleri ikisini de azaltabilir. Komşu parçalar arasındaki ortak kenarları birleştirmek (ortak hat kesimi) çift kesimi ortadan kaldırır. Birçok minik deliği tek bir kanal veya daha büyük bir açıklıkla değiştirmek delme sayısını düşürür. İşlev gerektirmiyorsa aşırı girift konturlardan kaçının ve DXF'ten çift çizgileri silin; aynı kenar iki kez kesilmesin.",
      ],
      bullets: [
        "Parçaların değdiği yerlerde ortak kenarları birleştirin.",
        "Bir kanal yeterliyse küçük delik sayısını azaltın.",
        "DXF'ten çift veya üst üste binen çizgileri silin.",
      ],
    },
    {
      heading: "Nesting, adet ve hazırlık",
      paragraphs: [
        "Nesting, parçaların sac üzerinde yerleştirilme biçimidir. Yüksek kullanım daha az fire demektir ve fire de ödenir. Tuhaf şekilli veya büyük iç kesimli parçalar kullanılmayan malzeme bırakabilir; teklif daha düşük verimi yansıtabilir. Parçalar arasındaki boşluğu artırmak veya olağandışı kenar payı bırakmak da verimi düşürür. Tanım için sözlükteki nesting maddesine bakın.",
        "Adet, hazırlık dağılımını ve nesting'i etkiler. Küçük partilerde programlama ve elleçleme maliyeti az parçaya yüklenir; büyük partilerde yayılır ve nesting daha verimli olur. Yıllık adedi vermek, genel bir fiyat listesi yayımlamadan atölyenin tekrara uygun bir prosesin değip değmeyeceğini değerlendirmesine olanak tanır.",
      ],
    },
    {
      heading: "İkincil işlemler ve Corivo nasıl teklif verir",
      paragraphs: [
        "Kesim çoğu zaman rotanın yalnızca bir parçasıdır. Büküm, çapak alma, diş açma, kaynak ve yüzey işlemi ayrı ayrı maliyet ekler; sıkı toleranslar da kontrol eforunu artırır. Yalnızca düz parça gerekiyorsa belirtin; teklif büküm işi içermesin. Parça yüzey işlemi gerektiriyorsa işlemi yazın; tüm rota birlikte teklif edilsin.",
        "Teklif formuna DXF, STEP ve PDF'i malzeme, kalınlık, yüzey ve adetlerle yükleyin. 2 iş günü içinde fiyat, üretim termini ve maliyeti düşürecek değişiklikler öneren üretilebilirlik yorumları içeren yanıt alırsınız. Üretim iş ortağı atölyelerde yapılır ve teslimat teklifteki Incoterm'e göre yapılır. Tasarım ipuçları için DFM kılavuzuna bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Kalın sacı kesmek her zaman daha mı pahalı?",
      answer: "Genellikle evet; çünkü daha çok malzeme tutar ve daha yavaş kesilir. Rijitlik ihtiyacınızı karşılayan en ince sacı seçin.",
    },
    {
      question: "Küçük delikler fiyatı artırır mı?",
      answer: "Evet. Her delik bir delme ister. Tasarım izin veriyorsa birkaç küçük deliği bir kanalla değiştirmek maliyeti düşürebilir.",
    },
    {
      question: "Adet birim fiyatı değiştirir mi?",
      answer: "Çoğunlukla. Büyük partiler hazırlığı yayar ve daha verimli yerleşir. Teklif dikkate alsın diye yıllık hacmi paylaşın.",
    },
    {
      question: "Lazer kesim fiyat listesi alabilir miyim?",
      answer: "Hayır. Fiyat çiziminize ve rotaya bağlıdır; her teklif gönderdiğiniz parçalara özeldir.",
    },
    {
      question: "Fiyat ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
