import type { SeoPage } from "@/content/seo/types";

export const glossaryKFactorTr: SeoPage = {
  slug: "glossary-k-factor",
  kind: "glossary",
  term: "K-faktörü",
  hub: "/sheet-metal",
  related: ["glossary", "bend-allowance-calculator", "sheet-metal-bending", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Sac bükümde K-faktörü nedir? Tanım",
    description:
      "K-faktörü tarafsız ekseni sac kalınlığı içinde konumlandırır; büküm payı ve açınım boyunu hesaplamada kullanılır. Sade dille tanım.",
  },
  crumb: "K-faktörü",
  kicker: "SÖZLÜK",
  h1: "K-faktörü",
  directAnswer:
    "K-faktörü, tarafsız eksen konumunun sac kalınlığına oranıdır ve bükümün iç yüzeyinden ölçülür. Büküm payını ve dolayısıyla sacın açınım boyunu hesaplamak için kullanılır. Değer malzemeye, kalınlığa, büküm radyüsüne ve kullanılan takıma bağlı olarak değişir; bu yüzden üretimde atölyenin kendi kullandığı değer geçerlidir.",
  keyFacts: [
    { label: "Tanım", value: "İç yüzeyden tarafsız eksene uzaklığın kalınlığa oranı" },
    { label: "Tipik aralık", value: "Birçok sac bükümü için kabaca 0,3 ile 0,5", verify: true },
    { label: "Kullanıldığı yer", value: "Büküm payı ve açınım boyu" },
    { label: "Teklif süresi", value: "2 iş günü" },
  ],
  sections: [
    {
      heading: "K-faktörü nedir",
      paragraphs: [
        "Sac büküldüğünde dış yüzey uzar, iç yüzey sıkışır. İkisinin arasında boyu değişmeyen bir tarafsız eksen vardır. K-faktörü bu eksenin kalınlığın hangi oranında durduğunu ifade eder. 0,5'lik K-faktörü ekseni tam ortaya koyar; daha küçük değerler onu bükümün iç tarafına yaklaştırır.",
        "Uygulamada tarafsız eksen genellikle ortanın biraz içinde durur; bu yüzden K-faktörü çoğunlukla 0,5'in altındadır. Malzemeye, kalınlığa, büküm radyüsüne ve bükümün nasıl yapıldığına bağlıdır; bu nedenle tek evrensel bir sayı olarak sabitlenemez.",
      ],
    },
    {
      heading: "K-faktörü nasıl kullanılır",
      paragraphs: [
        "K-faktörü, her bükümün tükettiği düz boyu veren büküm payı formülüne girer. Daha yüksek K-faktörü payı artırır, daha düşük olanı azaltır. K-faktöründeki küçük hatalar açınım boyunu değiştirir ve birkaç bükümde birikir.",
        "RFQ'da CAD açınımınızın belirli bir K-faktörü mü yoksa büküm düşümü mü kullandığını yazın. Atölye kendi takımına göre teyit eder; üretilebilirlik notu farkları işaretler. Çizimleri göndermeden önce açınım boylarını kontrol etmek için büküm payı hesaplayıcıyı deneyin.",
      ],
    },
  ],
  faq: [
    {
      question: "Hangi K-faktörünü kullanmalıyım?",
      answer: "Birçok tasarımcı 0,3 ile 0,5 arasında başlar. Atölyenin değeri malzemeye, radyüse ve takıma bağlıdır.",
    },
    {
      question: "K-faktörü her malzeme için aynı mı?",
      answer: "Hayır. Malzemeye, kalınlığa, radyüse ve şekillendirme yöntemine göre değişir.",
    },
    {
      question: "CAD'de K-faktörünü nerede bulurum?",
      answer: "Çoğu CAD aracında K-faktörü veya büküm düşümü için sac ayarı bulunur. Açınımınızın hangisini kullandığını yazın.",
    },
    {
      question: "Büküm teklifi ne zaman gelir?",
      answer: "Eksiksiz bir talepten sonra 2 iş günü içinde.",
    },
  ],
  updated: "26 Kasım 2026",
};
