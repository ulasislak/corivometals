import type { Locale } from "@/i18n/locale";

const exact: Record<string, string> = {
  "Enter your name.": "Adınızı yazın.",
  "Name is too long.": "Ad çok uzun.",
  "Enter your company.": "Firma adını yazın.",
  "Company is too long.": "Firma adı çok uzun.",
  "Enter a valid email.": "Geçerli bir e-posta yazın.",
  "Email is too long.": "E-posta çok uzun.",
  "Select a country.": "Bir ülke seçin.",
  "Select a material.": "Bir malzeme seçin.",
  "Enter a thickness in millimetres.": "Kalınlığı milimetre olarak yazın.",
  "Enter a thickness in millimetres, for example 2.0.": "Kalınlığı milimetre olarak yazın, örneğin 2.0.",
  "Enter the quantity as a whole number of pieces.": "Adedi tam sayı olarak yazın.",
  "Enter a quantity greater than zero.": "Sıfırdan büyük bir adet yazın.",
  "Enter the estimated annual quantity, or choose I don't know yet.":
    "Tahmini yıllık adedi yazın veya Henüz bilmiyorum'u seçin.",
  "Enter a delivery date, or choose Flexible.": "Bir teslim tarihi yazın veya Esnek'i seçin.",
  "Notes must be text.": "Notlar metin olmalıdır.",
  "Notes are limited to 4000 characters.": "Notlar 4000 karakteri geçemez.",
  "Each file must be 20 MB or smaller.": "Her dosya en fazla 20 MB olabilir.",
  "Add a DXF, DWG, STEP, or PDF, or describe the part in the notes.":
    "Bir DXF, DWG, STEP veya PDF ekleyin ya da parçayı notlarda tarif edin.",
  "Describe the part here, or attach a drawing above.": "Parçayı burada tarif edin ya da yukarıya bir çizim ekleyin.",
  "The form could not be sent. Email us if you reached this by mistake.":
    "Form gönderilemedi. Buna yanlışlıkla ulaştıysanız bize e-posta yazın.",
  "Check the highlighted fields.": "İşaretli alanları kontrol edin.",
  "Refresh the page and submit the form again.": "Sayfayı yenileyip formu tekrar gönderin.",
  "Add a drawing, or describe the part in the notes.": "Bir çizim ekleyin ya da parçayı notlarda tarif edin.",
  "Add at least one DXF, DWG, STEP, or PDF.": "En az bir DXF, DWG, STEP veya PDF ekleyin.",
  "You can attach up to 8 files.": "En fazla 8 dosya ekleyebilirsiniz.",
  "The combined upload is limited to 80 MB.": "Toplam yükleme 80 MB ile sınırlıdır.",
  "The form could not be sent from this page.": "Form bu sayfadan gönderilemedi.",
  "The form is too large to send.": "Form gönderilemeyecek kadar büyük.",
  "Send the form as JSON.": "Formu JSON olarak gönderin.",
  "The quote database could not check the request limit. Try again shortly.":
    "Teklif veritabanı istek sınırını kontrol edemedi. Kısa süre sonra tekrar deneyin.",
  "Too many requests for this email. Wait an hour and try again, or email us.":
    "Bu e-posta için çok fazla istek var. Bir saat bekleyin veya bize yazın.",
  "Too many requests from this network. Wait an hour and try again, or email us.":
    "Bu ağdan çok fazla istek var. Bir saat bekleyin veya bize yazın.",
  "The quote database did not save the request.": "Teklif veritabanı talebi kaydetmedi.",
  "The file store did not issue an upload link. Try again.": "Dosya alanı yükleme bağlantısı vermedi. Tekrar deneyin.",
  "The quote database could not be read.": "Teklif veritabanı okunamadı.",
  "This quote request was not found.": "Bu teklif talebi bulunamadı.",
  "The quote database returned an unreadable row.": "Teklif veritabanı okunamayan bir kayıt döndürdü.",
  "The quote reference is not valid.": "Teklif referansı geçerli değil.",
  "This upload expired. Submit the form again.": "Bu yüklemenin süresi doldu. Formu tekrar gönderin.",
  "The file store could not be read. Try again.": "Dosya alanı okunamadı. Tekrar deneyin.",
  "The quote database did not confirm the request.": "Teklif veritabanı talebi onaylamadı.",
  "The quote inbox is not configured yet. Try again later.": "Teklif kutusu henüz ayarlı değil. Daha sonra tekrar deneyin.",
  "The quote service returned an unreadable response.": "Teklif servisi okunamayan bir yanıt döndürdü.",
  "The quote database did not accept the request.": "Teklif veritabanı talebi kabul etmedi.",
  "The upload list does not match the drawings.": "Yükleme listesi çizimlerle eşleşmiyor.",
  "The quote service did not confirm the request.": "Teklif servisi talebi onaylamadı.",
  "The request could not be sent.": "Talep gönderilemedi.",
  "Supabase public keys are missing.": "Herkese açık Supabase anahtarları eksik.",
  "Refusing to use a Supabase secret key in the browser.": "Gizli Supabase anahtarı tarayıcıda kullanılmaz.",
};

