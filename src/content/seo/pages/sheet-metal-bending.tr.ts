import type { SeoPage } from "@/content/seo/types";

export const sheetMetalBendingTr: SeoPage = {
  slug: "sheet-metal-bending",
  kind: "service",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-fabrication", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Sac büküm ve abkant",
    description:
      "Lazer kesilmiş blanklarda abkant büküm. İç yarıçap, flanş ve büküm notları teklifte. 2 iş günü içinde yanıt.",
  },
  crumb: "Sac büküm",
  kicker: "HİZMET",
  h1: "Sac büküm ve abkant şekillendirme",
  directAnswer:
    "Sac büküm, kalınlık ve iç yarıçapa uygun punch-die ile abkantta flanş ve profil oluşturur. Corivo açınım ve büküm notlarınızdan 2 iş günü içinde teklif verir; lazer kesim ile bükümü tek talepte birleştirebilir.",
  keyFacts: [
    { label: "Tipik kalınlık", value: "Yaygın abkant işi için yaklaşık 0,8–8 mm", verify: true },
    { label: "İç yarıçap", value: "Çizim demezse çoğu zaman ≈ sac kalınlığı", verify: true },
    { label: "Girdiler", value: "Açınım DXF + PDF’te açı/yarıçap veya STEP kat" },
    { label: "K-faktörü", value: "Siz büküm payı vermezseniz atölye standardı", verify: true },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "Abkantın çizimden beklediği",
      paragraphs: [
        "Abkant flat blank ölçüsü, büküm sırası bilinci, flanş boyları, açılar ve iç yarıçaplar ister. Yalnız katlanmış STEP gönderirseniz atölye açınımı kendisi çıkarır—mümkündür ama K-faktörü belirsizliği boy hatası yaratır. İyi uygulama: kesim için master açınım DXF, her büküm için açı, yarıçap ve yön yazan katlı görünüm veya büküm tablosu.",
        "Minimum flanş boyu kalıp ağzı ve punch ucuyla sınırlıdır. Çok kısa flanş, derin Z büküm ve hem’ler açık not ister. Büküm uçlarındaki rölyef yırtılmayı önler; kalın paslanmazda yoksa üretilebilirlik notu ekleyebilir veya revizyon isteyebilir.",
      ],
    },
    {
      heading: "Büküm payı ve blank neden kısalır",
      paragraphs: [
        "Sac bükülünce nötr eksen kayar. Büküm payı ve büküm düşümü, katlı ölçüleri açınım boyuna çevirir. Birçok alıcı K-faktörünü tedarikçiye bırakır; kimisi çizime büküm düşüm tablosu basar. Hangi kuralın geçerli olduğunu yazın. Corivo’nun büküm payı hesaplama sayfası klasik formülü açıklar; RFQ öncesi flat boyunu kontrol etmenize yardım eder—atölye proses kartının yerini tutmaz.",
        "Hadde yönü, alüminyum ve bazı yüksek mukavemetli çeliklerde dar yarıçapta çatlamayı etkiler. Görünür dış yüzleri işaretleyin; mümkünse abkant izi gizli yüzde kalsın. Toz boyalı parçalarda bükümün boyadan önce mi sonra mı olduğunu kararlaştırın; sanayide çoğu iş çıplak bükülüp sonra boyanır.",
      ],
    },
    {
      heading: "Şekillendirilmiş parçada tolerans",
      paragraphs: [
        "Açı toleransları ve flanş boyları birikir. ISO 2768 doğrusal ölçüleri kapsar; şekillendirilmiş açılar çoğu zaman çizimde ayrı açı toleransı ister. Geniş paneller geri yaylanır; paslanmaz DKP’ye göre daha fazla yaylanır. Flanş CNC plakaya oturacaksa kritik boşluğu ve hangi parçanın master olduğunu yazın.",
        "Büküm sonrası donanım (PEM somun, stud) büküm hattından uzak durmalı; insert düz saca otursun. Bükülü kutularda kaynak somunu sıra notuyla gelsin. Operasyon sırası önemliyse montaj PDF’ini gönderin.",
      ],
    },
    {
      heading: "Corivo ile büküm teklifi",
      paragraphs: [
        "RFQ formunu kullanın, flat ve katlı dosyaları ekleyin, malzeme ve kalınlığı seçin, adetleri yazın. 2 iş günü içinde fiyat, termin ve büküm uygulanabilirliği, rölyef ve yüzeyi kapsayan üretilebilirlik notu gelir. Üretim partner atölyelerde; gönderim teklif Incoterm’ine göre dünya geneli. Ölçü raporu ve fotoğraflar parçayla gider.",
      ],
    },
  ],
  faq: [
    {
      question: "Açınım şart mı?",
      answer:
        "Şiddetle tercih edilir. DXF açınım + büküm notları K-faktör sürprizini azaltır. Yalnız STEP tekliflenebilir ama netleştirme gerekebilir.",
    },
    {
      question: "İç yarıçapı ne çizmeliyim?",
      answer:
        "Özel takım istemiyorsanız iç yarıçapı kalınlığa yakın çizmek yaygın başlangıçtır. Belirli takım yarıçapı gerekiyorsa teklifte doğrulatın.",
    },
    {
      question: "Toz boyadan sonra büküm olur mu?",
      answer:
        "Genelde çıplak şekillendirilip sonra boyanır. Boya sonrası büküm istiyorsanız yazın—çok kaplama bükümde çatlar.",
    },
    {
      question: "Büküm toleransı nasıl işlenir?",
      answer:
        "Çizime uyulur. Yalnız ISO 2768 doğrusal tolerans varsa kritik flanşlar için RFQ notlarında açı toleransı isteyin.",
    },
    {
      question: "Teklif süresi?",
      answer: "Eksiksiz talepte 2 iş günü.",
    },
  ],
  updated: "26 Kasım 2026",
};
