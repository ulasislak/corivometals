# Corivo sitesinde ne var

Son durum: 22 Kasım 2026. Site üç dilli. İngilizce Avrupa’daki üreticiye, Almanca Almanya, Avusturya ve İsviçre’deki üreticiye, Türkçe Türkiye’deki üreticiye konuşur. Fiyat listesi, anında teklif, müşteri logosu, referans, istatistik ve sertifika yoktur.

## Diller

| Adres | Kim için | Dil |
| --- | --- | --- |
| `/en` | Avrupa’daki üreticiler | İngilizce, varsayılan |
| `/de` | Almanya, Avusturya ve İsviçre’deki üreticiler | Almanca |
| `/tr` | Türkiye’deki üreticiler | Türkçe |

Dilsiz adres (`/sheet-metal` gibi) kaydedilmiş dile, o yoksa tarayıcı diline gider. Almanca tarayıcı `/de`, Türkçe tarayıcı `/tr` açar. Üstteki EN / DE / TR aynı sayfada kalır. Seçim `corivo-locale` çerezine yazılır.

## Söylenenler

Bunlar sitede yazılan taahhütlerdir:

- Eksiksiz talep 2 iş günü içinde teklif alır. 2 iş günü teklif süresidir, üretim süresi değildir.
- Teklifte fiyat, üretim termini ve üretilebilirlik notu vardır.
- Her sevkiyatta ölçü raporu ve fotoğraflar vardır.
- Malzeme sertifikası ve NDA istenirse hazırlanır.
- Ödeme üretimden önce avans, sevkiyattan önce bakiyedir. Site kart ödemesi almaz.
- Teslimat teklifte yazıldığı gibi EXW, FCA veya DAP’tır.

## Ne üretilir

Üç iş kolu vardır. CNC “basit parça” diye sınırlı değildir. Freze ve torna çizime göredir. Karmaşık çok eksenli, sertifikalı havacılık veya çok dar toleranslı parçalar duruma göre tekliflenir ya da reddedilir. Parça partner atölyelerin kapasitesinin dışındaysa bu, teklif süresi içinde söylenir.

| Sayfa | İş |
| --- | --- |
| `/sheet-metal` | Lazer kesim ve abkant büküm: kapak, braket, takviye, şasi |
| `/enclosures` | Kaynaklı kutu, çerçeve, koruyucu, dolap. RAL ve boyasız yüzey yazılırsa toz boya |
| `/cnc-parts` | Freze ve torna. Diş, geçme ve önemli yüzeyler çizimde olur. Tek başına ya da sac/muhafaza ile aynı sevkiyatta gidebilir |

Formdaki kaliteler: DC01, S235JR, galvanizli sac, 304, 316, alüminyum 5052. Listede olmayan kalite notlarda yazılır; teklif dahil olup olmadığını söyler.

Tolerans her parça için tek sayı olarak yayımlanmaz. Esas çizimdir. Üretilebilirlik notu görüleni doğrular, ölçü raporu sevk edilen parçayı kontrol eder.

## Çizimler

Fotoğraf yok. Teknik çizim var:

- Ana sayfadaki büyük imalat paftası: dolap, L braket, büküm detayı, açınım.
- Ürün çizimleri: sac açınımı ve büküm, muhafaza, freze parçası ve torna mili.
- Türkçe etiketler: AÇINIM, BÜKÜM, KUTU, BRAKET, FREZE, TORNA.

## Sayfalar

| Adres | Ne var |
| --- | --- |
| `/` | Başlık, teklif formu, taahhütler, süreç, üç ürün, neden tek kişi, SSS özeti |
| `/sheet-metal` | Lazer kesim ve büküm, boş kapasite tablosu, kalite tablosu, çizime ne konacağı |
| `/enclosures` | Kaynaklı muhafaza, boş kapasite tablosu, toz boya, sevkiyatla gelenler |
| `/cnc-parts` | Freze ve torna, kapasite notu, kaliteler |
| `/industries` | Makine ve ekipman, dolap ve gövde, HVAC |
| `/how-it-works` | Çizim, teklif, üretim, teslimat |
| `/faq` | Tedarik, alıcı, üretim yeri, dosya, adet, süre, CNC kapasitesi, Incoterm, ödeme, gizlilik, belgeler, uymayan parça |
| `/about` | Tek kişi, taahhütler, fiyatın sitede değil teklifte olduğu |
| `/request-a-quote` | Aynı teklif formu |
| `/thank-you` | Talep alındı. Aramada yok |
| `/inbox/…` | Gelen teklif talepleri. Menüde yok. Adres `QUOTE_INBOX_KEY` ile açılır. Yanlış adres 404 |
| `/privacy` | Formun topladığı veri, saklama, Supabase, Resend, Vercel, çerez seçimi |
| `/terms` | Site, teklif, çizim, üretilebilirlik notu, sipariş, teslimat, kontrol, sorumluluk, hukuk |
| `/imprint` | Kapalı. Menüde, altbilgide ve site haritasında yok. Adres 404 döner |

Olmayan adres 404 döner. Türkçede başlık: “Bu sayfa çizimde yok.”

## Ana sayfa cümleleri

İngilizce: “Custom sheet metal parts. Upload a drawing. Quote in 2 business days.”

Türkçe: “Özel sac parçalar, Türkiye’de. Çizimi yükle. Teklif 2 iş gününde.”

## Teklif formu

Zorunlu: çizim veya notlarda parça tarifi, iş e-postası, malzeme, bu siparişin adedi, tahmini yıllık adet (ya da “Henüz bilmiyorum”), ad, firma.

İsteğe bağlı: ülke, kalınlık (mm), teslim tarihi (ya da “Esnek”).

Dosya: DXF, DWG, STEP, PDF. En fazla 8 dosya, dosya başı 20 MB, toplam 80 MB. Çizimler özel alanda durur, herkese açık sayfada yayımlanmaz.

Ülke ve malzeme ekranda seçilen dilde görünür. Kayıtta değer İngilizce kalır (örneğin Germany, DC01).

## Süreç

1. Çizimi yükle.
2. 2 iş günü içinde fiyat, termin ve üretilebilirlik notu.
3. Yazılı kabul ve avanstan sonra üretim ve kontrol.
4. Sevkiyatta ölçü raporu ve fotoğraf. Bakiye sevkiyattan önce.

## Sitede olmayanlar

- Fiyat listesi ve anında fiyat
- Müşteri logosu, yorum, “trusted by”, parça adedi istatistiği
- ISO veya başka sertifika iddiası
- “Basit CNC” sınırı. Dar kapsam notu yalnızca karmaşık çok eksen, sertifikalı havacılık ve çok dar tolerans içindir
- Doldurulmuş sac kalınlığı, azami sac ölçüsü veya yüzey değeri. Kapasite satırları boştur
- Künye sayfası. Şirket unvanı, adres, sicil ve KDV yayımlanmaz
