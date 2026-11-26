import type { SeoPage } from "@/content/seo/types";

export const sheetMetalDfmGuidelinesTr: SeoPage = {
  slug: "sheet-metal-dfm-guidelines",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "sheet-metal-bending",
    "laser-cutting",
    "bend-allowance-calculator",
    "iso-2768-tolerance-table",
    "how-to-get-a-sheet-metal-quote",
  ],
  meta: {
    title: "Sac DFM kuralları: delik, büküm, tolerans",
    description:
      "Lazer kesilmiş ve bükülmüş sac için üretilebilirlik kuralları: delik ölçüsü, kenar boyu, rahatlatma kesikleri, tolerans ve kaynak erişimi.",
  },
  crumb: "Sac DFM",
  kicker: "REHBER",
  h1: "Sac için üretilebilirlik (DFM) tasarım kuralları",
  directAnswer:
    "Üretilebilirlik tasarımı, bir parçayı makul maliyetle güvenilir biçimde kesilebilecek, bükülebilecek, kaynaklanabilecek ve kaplanabilecek şekilde biçimlendirmektir. Sacda delikleri en az kalınlık kadar tutun, takıma uygun kenar boyu bırakın, bükümlere rahatlatma ekleyin, tutarlı radyüs kullanın ve gereksiz sıkı toleranstan kaçının. Sınırları atölyeyle teyit edin.",
  keyFacts: [
    { label: "Minimum delik ölçüsü", value: "Çoğunlukla en az malzeme kalınlığı kadar; malzemeye göre teyit edin", verify: true },
    { label: "Delikten kenara / büküme mesafe", value: "Delikleri bükümlerden uzak tutun; tipik olarak birkaç kalınlık", verify: true },
    { label: "Minimum kenar boyu", value: "Kalıp açıklığına bağlıdır; genellikle birkaç kalınlık", verify: true },
    { label: "İç büküm radyüsü", value: "Belirtilmezse çoğunlukla kalınlığa yakın; mümkünse tek radyüs kullanın", verify: true },
    { label: "Genel tolerans", value: "ISO 2768'e atıf yapın (sac parçalarda orta veya kaba)" },
  ],
  sections: [
    {
      heading: "Kesim özellikleri: delik, kanal ve köşe",
      paragraphs: [
        "Lazer kesim karmaşık şekilleri işler; yine de geometrinin sınırları vardır. Sac kalınlığından küçük delikler bozulabilir, delme gerektirebilir veya reddedilebilir. Dar kanallar ve ince tırnaklar özellikle ince sacda ısıdan çarpılabilir. Çok sayıda küçük özelliği birbirine yakın yerleştirmekten kaçının; ısı birikimi ve çarpılma toplanır.",
        "Keskin iç köşeler gerilimi toplar ve bükümlü parçada şekillendirilmesi zordur. Bir büküm bir iç kesimle buluştuğunda küçük köşe radyüsü veya rahatlatma çentiği ekleyin. Yazı ve gravürü ayrı katmanda tutun ve belirtin. Delik ile sac kenarı arasında yeterli malzeme bırakın; kesim ve taşıma sırasında bu kısım yırtılmasın veya şekil değiştirmesin.",
      ],
    },
    {
      heading: "Büküm özellikleri: radyüs, kenar ve rahatlatma",
      paragraphs: [
        "Bükümler boşluk ister. Büküm çizgisine çok yakın delik ve kanallar ovale uzayabilir; bu yüzden birkaç kalınlık uzakta tutun veya özel bir rahatlatma ekleyin. Kalıp açıklığından kısa kenarlar güvenilir şekillendirilemez; minimum kenar boyunu atölyeyle kontrol edin. Mümkünse parça boyunca aynı iç radyüsü kullanın; yalnızca tek takım kurulumu gerekir.",
        "Bir büküm düz kenarda bittiğinde yırtılmayı önlemek için rahatlatma kesikleri ekleyin. Sert alüminyum ve yüksek mukavemetli çeliklerde tane yönüne dikkat edin; tane yönüne dik sıkı bükümler çatlayabilir. Açınım boylarını kontrol etmek için büküm payı hesaplayıcısını kullanın; atölye karşılaştırabilsin diye açınım DXF'ini katlanmış STEP ile birlikte gönderin.",
      ],
      bullets: [
        "Delik ve kanalları büküm çizgilerinden uzak tutun.",
        "Takım değişimini azaltmak için tutarlı iç radyüs kullanın.",
        "Büküm uçlarına ve kenarların buluştuğu köşelere rahatlatma ekleyin.",
      ],
    },
    {
      heading: "Tolerans, kaynak ve yüzey işlemi",
      paragraphs: [
        "Şekillendirilmiş veya kaynaklı özelliklerde sıkı toleranslar pahalıdır ve çoğu zaman gereksizdir. Sıkı limitleri yalnızca fonksiyonel ölçülere uygulayın, gerisi için ISO 2768'e atıf yapın. Büküm birkaç bükümde birikimli değişim ekler, kaynak ise ısı çarpılması ekler; bu yüzden montajlı parçalarda daha gevşek sınıf çoğunlukla daha gerçekçidir. ISO 2768 tablomuz sınıfları açıklar.",
        "Kaynak erişimini ve yüzey işlemini geometriyle birlikte planlayın. Kaynak için torç yeri ve birleşimi görme alanı gerekir. Toz boyalı parçalarda kapalı kesitlerde drenaj veya hava delikleri ile dişler ve topraklama noktaları için maskeli alanlar gerekir. Estetik yüzeyleri çizimde işaretlemek, atölyenin dikiş ve büküm izlerini gizli yüzeylere yerleştirmesini sağlar.",
      ],
    },
    {
      heading: "Tasarımı Corivo ile kontrol etmek",
      paragraphs: [
        "Corivo her tekliften üretilebilirlik yorumlarını dahil eder. Teklif formuna DXF, STEP ve PDF yükleyin; 2 iş günü içinde fiyat, üretim termini ve kesilmesi zor, çarpılma olasılığı yüksek veya başka yolla daha iyi üretilecek özellikler hakkında notlar içeren yanıt alırsınız. Sonra siparişten önce revize edebilirsiniz.",
        "Üretim iş ortağı atölyelerde yapılır. Sevkiyatlarda ölçü raporu ve parça fotoğrafları bulunur; malzeme sertifikası siparişte talep edilirse verilir. Teslimat teklifteki Incoterm'e göre yapılır. Gönderilecek dosyaların tam listesi için sac teklifi nasıl alınır rehberine bakın.",
      ],
    },
  ],
  faq: [
    {
      question: "Sacda kesebileceğim en küçük delik nedir?",
      answer: "Çoğunlukla malzeme kalınlığı kadar; ancak malzemeye ve atölyeye bağlıdır. Üretilebilirlik notu delme gerektiren delikleri işaretler.",
    },
    {
      question: "Delik bükümlere ne kadar yakın olabilir?",
      answer: "Birkaç malzeme kalınlığı yaygın bir pratik kuraldır. Malzemeniz ve radyüsünüz için atölyeyle teyit edin.",
    },
    {
      question: "Rahatlatma kesikleri neden gerekir?",
      answer: "Bir büküm kenarda bittiğinde veya başka bir kenarla buluştuğunda yırtılmayı önlerler.",
    },
    {
      question: "Sac için hangi tolerans sınıfı uygun?",
      answer: "Şekillendirilmiş parçalarda ISO 2768 orta veya kaba yaygındır. Fonksiyonel ölçüleri ayrıca işaretleyin.",
    },
    {
      question: "DFM geri bildirimi ne zaman gelir?",
      answer: "Teklif yanıtının parçası olarak 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
