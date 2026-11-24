import type { Copy } from "@/i18n/copy";

const countriesDe: Record<string, string> = {
  Germany: "Deutschland",
  Austria: "Österreich",
  Netherlands: "Niederlande",
  Belgium: "Belgien",
  Luxembourg: "Luxemburg",
  France: "Frankreich",
  Switzerland: "Schweiz",
  Italy: "Italien",
  Poland: "Polen",
  Czechia: "Tschechien",
  Denmark: "Dänemark",
  Sweden: "Schweden",
  Norway: "Norwegen",
  Finland: "Finnland",
  Spain: "Spanien",
  Portugal: "Portugal",
  Ireland: "Irland",
  "United Kingdom": "Vereinigtes Königreich",
  Other: "Andere",
};

export function applyGerman(copy: Copy): void {
  copy.description =
    "Blechteile, geschweißte Gehäuse und CNC-Teile aus Türkiye für Hersteller in Deutschland, Österreich und der Schweiz. Zeichnung hochladen. Angebot in 2 Werktagen, mit Preis, Lieferzeit und Fertigungshinweis.";
  copy.ogTitle = "Corivo — Blechteile und Gehäuse aus Türkiye";
  copy.date = "21. November 2026";
  copy.notPublished = "Noch nicht veröffentlicht";
  copy.chrome.skip = "Zum Inhalt";
  copy.chrome.homeAria = "Corivo Startseite";
  copy.chrome.menu = "Menü";
  copy.chrome.close = "Schließen";
  copy.chrome.quoteShort = "Angebot";
  copy.chrome.quote = "Angebot anfragen";
  copy.chrome.privacy = "Datenschutz";
  copy.chrome.groups = { products: "Produkte", company: "Unternehmen", legal: "Rechtliches" };
  copy.chrome.header = [
    { href: "/sheet-metal", label: "Blech" },
    { href: "/enclosures", label: "Gehäuse" },
    { href: "/cnc-parts", label: "CNC-Teile" },
    { href: "/industries", label: "Branchen" },
    { href: "/how-it-works", label: "Ablauf" },
    { href: "/faq", label: "FAQ" },
  ];
  copy.chrome.products = [
    { href: "/sheet-metal", label: "Blech" },
    { href: "/enclosures", label: "Gehäuse und Schweißbaugruppen" },
    { href: "/cnc-parts", label: "CNC-Bearbeitung" },
  ];
  copy.chrome.company = [
    { href: "/industries", label: "Branchen" },
    { href: "/how-it-works", label: "Ablauf" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "Über uns" },
    { href: "/request-a-quote", label: "Angebot anfragen" },
  ];
  copy.chrome.legal = [
    { href: "/privacy", label: "Datenschutz" },
    { href: "/terms", label: "Bedingungen" },
  ];
  copy.chrome.footerNote = "Angebot innerhalb von 2 Werktagen. Preise stehen im Angebot, nicht auf dieser Seite.";
  copy.chrome.language = "Sprache";
  copy.cta = {
    kicker: "NÄCHSTER SCHRITT",
    title: "Senden Sie die Zeichnung.",
    text: "Eine vollständige Anfrage wird innerhalb von 2 Werktagen beantwortet: Preis, Lieferzeit und ein Fertigungshinweis. Preise bleiben im Angebot.",
  };
  copy.home = {
    ...copy.home,
    title: "Blechteile und Gehäuse nach Zeichnung",
    eyebrow: "BLECH · GEHÄUSE · CNC",
    h1: "Blechteile aus Türkiye. Zeichnung hochladen. Angebot in 2 Werktagen.",
    lede: "Laserschneiden, Kanten, geschweißte Gehäuse und CNC-Teile aus Türkiye. Für Hersteller in Deutschland, Österreich und der Schweiz. Prototypen und Wiederholserien. Senden Sie DXF, DWG, STEP oder PDF.",
    trust: "Angebot in 2 Werktagen. Fertigungshinweis bei jedem Angebot. Maßprotokoll und Fotos bei jeder Sendung.",
    processTitle: "Von der Datei zum fertigen Teil",
    processText: "Laden Sie die Zeichnung hoch. Das Angebot kommt innerhalb von 2 Werktagen. Die Fertigungszeit steht im Angebot, nicht in diesen 2 Werktagen.",
    productsTitle: "Was wir fertigen",
    productsText: "Blech, Schweißbaugruppen und CNC-Teile. Werkstoff, Oberfläche und Toleranz kommen aus Ihrer Zeichnung und werden im Angebot bestätigt.",
    families: [
      { title: "Blech", text: "Lasergeschnittene Platinen und Kantteile: Abdeckungen, Winkel, Knotenbleche und Chassis. Dicke und Biegerichtung stehen in der Zeichnung.", href: "/sheet-metal", link: "Laserschneiden und Kanten", table: "tolerance" },
      { title: "Gehäuse und Schweißbaugruppen", text: "Geschweißte Kästen, Rahmen, Schutzverkleidungen und Schränke. Nennen Sie RAL und die Flächen, die blank bleiben müssen, wenn Sie Pulver brauchen.", href: "/enclosures", link: "Gehäuse und Pulverbeschichtung", table: "finish" },
      { title: "CNC-Bearbeitung", text: "Gefräste und gedrehte Teile, vom Einzelprototyp bis zur Wiederholserie. Gewinde, Passungen und die maßgeblichen Flächen gehören auf die Zeichnung.", href: "/cnc-parts", link: "CNC-Bearbeitung", table: "cnc" },
    ],
    whyTitle: "Eine Zeichnung, ein Angebot, ein Ansprechpartner",
    faqTitle: "Vor dem Hochladen",
    faqLink: "FAQ öffnen",
    flat: "ABWICKLUNG",
  };
  copy.claims = [
    { label: "Angebot", value: "2 Werktage" },
    { label: "Bei jedem Angebot", value: "Fertigungshinweis" },
    { label: "Bei jeder Sendung", value: "Maßprotokoll und Fotos" },
    { label: "Auf Anfrage", value: "Werkstoffzeugnis und NDA" },
  ];
  copy.steps = [
    { n: "01", title: "Zeichnung hochladen", text: "Senden Sie DXF, DWG, STEP oder PDF, oder beschreiben Sie das Teil in den Notizen. Nennen Sie Werkstoff, Stückzahl dieser Bestellung und die geschätzte Jahresmenge." },
    { n: "02", title: "Angebot mit Fertigungshinweis", text: "Innerhalb von 2 Werktagen erhalten Sie einen Preis, eine Lieferzeit und einen Hinweis zu allem, was vor dem Schneiden, Kanten oder Schweißen bestätigt werden muss." },
    { n: "03", title: "Fertigung und Prüfung", text: "Nachdem Sie das Angebot schriftlich annehmen und die Anzahlung leisten, werden die Teile in Türkiye gefertigt und gegen die angenommene Zeichnung geprüft." },
    { n: "04", title: "Lieferung", text: "Jede Sendung enthält ein Maßprotokoll und Fotos. Geliefert wird EXW, FCA oder DAP, wie im Angebot geschrieben. Der Restbetrag ist vor dem Versand fällig." },
  ];
  copy.reasons = [
    { title: "Ein Ansprechpartner", text: "Sie haben von der ersten Zeichnung bis zu späteren Losen einen Ansprechpartner. Fragen zu einer Biegung, einer Schweißnaht oder einem Versand gehen an dieselbe Stelle." },
    { title: "Ein Prüfprotokoll zu jeder Sendung", text: "Jede Sendung enthält ein Maßprotokoll und Fotos der Teile. Die Kiste lässt sich bei Ankunft mit dem Protokoll vergleichen." },
    { title: "Wiederholaufträge bleiben nachvollziehbar", text: "Das Angebot behält den Zeichnungssatz, den Werkstoff und die Jahresmenge. Das nächste Los kann sich auf diese Angebotsreferenz beziehen." },
  ];
  copy.quoteContents = ["Preis und Währung", "Fertigungszeit", "Incoterm und benannter Ort", "Anzahlung und Restbetrag", "Fertigungshinweis", "Angebotsreferenz", "Das Datum, bis zu dem das Angebot gilt"];
  copy.how = {
    title: "Ablauf",
    description: "Zeichnung hochladen, innerhalb von 2 Werktagen Angebot und Fertigungshinweis erhalten, danach Fertigung in Türkiye, Prüfung und Lieferung EXW, FCA oder DAP.",
    kicker: "ABLAUF",
    heading: "So läuft ein Corivo-Auftrag",
    lede: "Ein Ansprechpartner, eine Angebotsreferenz und ein schriftlicher Fertigungshinweis, bevor Metall geschnitten wird. Zahlung ist eine Anzahlung, dann der Restbetrag vor dem Versand. Diese Website nimmt keine Zahlung an.",
    crumb: "Ablauf",
    detail: [
      "Nutzen Sie DXF, DWG, STEP oder PDF, oder beschreiben Sie das Teil, wenn die Zeichnung noch nicht fertig ist. Nennen Sie Werkstoff, Stückzahl dieses Loses und die geschätzte Jahresmenge. Dicke und ein Lieferdatum helfen, wenn Sie sie kennen. Wenn Sie vor der Fertigungsdatei eine NDA brauchen, hängen Sie ein einseitiges PDF an, das das sagt.",
      "Die Antwort enthält einen Preis, eine Fertigungszeit, einen Incoterm und einen Fertigungshinweis. Der Hinweis markiert eine zu enge Biegung, eine fehlende Schweißnaht oder eine nicht genannte Beschichtung. Er ist keine Neukonstruktion. Sie nehmen das Angebot einschließlich dieses Hinweises schriftlich an.",
      "Die Fertigung beginnt nach schriftlicher Annahme und der Anzahlung. Die Teile werden in Türkiye gefertigt und gegen die angenommene Zeichnung geprüft. Diese 2 Werktage gelten nicht für diesen Schritt. Es gilt die Lieferzeit im Angebot.",
      "Sie erhalten die Teile, ein Maßprotokoll und Fotos. Ein Werkstoffzeugnis liegt bei, wenn der Auftrag danach gefragt hat. Der Restbetrag ist vor dem Versand fällig. EXW, FCA oder DAP ist der Begriff, der auf dem Angebot steht.",
    ],
    contains: "Was das Angebot enthält",
    note: "Das Gültigkeitsdatum steht auf dem Angebot. Weichen Angebot und diese Website-Bedingungen bei Preis, Datum, Incoterm oder einer Ausnahme ab, gilt das angenommene Angebot.",
  };
  copy.faq = {
    title: "FAQ",
    description: "Was Corivo liefert, für wen die Teile sind, wo sie gefertigt werden, Dateiformate, Mindestmenge, Angebot in 2 Werktagen, EXW, FCA, DAP, Zahlung, NDA und Nachfertigung.",
    kicker: "FAQ",
    heading: "Häufige Fragen",
    lede: "Was Corivo liefert, für wen die Teile sind und wo sie gefertigt werden. Danach Formate, Menge, Zeit, Lieferbedingungen, Zahlung, Vertraulichkeit und Teile, die nicht zur Zeichnung passen.",
    crumb: "FAQ",
    items: [
      { question: "Was liefert Corivo?", answer: "Corivo liefert Blechteile, geschweißte Gehäuse und CNC-Teile aus Türkiye. Eine vollständige Anfrage erhält innerhalb von 2 Werktagen ein Angebot. Das Angebot enthält einen Preis, eine Fertigungszeit und einen Fertigungshinweis." },
      { question: "Für wen sind die Teile?", answer: "Für Hersteller in Deutschland, Österreich und der Schweiz. Typische Käufer sind Maschinen- und Anlagenbauer, Firmen mit Bedarf an Metallschränken oder Gehäusen und Hersteller von HLK-Geräten. Der Angebotsweg ist derselbe. Auch ein Käufer außerhalb dieser Gruppen kann eine Zeichnung senden." },
      { question: "Wo werden die Teile gefertigt?", answer: "Die Teile werden in Türkiye gefertigt und an Käufer in Deutschland, Österreich und der Schweiz geliefert. Die Lieferung ist EXW, FCA oder DAP, je nachdem welcher Incoterm auf dem Angebot steht." },
      { question: "Welche Dateiformate nehmen Sie an?", answer: "Wir nehmen DXF, DWG, STEP (einschließlich .stp) und PDF an. Sie können bis zu 8 Dateien anhängen, jede bis 20 MB. Eine DXF- oder STEP-Datei ist verlässlicher als ein PDF allein. Wenn Sie vor der Fertigungszeichnung eine NDA brauchen, hängen Sie ein einseitiges PDF an, das das sagt, und schreiben Sie es in die Notizen. Wir senden eine NDA." },
      { question: "Wie hoch ist die Mindestbestellmenge?", answer: "Wir veröffentlichen nicht eine Mindestmenge für jedes Teil. Das Angebot nennt die Menge, die wir fertigen können, und ob ein kleineres oder größeres Los den Preis ändert. Nennen Sie die geschätzte Jahresmenge, damit der Preis nicht nur das erste Los abbildet." },
      { question: "Wie lange dauert ein Angebot, und wie lange die Fertigung?", answer: "Sie erhalten innerhalb von 2 Werktagen nach einer vollständigen Anfrage ein Angebot: Zeichnung oder Beschreibung des Teils, geschäftliche E-Mail, Werkstoff, Stückzahl, geschätzte Jahresmenge, Name und Firma. Dicke und Lieferdatum sind optional. Können wir eine Datei nicht lesen, bitten wir um eine weitere Kopie, und die 2 Werktage beginnen, wenn die Zeichnung lesbar ist. Die Fertigungszeit ist getrennt. Sie steht im Angebot und hängt von Werkstoff, Menge, Oberfläche und dem vereinbarten Incoterm ab." },
      { question: "Was ist, wenn ein CNC-Teil außerhalb Ihrer Möglichkeiten liegt?", answer: "Liegt ein Teil außerhalb der Möglichkeiten unserer Partnerwerkstätten, sagen wir das innerhalb der Angebotsfrist. Fräsen und Drehen nach Zeichnung. Komplexe mehrachsige Teile, Teile für die zertifizierte Luftfahrt oder Teile mit sehr enger Toleranz werden fallweise angeboten oder abgelehnt." },
      { question: "Welche Incoterms können wir nutzen?", answer: "EXW, FCA und DAP. EXW bedeutet, Sie holen am im Angebot genannten Ort ab. FCA bedeutet, die Ware wird am genannten Ort an den genannten Frachtführer übergeben. DAP bedeutet, wir liefern an den genannten Ort im Bestimmungsland, und Sie erledigen Einfuhrabfertigung und Zoll. Es gilt der Incoterm, der auf Ihrem Angebot steht." },
      { question: "Wie sind die Zahlungsbedingungen?", answer: "Eine Anzahlung vor Fertigungsbeginn und der Restbetrag vor dem Versand. Beträge und Währung stehen im Angebot. Auf dieser Website wird nicht gezahlt. Die Fertigung beginnt, nachdem das Angebot schriftlich angenommen und die Anzahlung eingegangen ist." },
      { question: "Wie gehen Sie mit Vertraulichkeit um?", answer: "Zeichnungen und Anfragedaten werden für das Angebot genutzt und, wenn Sie bestellen, für die Fertigung. Dateien liegen in einem privaten Speicher, nicht auf einer öffentlichen Seite. Eine NDA unterschreiben wir auf Anfrage. Wenn Sie die NDA vor den Fertigungsdateien wollen, schreiben Sie das in die Notizen und hängen Sie statt der Zeichnung ein Platzhalter-PDF an." },
      { question: "Welche Qualitätsdokumente kommen mit den Teilen?", answer: "Jede Sendung enthält ein Maßprotokoll und Fotos der Teile. Ein Werkstoffzeugnis wird auf Anfrage gesendet. Bitten Sie im Auftrag darum, wenn es mit der Ware kommen soll." },
      { question: "Was passiert, wenn Teile nicht zur Zeichnung passen?", answer: "Schreiben Sie uns mit der Angebotsreferenz, Fotos und dem Punkt, der nicht zur angenommenen Zeichnung oder zu den Ausnahmen im Fertigungshinweis passt. Wir prüfen das und vereinbaren Nachfertigung, Nacharbeit oder eine Gutschrift für die abweichenden Teile. Transportschaden folgt dem Incoterm im Angebot. Bei EXW oder FCA kann das Risiko schon bei der Übergabe auf Sie übergegangen sein. Bei DAP sind wir verantwortlich, bis die Ware am genannten Ort entladebereit ist." },
    ],
  };
  copy.industries = {
    title: "Branchen",
    description: "Blechteile, Gehäuse und CNC-Teile aus Türkiye für Hersteller in Deutschland, Österreich und der Schweiz, einschließlich Maschinen- und Anlagenbau, Schrank- und Gehäusebau und HLK.",
    kicker: "BRANCHEN",
    heading: "Für wen die Teile sind",
    lede: "Hersteller in Deutschland, Österreich und der Schweiz, die Teile aus Türkiye kaufen. Die Gruppen unten sind häufige Anwendungen, keine geschlossene Liste. Der Angebotsweg ist derselbe: eine Zeichnung oder eine Beschreibung, die Jahresmenge und eine Antwort innerhalb von 2 Werktagen.",
    crumb: "Branchen",
    items: [
      { id: "machine-builders", title: "Maschinen- und Anlagenbauer", lede: "Schutzverkleidungen, Rahmen, Abdeckungen und geschweißte Grundgestelle für Maschinen und Industrieanlagen.", parts: ["Blechverkleidungen und Abdeckungen", "Maschinenrahmen und geschweißte Gestelle", "Winkel und Montageplatten", "Schränke, die an eine Maschine geschraubt werden"], send: "Senden Sie die Teilezeichnungen, die gefertigt werden sollen, und die Baugruppe nur, wenn sie Schweißnähte, Scharniere oder den Zusammenbau erklärt. Nennen Sie Werkstoff und Jahresmenge.", href: "/sheet-metal", linkLabel: "Blech" },
      { id: "panel-builders", title: "Schränke und Gehäuse", lede: "Metallschränke, Steuergehäuse, Türen und Montageplatten. Im Elektrohandwerk heißt dieser Käufer oft Schaltschrankbauer. Corivo liefert das Metallgehäuse, nicht die Verdrahtung darin.", parts: ["Geschweißte Kästen und Schränke", "Türen und Montageplatten", "Flanschplatten und DXF-Ausschnitte", "Pulverbeschichtete Gehäuse"], send: "Legen Sie die Ausschnitte in die DXF. Wird der Kasten lackiert, nennen Sie den RAL und welche Flächen oder Gewinde blank bleiben. Eine STEP-Datei hilft, wenn der Kasten geschweißt ist.", href: "/enclosures", linkLabel: "Gehäuse" },
      { id: "hvac", title: "HLK-Geräte", lede: "Gehäuse, Kanalteile, Revisionsdeckel und Winkel für Heizungs-, Lüftungs- und Klimageräte, in verzinktem Stahl, Edelstahl oder Aluminium.", parts: ["Gerätegehäuse", "Kanalstücke und Übergänge", "Revisionsdeckel", "Verzinkte oder Edelstahlwinkel"], send: "Nennen Sie die Umgebung, wenn sie den Werkstoff ändert. Nennen Sie die Auflagenklasse des verzinkten Blechs, wenn eine bestimmte verlangt ist.", href: "/sheet-metal", linkLabel: "Blech" },
    ],
  };
  copy.about = {
    title: "Über uns",
    description: "Corivo ist ein Beschaffungspartner für Blechteile, Gehäuse und CNC-Teile aus Türkiye für Hersteller in Deutschland, Österreich und der Schweiz.",
    kicker: "ÜBER UNS",
    heading: "Über Corivo",
    lede: "Corivo ist ein Beschaffungspartner für Blechteile, Gehäuse und CNC-Teile aus Türkiye. Die Käufer sind Hersteller in Deutschland, Österreich und der Schweiz, darunter Maschinen- und Anlagenbauer, Firmen mit Bedarf an Metallschränken oder Gehäusen und HLK-Firmen.",
    crumb: "Über uns",
    paragraphs: [
      "Sie arbeiten von der ersten Zeichnung bis zu späteren Losen mit einem Ansprechpartner. Diese Website gibt es auf Englisch, Deutsch und Türkisch. Die deutschen Seiten richten sich an Hersteller in Deutschland, Österreich und der Schweiz.",
      "Jedes Angebot enthält einen Fertigungshinweis. Jede Sendung enthält ein Maßprotokoll und Fotos. Ein Werkstoffzeugnis und eine NDA gibt es, wenn Sie danach fragen.",
      "Preise, Fertigungszeiten und Unterlagen, die ein bestimmter Auftrag braucht, stehen im Angebot, wo sie mit der Zeichnung geprüft werden können. Sie stehen nicht auf dieser Website.",
    ],
  };
  copy.sheet = {
    title: "Laserschneiden und Kanten",
    description: "Lasergeschnittenes und gekantetes Blech in DC01, S235JR, verzinktem Stahl, 304, 316 und Aluminium 5052. Senden Sie DXF, DWG, STEP oder PDF für ein Angebot innerhalb von 2 Werktagen.",
    kicker: "BLECH",
    heading: "Laserschneiden und Kanten",
    lede: "Flache Zuschnitte und Kantteile, angeboten nach Ihrer Zeichnung. Der Fertigungshinweis nennt Biegeradien, Abstände von Loch zu Biegung und alles andere, das vor dem Schneiden bestätigt werden muss.",
    crumb: "Blech",
    coversTitle: "Was diese Seite umfasst",
    covers: [
      "Lasergeschnittene Profile und auf der Abkantpresse geformte Teile. Typische Arbeit sind Abdeckungen, Winkel, Knotenbleche, Montageplatten und mehrfach gekantete Chassisteile in den Werkstoffen unten.",
      "Ein Werkstoff, der nicht in der Tabelle steht, kann in den Notizen genannt werden. Das Angebot sagt, ob wir ihn liefern können. Toleranzen werden nicht als eine Zahl für jedes Teil veröffentlicht. Sie folgen der Zeichnung, werden im Fertigungshinweis bestätigt, und die Sendung enthält ein Maßprotokoll.",
    ],
    drawingTitle: "Was auf die Zeichnung gehört",
    send: [
      "Eine DXF für die Abwicklung, oder eine STEP-Datei, wenn das Teil schon gekantet ist.",
      "Werkstoff und Dicke in Millimetern. Lassen Sie die Dicke nicht aus einem PDF abgreifen.",
      "Welche Fläche nach dem Kanten innen liegt, wenn die Zeichnung das nicht schon zeigt.",
      "Gewindebohrungen, eingesetzte Beschläge und jede Kantenbedingung, die genannt werden soll.",
      "Stückzahl dieser Bestellung und die geschätzte Jahresmenge.",
    ],
    drawingNoteBefore: "Geschweißte Kästen und Pulverbeschichtung werden auf der Seite",
    drawingNoteLink: "Gehäuse",
    drawingNoteAfter: "angeboten. Bearbeitete Teile können in den Notizen derselben Anfrage ergänzt werden.",
    capabilitiesTitle: "Möglichkeiten",
  };
  copy.enclosures = {
    title: "Gehäuse und Schweißbaugruppen",
    description: "Geschweißte Gehäuse, Rahmen und Schränke aus Türkiye, mit Pulverbeschichtung, wenn Sie die Farbe nennen. Jede Sendung enthält ein Maßprotokoll und Fotos.",
    kicker: "GEHÄUSE",
    heading: "Gehäuse und Schweißbaugruppen",
    lede: "Geschweißte Kästen, Rahmen, Maschinenschränke und Gerätegehäuse. Pulverbeschichtung ist Teil des Angebots, wenn Sie die Farbe und die Flächen nennen, die frei von Lack bleiben müssen.",
    crumb: "Gehäuse",
    coversTitle: "Was diese Seite umfasst",
    covers: [
      "Baugruppen, die geschnitten, geformt und geschweißt werden: Schaltschränke, Maschinenschutz mit Rahmen, Gestelle und geschlossene Kästen. Senden Sie eine STEP-Datei der Baugruppe, wenn Sie eine haben, plus ein PDF mit den Schweißangaben.",
      "Fehlen Schweißsymbole oder ein kritisches Bezugssystem, listet der Fertigungshinweis die Annahme. Die Fertigung wartet, bis Sie diesen Hinweis schriftlich annehmen. Verzug an langen Nähten wird vor dem Schneiden genannt, nicht nachdem die Kiste versandt ist.",
    ],
    sheetLink: "Blech",
    cncLink: "CNC-Teile",
    bridgeBefore: "Abwicklungen ohne Schweißnaht werden als",
    bridgeMiddle: " angeboten. Bearbeitete Naben und Distanzstücke können in derselben Anfrage als",
    bridgeAfter: "ergänzt werden.",
    coatTitle: "Pulverbeschichtung",
    coat: [
      "Nennen Sie die RAL-Farbe und ob die Oberfläche glatt oder strukturiert ist. Markieren Sie Gewinde, Erdungspunkte und Anlageflächen, die abgeklebt werden müssen. Die Schichtstärke wird im Angebot bestätigt, nachdem diese Angaben bekannt sind. Sie wird nicht von einem Foto geschätzt.",
      "Es gelten dieselben Werkstoffe wie beim Blech. Edelstahl, verzinkter Stahl, Baustahl und Aluminium 5052 sind die Standardliste.",
    ],
    arrivesTitle: "Was mit der Ware ankommt",
    arrives: [
      "Die Teile, verpackt für den Incoterm im Angebot.",
      "Ein Maßprotokoll gegen die angenommene Zeichnung.",
      "Fotos der Teile.",
      "Ein Werkstoffzeugnis, wenn Sie es im Auftrag verlangt haben.",
    ],
    capabilitiesTitle: "Möglichkeiten",
  };
  copy.cnc = {
    title: "CNC-Bearbeitung",
    description: "Gefräste und gedrehte Teile aus Türkiye. Senden Sie STEP und ein PDF. Gewinde, Passungen und die maßgeblichen Flächen werden im Fertigungshinweis bestätigt.",
    kicker: "CNC",
    heading: "CNC-Bearbeitung",
    lede: "Fräsen und Drehen, vom Einzelprototyp bis zur Wiederholserie. Senden Sie STEP und ein PDF. Der Fertigungshinweis bestätigt, was wir auf der Zeichnung sehen, bevor Sie das Angebot annehmen.",
    crumb: "CNC",
    simpleTitle: "Was wir bearbeiten",
    simple: [
      "Prismatische Teile und Drehteile: Taschen, Flächen, Bohrungen, Gewinde und Passungen. Setzen Sie die maßgeblichen Flächen auf die Zeichnung.",
      "Wir veröffentlichen nicht eine Bearbeitungstoleranz für jedes Teil. Grundlage ist die Zeichnung. Der Fertigungshinweis bestätigt, was wir sehen, und das Maßprotokoll prüft die Teile, die versandt werden.",
    ],
    sheetLink: "Blech",
    enclosureLink: "Gehäuse",
    withBefore: "Ein CNC-Teil kann allein geliefert werden oder zusammen mit",
    withMiddle: "oder einem",
    withAfter: ". Schreiben Sie in die Notizen, wenn beides eine Sendung ist.",
    gradesTitle: "Werkstoffe",
    grades: "Das Angebotsformular bepreist DC01, S235JR, verzinkten Stahl, 304, 316 und Aluminium 5052. Braucht ein Drehteil einen anderen Werkstoff, nennen Sie ihn in den Notizen. Das Angebot bestätigt, ob dieser Werkstoff enthalten ist.",
    scopeTitle: "Möglichkeit",
    scope: [
      "Liegt ein Teil außerhalb der Möglichkeiten unserer Partnerwerkstätten, sagen wir das innerhalb der Angebotsfrist.",
      "Fräsen und Drehen nach Zeichnung. Komplexe mehrachsige Teile, Teile für die zertifizierte Luftfahrt oder Teile mit sehr enger Toleranz werden fallweise angeboten oder abgelehnt.",
    ],
  };
  copy.quotePage = {
    title: "Angebot anfragen",
    description: "Senden Sie eine Zeichnung oder eine kurze Beschreibung, den Werkstoff, die Stückzahl und die Jahresmenge. Corivo antwortet innerhalb von 2 Werktagen mit Preis, Lieferzeit und Fertigungshinweis.",
    kicker: "ANFRAGE",
    heading: "Angebot anfragen",
    lede: "Fügen Sie eine Zeichnung oder eine kurze Beschreibung, den Werkstoff, die Stückzahl und die Jahresmenge hinzu. Eine vollständige Anfrage wird innerhalb von 2 Werktagen mit Preis, Lieferzeit und Fertigungshinweis beantwortet.",
    crumb: "Angebot anfragen",
  };
  copy.thanks = {
    title: "Anfrage eingegangen",
    description: "Ihre Corivo-Angebotsanfrage ist eingegangen.",
    kicker: "ANFRAGE EINGEGANGEN",
    heading: "Anfrage eingegangen",
    body: "Wir haben die Anfrage. Sie erhalten innerhalb von 2 Werktagen eine Antwort mit Preis, Lieferzeit und Fertigungshinweis. Kann eine Datei nicht gelesen werden, schreiben wir an die angegebene E-Mail und bitten um eine weitere Kopie. Die 2 Werktage beginnen, wenn die Zeichnung lesbar ist.",
    reference: "Referenz",
    referenceMissing: "steht in der Bestätigungs-E-Mail",
    back: "Zur Startseite",
  };
  copy.missing = {
    title: "Diese Seite steht nicht auf der Zeichnung.",
    body: "Die Adresse passt zu keiner Seite dieser Website.",
    home: "Startseite",
    quote: "Angebot anfragen",
  };
  copy.imprint = {
    title: "Impressum",
    description: "Rechtliche Identität und Kontaktdaten des Betreibers der Corivo-Website.",
    kicker: "RECHTLICHES",
    heading: "Impressum",
    lede: "Identität des Betreibers dieser Website. Eine Zeile „Noch nicht veröffentlicht“ ist in der Website-Konfiguration nicht gesetzt. Sie ist keine erfundene Adresse.",
    crumb: "Impressum",
    labels: ["Firmenname", "Adresse", "Postleitzahl", "Ort", "Land", "Register", "USt-IdNr.", "Vertreten durch", "E-Mail", "Telefon"],
    closing: "Corivo liefert Blechteile, Gehäuse und CNC-Teile aus Türkiye an Hersteller in Deutschland, Österreich und der Schweiz. Diese Website gibt es auf Englisch, Deutsch und Türkisch. Die englischen Seiten richten sich an Käufer in Europa.",
  };
  copy.privacy = {
    ...copy.privacy,
    title: "Datenschutz",
    description: "Wie Corivo Angebotsanfragen, Zeichnungen, Analyse-Cookies und die Rechte der Personen behandelt, die eine Anfrage senden.",
    kicker: "RECHTLICHES",
    heading: "Datenschutz",
    lede: "Diese Seite beschreibt, was das Angebotsformular erfasst, warum es aufbewahrt wird und wer es sonst verarbeitet. Stand 24. November 2026.",
    crumb: "Datenschutz",
    updated: "Zuletzt aktualisiert",
    who: "Wer verantwortlich ist",
    controller: "ist Verantwortlicher für Anfragen, die über diese Website gesendet werden.",
    emailLead: "Datenschutzanfragen gehen an",
    noEmail: "Solange keine Kontakt-E-Mail veröffentlicht ist, senden Sie eine Datenschutzanfrage über das Angebotsformular und schreiben Sie „Datenschutzanfrage“ in die Notizen.",
    collectTitle: "Was wir erfassen",
    collect: [
      "Name, Firma, E-Mail und Land.",
      "Werkstoff, Dicke wenn Sie sie senden, Stückzahl, geschätzte Jahresmenge, ein Lieferdatum oder ein flexibles Datum, und Notizen.",
      "Zeichnungsdateien, die Sie hochladen (DXF, DWG, STEP oder PDF).",
      "Die Seite, von der Sie gesendet haben, UTM-Parameter und die verweisende URL, wenn der Browser sie liefert.",
      "Ein gesalzener Hash der IP-Adresse, nur um wiederholte Sendungen zu begrenzen. Die rohe IP-Adresse wird nicht gespeichert.",
    ],
    whyTitle: "Warum",
    why: "Wir nutzen die Anfrage, um ein Angebot zu erstellen, und wenn Sie bestellen, um die Teile zu fertigen, zu versenden und ein späteres Los oder eine Beanstandung zu bearbeiten. Das sind Schritte zu einem Vertrag. Der IP-Hash ist ein berechtigtes Interesse, das Formular nutzbar zu halten. Analyse, wenn Sie sie annehmen, beruht auf Einwilligung. Sie können die Analyse ablehnen und trotzdem eine Angebotsanfrage senden.",
    howLongTitle: "Wie lange",
    howLong: "Anfragedatensätze und Zeichnungen werden aufbewahrt, damit wir anbieten, fertigen und auf eine Angebotsreferenz zurückkommen können. Sie können uns bitten, eine Anfrage zu löschen, aus der kein Auftrag wurde. Datensätze, aus denen ein Auftrag wurde, bleiben so lange, wie Auftrag, Rechnung und eine Beanstandung zu den Teilen es verlangen.",
    processorsTitle: "Wer sonst verarbeitet",
    processorsLead: "Wir verkaufen Anfragedaten nicht. Diese Anbieter verarbeiten sie, um die Website zu betreiben:",
    supabase: "Supabase speichert den Anfragedatensatz und den privaten Zeichnungsspeicher. Siehe die",
    resend: "Resend sendet die Benachrichtigung an uns und die Empfangsbestätigung an Sie. Siehe die",
    host: "Cloudflare betreibt die Website. Siehe die",
    google: "Google Tag Manager steht auf jeder Seite. Die Messung bleibt aus, bis Sie die Analyse akzeptieren. Siehe die",
    policy: "Datenschutzerklärung",
    region: "Die Region ist die, die in diesen Projekten eingestellt ist. Deren Bedingungen beschreiben eine Übermittlung außerhalb des Landes, in dem Sie sind. Zeichnungen werden nicht auf einer öffentlichen Seite veröffentlicht. Download-Links in der internen Benachrichtigung laufen nach sieben Tagen ab.",
    cookiesTitle: "Cookies und Speicher im Browser",
    cookies: "Das Angebotsformular setzt kein Analyse-Cookie. Google Tag Manager steht auf jeder Seite, damit das Tag gefunden wird. Die Analyse bleibt aus, bis Sie zustimmen. Die Wahl liegt im lokalen Speicher unter corivo-consent. UTM-Parameter und der externe Verweis liegen im Sitzungsspeicher, damit sie am Formular hängen, wenn Sie zuerst eine andere Seite öffnen. Die Danke-Seite liest die Angebotsreferenz aus dem Sitzungsspeicher.",
    analyticsOff: "Analyse ist auf dieser Website nicht eingeschaltet, deshalb wird kein Analyse-Cookie gesetzt.",
    choice: "Aktuelle Wahl",
    choiceUnset: "nicht gesetzt",
    choiceAccepted: "angenommen",
    choiceRejected: "abgelehnt",
    accept: "Analyse annehmen",
    reject: "Ablehnen",
    banner: "Optionale Analyse bleibt aus, bis Sie annehmen. Das Angebotsformular braucht dieses Cookie nicht.",
    rightsTitle: "Ihre Rechte",
    rights: "Sie können Auskunft, Berichtigung, Löschung, Einschränkung oder eine Kopie der Anfragedaten verlangen und der Verarbeitung auf Basis berechtigten Interesses widersprechen. Sie können die Einwilligung zur Analyse widerrufen, ohne eine schon gesendete Angebotsanfrage zu berühren. Sie können sich auch bei der Aufsichtsbehörde beschweren, wo Sie leben oder arbeiten, oder wo der Verantwortliche niedergelassen ist.",
  };
  copy.terms = {
    title: "Bedingungen",
    description: "Bedingungen für Corivo-Angebote: Zeichnungen, der Fertigungshinweis, Anzahlung und Restbetrag, EXW, FCA, DAP und abweichende Teile.",
    kicker: "RECHTLICHES",
    heading: "Bedingungen",
    lede: "Diese Bedingungen gelten für die Website und den Angebotsprozess. Ein angenommenes Angebot bestimmt Preis, Datum, Incoterm und jede darauf geschriebene Ausnahme. Stand 21. November 2026.",
    crumb: "Bedingungen",
    updated: "Zuletzt aktualisiert",
    sections: [
      { title: "Die Website", body: "Die Website beschreibt, wie ein Angebot für Blechteile, Gehäuse und CNC-Teile aus Türkiye angefragt wird. Sie listet keine Preise und nimmt keine Zahlung an. Ein Formular zu senden ist eine Angebotsanfrage, kein Auftrag." },
      { title: "Angebote", body: "Eine vollständige Anfrage enthält eine Zeichnung oder eine Beschreibung des Teils, eine geschäftliche E-Mail, Werkstoff, Stückzahl, geschätzte Jahresmenge, Name und Firma. Dicke und Lieferdatum sind optional. Wir antworten innerhalb von 2 Werktagen auf eine vollständige Anfrage. Ist eine Zeichnung angehängt und nicht lesbar, beginnen die 2 Werktage, wenn die Zeichnung lesbar ist. Die Antwort enthält einen Preis, eine Fertigungszeit und einen Fertigungshinweis. Das Datum, bis zu dem das Angebot offen bleibt, steht auf dem Angebot." },
      { title: "Ihre Zeichnung", body: "Sie sind verantwortlich für die Zeichnung, den Werkstoff und die Maße, die Sie senden. Sagen Sie uns, wenn eine Datei ersetzt wurde. Wir nutzen die Dateien für das Angebot und, wenn Sie bestellen, für die Fertigung. Wir veröffentlichen sie nicht. Eine NDA gibt es auf Anfrage, bevor Sie Fertigungsdateien senden." },
      { title: "Fertigungshinweis", body: "Der Hinweis markiert, was wir sehen: eine Biegung, eine Schweißnaht, ein fehlendes Maß oder eine Beschichtung. Er ist keine vollständige Konstruktionsprüfung und verschiebt die Konstruktionsverantwortung nicht auf uns. Die Fertigung einer Ausnahme beginnt erst, nachdem Sie das Angebot einschließlich des Hinweises schriftlich annehmen." },
      { title: "Auftrag und Zahlung", body: "Ein Auftrag entsteht, wenn beide Seiten das Angebot schriftlich annehmen. Die Zahlung ist eine Anzahlung vor Fertigungsbeginn und der Restbetrag vor dem Versand. Beträge und Währung stehen im Angebot. Die Ware bleibt beim Verkäufer, bis die vereinbarten Zahlungen eingegangen sind. Diese Website nimmt keine Kartenzahlung an." },
      { title: "Lieferung", body: "Der Incoterm ist EXW, FCA oder DAP, wie auf dem Angebot gedruckt, einschließlich des benannten Orts. EXW: Sie holen ab. FCA: die Ware wird am benannten Ort an den benannten Frachtführer übergeben. DAP: wir liefern an den benannten Ort, und Sie erledigen Einfuhrabfertigung und Zoll. Das Risiko folgt diesem Incoterm." },
      { title: "Prüfung und Teile, die nicht passen", body: "Jede Sendung enthält ein Maßprotokoll und Fotos. Ein Werkstoffzeugnis wird gesendet, wenn der Auftrag danach fragt. Passen Teile nicht zur angenommenen Zeichnung oder zu den Ausnahmen im Fertigungshinweis, schreiben Sie uns mit Angebotsreferenz, Fotos und dem Unterschied. Wir prüfen das und vereinbaren Nachfertigung, Nacharbeit oder eine Gutschrift für die abweichenden Teile. Transportschaden wird nach dem Incoterm im Angebot behandelt." },
      { title: "Haftung", body: "Die Haftung des Verkäufers für einen Anspruch zu den Teilen ist auf den Preis der betroffenen Teile im Auftrag begrenzt, außer wo das Gesetz diese Grenze nicht zulässt. Nichts auf dieser Website ist eine Zusage, dass ein Teil für eine bestimmte Maschine geeignet ist, es sei denn, das angenommene Angebot sagt das." },
      { title: "Recht", body: "Der Firmenname des Verkäufers, das anwendbare Recht und die Gerichte stehen auf der Auftragsbestätigung." },
    ],
  };
  copy.tables = {
    material: {
      caption: "WERKSTOFFE, DIE WIR ANBIETEN",
      columns: ["Werkstoff", "Norm", "Form", "Hinweis für die Anfrage"],
      rows: [
        ["DC01", "EN 10130", "Kaltgewalztes Stahlblech", "Nennen Sie die Dicke in Millimetern."],
        ["S235JR", "EN 10025-2", "Baustahl", "Für Rahmen, Gestelle und dickeres Blech."],
        ["Verzinkt", "EN 10346", "Zinkbeschichtetes Stahlblech", "Nennen Sie die Auflage, wenn Sie eine bestimmte brauchen, zum Beispiel Z275."],
        ["304 / 1.4301", "EN 10088", "Edelstahlblech", "Beschreiben Sie die Umgebung in den Notizen."],
        ["316 / 1.4401", "EN 10088", "Edelstahlblech", "Wenn 304 nicht die richtige Korrosionswahl ist."],
        ["AW-5052", "EN 485", "Aluminiumblech", "Nennen Sie den Zustand, wenn Sie einen brauchen. Sonst bestätigen wir ihn im Angebot."],
      ],
    },
    tolerance: {
      caption: "TOLERANZGRUNDLAGE",
      columns: ["Verfahren", "Grundlage", "Wo es bestätigt wird"],
      rows: [
        ["Lasergeschnittenes Profil", "Nach Ihrer Zeichnung", "Fertigungshinweis im Angebot"],
        ["Biegewinkel und Schenkel", "Nach Ihrer Zeichnung", "Fertigungshinweis im Angebot"],
        ["Lochlage", "Nach Ihrer Zeichnung", "Maßprotokoll mit der Sendung"],
        ["Schweißbaugruppe", "Nach Ihrer Zeichnung", "Verzugsrisiken vor der Fertigung genannt"],
        ["Pulverbeschichtung", "Nach der vereinbarten Oberfläche", "Farbe und Oberfläche im Angebot"],
        ["CNC-Bearbeitung", "Nach Ihrer Zeichnung", "Fertigungshinweis, dann das Maßprotokoll"],
      ],
    },
    finish: {
      caption: "GEHÄUSEOBERFLÄCHEN",
      columns: ["Oberfläche", "Was anzugeben ist", "Bestätigt auf"],
      rows: [
        ["Walzblank / wie geschweißt", "Sagen Sie, wenn Flächen unbeschichtet bleiben müssen", "Angebot"],
        ["Pulverbeschichtung", "RAL-Farbe und Oberfläche, glatt oder strukturiert", "Angebot"],
        ["Abgeklebte Bereiche", "Gewinde, Erdungspunkte, Anlageflächen", "Angebot"],
        ["Verzinkter Grundwerkstoff", "Auflagenklasse, wenn Sie eine brauchen", "Angebot"],
      ],
    },
    cnc: {
      caption: "CNC-BEARBEITUNG",
      columns: ["Verfahren", "Was wir anbieten", "Senden Sie"],
      rows: [
        ["Fräsen", "Prismatische Teile, Taschen, Flächen und Bohrungen", "STEP und ein PDF"],
        ["Drehen", "Rundteile", "STEP und ein PDF"],
        ["Gewinde und Passungen", "Die Angabe auf der Zeichnung", "Die Zeichnung, keine mündliche Passung"],
        ["Mit Blech oder einem Gehäuse", "Dieselbe Anfrage, wenn die Notizen das sagen", "Den Zeichnungssatz"],
      ],
    },
    enquiry: {
      caption: "WAS DAS FORMULAR FRAGT",
      columns: ["Feld", "Einheit", "Warum wir fragen"],
      rows: [
        ["Werkstoff", "Sorte aus der Liste", "Damit das Angebot das richtige Blech oder den richtigen Stab bepreist"],
        ["Dicke", "Millimeter, optional", "Damit die Zuschnittdicke nicht aus einem PDF geraten wird, wenn Sie sie kennen"],
        ["Stückzahl", "Teile dieser Bestellung", "Damit das Los als Los bepreist wird"],
        ["Geschätzte Jahresmenge", "Teile über zwölf Monate, oder noch nicht bekannt", "Damit ein Wiederholpreis geprüft werden kann"],
        ["Lieferdatum", "Kalenderdatum oder flexibel", "Damit die Lieferzeit dagegen geprüft werden kann, wenn Sie ein Datum haben"],
      ],
    },
    sheetCapabilities: {
      caption: "MÖGLICHKEITEN",
      columns: ["Punkt", "Wert"],
      rows: [
        ["Dickenbereich", ""],
        ["Maximale Tafelgröße", ""],
        ["Oberflächen", ""],
      ],
    },
    enclosureCapabilities: {
      caption: "MÖGLICHKEITEN",
      columns: ["Punkt", "Wert"],
      rows: [
        ["Dickenbereich", ""],
        ["Maximale Tafelgröße", ""],
        ["Oberflächen", ""],
      ],
    },
  };
  copy.form = {
    title: "Angebot anfragen",
    window: "2 WERKTAGE",
    intro: "Wir antworten innerhalb von 2 Werktagen auf eine vollständige Anfrage. Die Antwort enthält Preis, Lieferzeit und einen Fertigungshinweis.",
    requiredNote: "Eine Zeichnung oder eine Beschreibung des Teils ist nötig. Weitere Pflichtfelder sind markiert.",
    honeypot: "Dieses Feld leer lassen",
    drawings: "Zeichnungen",
    drawingsHint: "DXF, DWG, STEP oder PDF. Bis zu 8 Dateien, je 20 MB. Pflicht, außer die Notizen beschreiben das Teil. Zuerst eine NDA? Hängen Sie ein einseitiges PDF an, das das sagt.",
    choose: "Dateien wählen",
    drop: "Oder Dateien hier ablegen.",
    remove: "Entfernen",
    notes: "Notizen",
    notesHint: "Pflicht, wenn Sie keine Zeichnung anhängen. Beschreiben Sie das Teil oder nennen Sie Pulver-RAL, Beschläge, Schweißhinweise oder eine NDA-Bitte.",
    email: "Geschäftliche E-Mail",
    material: "Werkstoff",
    materialHint: "Hat das Teil mehr als einen Werkstoff, wählen Sie den Hauptwerkstoff und schreiben Sie die anderen in die Notizen.",
    materialPlaceholder: "Werkstoff wählen",
    quantity: "Stückzahl (diese Bestellung)",
    quantityHint: "Teile in diesem Los.",
    annual: "Geschätzte Jahresmenge (Stück)",
    annualHint: "Teile, die Sie über zwölf Monate erwarten, einschließlich späterer Lose.",
    annualUnknown: "Weiß ich noch nicht",
    name: "Name",
    nameHint: "Die Person, der wir antworten sollen.",
    company: "Firma",
    country: "Land",
    countryPlaceholder: "Land wählen",
    countryFocus: "Schwerpunkt",
    countryOther: "Andere",
    thickness: "Dicke (mm)",
    thicknessHint: "Beispiel: 2.0. Leer lassen, wenn die Zeichnung sie nennt oder Sie sie noch nicht kennen.",
    delivery: "Lieferdatum",
    deliveryHint: "Das Datum, an dem Sie die Teile wollen. Die Lieferzeit wird im Angebot bestätigt.",
    flexible: "Flexibel",
    optional: "optional",
    submit: "Angebot anfragen",
    sending: "Wird gesendet…",
    privacyBefore: "Zeichnungen liegen in einem privaten Dateispeicher und werden für das Angebot genutzt.",
    noscript: "Dieses Formular lädt Zeichnungen aus dem Browser und braucht JavaScript.",
    noscriptEmail: "Wenn JavaScript fehlt, senden Sie die Zeichnung an",
    checking: "Die Anfrage wird geprüft.",
    uploading: "Wird hochgeladen",
    sendingStatus: "Die Anfrage wird gesendet.",
    added: "hinzugefügt",
    noneAdded: "Keine Datei hinzugefügt.",
    removed: "Datei entfernt.",
    inboxLater: "Das Angebots-Postfach ist noch nicht eingerichtet. Versuchen Sie es später erneut.",
    inboxEmail: "Das Angebots-Postfach ist noch nicht eingerichtet. Senden Sie die Zeichnung an",
    materials: {
      DC01: "DC01 kaltgewalztes Stahlblech",
      S235JR: "S235JR",
      galvanized: "Verzinktes Stahlblech",
      "304": "Edelstahl 304",
      "316": "Edelstahl 316",
      "aluminium-5052": "Aluminium 5052",
    },
    countries: countriesDe,
  };
}