const german: Record<string, string> = {
  "Enter your name.": "Geben Sie Ihren Namen ein.",
  "Name is too long.": "Der Name ist zu lang.",
  "Enter your company.": "Geben Sie Ihre Firma ein.",
  "Company is too long.": "Der Firmenname ist zu lang.",
  "Enter a valid email.": "Geben Sie eine gültige E-Mail-Adresse ein.",
  "Email is too long.": "Die E-Mail-Adresse ist zu lang.",
  "Select a country.": "Wählen Sie ein Land.",
  "Select a material.": "Wählen Sie einen Werkstoff.",
  "Enter a thickness in millimetres.": "Geben Sie die Dicke in Millimetern ein.",
  "Enter a thickness in millimetres, for example 2.0.": "Geben Sie die Dicke in Millimetern ein, zum Beispiel 2.0.",
  "Enter the quantity as a whole number of pieces.": "Geben Sie die Stückzahl als ganze Zahl ein.",
  "Enter a quantity greater than zero.": "Geben Sie eine Stückzahl größer als null ein.",
  "Enter the estimated annual quantity, or choose I don't know yet.":
    "Geben Sie die geschätzte Jahresmenge ein oder wählen Sie „Weiß ich noch nicht“.",
  "Enter a delivery date, or choose Flexible.": "Geben Sie ein Lieferdatum ein oder wählen Sie „Flexibel“.",
  "Notes must be text.": "Notizen müssen Text sein.",
  "Notes are limited to 4000 characters.": "Notizen dürfen höchstens 4000 Zeichen haben.",
  "Each file must be 20 MB or smaller.": "Jede Datei darf höchstens 20 MB groß sein.",
  "Add a DXF, DWG, STEP, or PDF, or describe the part in the notes.":
    "Fügen Sie DXF, DWG, STEP oder PDF hinzu oder beschreiben Sie das Teil in den Notizen.",
  "Describe the part here, or attach a drawing above.": "Beschreiben Sie das Teil hier oder hängen Sie oben eine Zeichnung an.",
  "The form could not be sent. Email us if you reached this by mistake.":
    "Das Formular konnte nicht gesendet werden. Schreiben Sie uns, wenn Sie hier versehentlich gelandet sind.",
  "Check the highlighted fields.": "Prüfen Sie die markierten Felder.",
  "Refresh the page and submit the form again.": "Laden Sie die Seite neu und senden Sie das Formular erneut.",
  "Add a drawing, or describe the part in the notes.": "Fügen Sie eine Zeichnung hinzu oder beschreiben Sie das Teil in den Notizen.",
  "Add at least one DXF, DWG, STEP, or PDF.": "Fügen Sie mindestens eine DXF-, DWG-, STEP- oder PDF-Datei hinzu.",
  "You can attach up to 8 files.": "Sie können höchstens 8 Dateien anhängen.",
  "The combined upload is limited to 80 MB.": "Der gesamte Upload ist auf 80 MB begrenzt.",
  "The form could not be sent from this page.": "Das Formular konnte von dieser Seite nicht gesendet werden.",
  "The form is too large to send.": "Das Formular ist zu groß zum Senden.",
  "Send the form as JSON.": "Senden Sie das Formular als JSON.",
  "The quote database could not check the request limit. Try again shortly.":
    "Die Angebotsdatenbank konnte das Anfragelimit nicht prüfen. Versuchen Sie es in Kürze erneut.",
  "Too many requests for this email. Wait an hour and try again, or email us.":
    "Zu viele Anfragen für diese E-Mail-Adresse. Warten Sie eine Stunde oder schreiben Sie uns.",
  "Too many requests from this network. Wait an hour and try again, or email us.":
    "Zu viele Anfragen aus diesem Netz. Warten Sie eine Stunde oder schreiben Sie uns.",
  "The quote database did not save the request.": "Die Angebotsdatenbank hat die Anfrage nicht gespeichert.",
  "The file store did not issue an upload link. Try again.": "Der Dateispeicher hat keinen Upload-Link ausgegeben. Versuchen Sie es erneut.",
  "The quote database could not be read.": "Die Angebotsdatenbank konnte nicht gelesen werden.",
  "This quote request was not found.": "Diese Angebotsanfrage wurde nicht gefunden.",
  "The quote database returned an unreadable row.": "Die Angebotsdatenbank hat einen unlesbaren Datensatz geliefert.",
  "The quote reference is not valid.": "Die Angebotsreferenz ist ungültig.",
  "This upload expired. Submit the form again.": "Dieser Upload ist abgelaufen. Senden Sie das Formular erneut.",
  "The file store could not be read. Try again.": "Der Dateispeicher konnte nicht gelesen werden. Versuchen Sie es erneut.",
  "The quote database did not confirm the request.": "Die Angebotsdatenbank hat die Anfrage nicht bestätigt.",
  "The quote inbox is not configured yet. Try again later.":
    "Das Angebots-Postfach ist noch nicht eingerichtet. Versuchen Sie es später erneut.",
  "The quote service returned an unreadable response.": "Der Angebotsservice hat eine unlesbare Antwort geliefert.",
  "The quote database did not accept the request.": "Die Angebotsdatenbank hat die Anfrage nicht angenommen.",
  "The upload list does not match the drawings.": "Die Upload-Liste stimmt nicht mit den Zeichnungen überein.",
  "The quote service did not confirm the request.": "Der Angebotsservice hat die Anfrage nicht bestätigt.",
  "The request could not be sent.": "Die Anfrage konnte nicht gesendet werden.",
  "Supabase public keys are missing.": "Die öffentlichen Supabase-Schlüssel fehlen.",
  "Refusing to use a Supabase secret key in the browser.": "Ein geheimer Supabase-Schlüssel wird im Browser nicht verwendet.",
};

const catalogs = { tr: exact, de: german };

export function localizeMessage(locale: Locale, message: string): string {
  if (locale === "en") return message;
  const direct = catalogs[locale][message];
  if (direct) return direct;

  const inbox = message.match(/^The quote inbox is not configured yet\. Email (.+) with your drawing\.$/);
  if (inbox?.[1]) {
    return locale === "tr"
      ? `Teklif kutusu henüz ayarlı değil. Çiziminizi ${inbox[1]} adresine gönderin.`
      : `Das Angebots-Postfach ist noch nicht eingerichtet. Senden Sie Ihre Zeichnung an ${inbox[1]}.`;
  }

  const notAdded = message.match(/^(.*) was not added\. Use DXF, DWG, STEP, or PDF\.$/);
  if (notAdded?.[1]) {
    return locale === "tr"
      ? `${notAdded[1]} eklenmedi. DXF, DWG, STEP veya PDF kullanın.`
      : `${notAdded[1]} wurde nicht hinzugefügt. Verwenden Sie DXF, DWG, STEP oder PDF.`;
  }

  const tooBigAdded = message.match(/^(.*) was not added\. Each file must be 20 MB or smaller\.$/);
  if (tooBigAdded?.[1]) {
    return locale === "tr"
      ? `${tooBigAdded[1]} eklenmedi. Her dosya en fazla 20 MB olabilir.`
      : `${tooBigAdded[1]} wurde nicht hinzugefügt. Jede Datei darf höchstens 20 MB groß sein.`;
  }

  const already = message.match(/^(.*) is already attached\.$/);
  if (already?.[1]) {
    return locale === "tr" ? `${already[1]} zaten eklendi.` : `${already[1]} ist bereits angehängt.`;
  }

  const notAccepted = message.match(/^(.*) is not an accepted drawing\. Use DXF, DWG, STEP, or PDF\.$/);
  if (notAccepted?.[1]) {
    return locale === "tr"
      ? `${notAccepted[1]} kabul edilen bir çizim değil. DXF, DWG, STEP veya PDF kullanın.`
      : `${notAccepted[1]} ist keine zulässige Zeichnung. Verwenden Sie DXF, DWG, STEP oder PDF.`;
  }

  const tooBig = message.match(/^(.*) must be 20 MB or smaller\.$/);
  if (tooBig?.[1]) {
    return locale === "tr" ? `${tooBig[1]} en fazla 20 MB olabilir.` : `${tooBig[1]} darf höchstens 20 MB groß sein.`;
  }

  const unfinished = message.match(/^(.*) did not finish uploading\. Try again\.$/);
  if (unfinished?.[1]) {
    return locale === "tr"
      ? `${unfinished[1]} yüklemesi tamamlanmadı. Tekrar deneyin.`
      : `Der Upload von ${unfinished[1]} wurde nicht abgeschlossen. Versuchen Sie es erneut.`;
  }

  const sizeUnknown = message.match(/^The file store did not confirm the size of (.*)\. Try again\.$/);
  if (sizeUnknown?.[1]) {
    return locale === "tr"
      ? `Dosya alanı ${sizeUnknown[1]} boyutunu doğrulamadı. Tekrar deneyin.`
      : `Der Dateispeicher hat die Größe von ${sizeUnknown[1]} nicht bestätigt. Versuchen Sie es erneut.`;
  }

  const uploadFailed = message.match(/^(.*) could not be uploaded to the file store\. Try again\.$/);
  if (uploadFailed?.[1]) {
    return locale === "tr"
      ? `${uploadFailed[1]} dosya alanına yüklenemedi. Tekrar deneyin.`
      : `${uploadFailed[1]} konnte nicht in den Dateispeicher geladen werden. Versuchen Sie es erneut.`;
  }

  return message;
}
