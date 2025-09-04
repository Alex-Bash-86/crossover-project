const questions = [
  {
    question:
      'Vervollständigen Sie den Satz: “Von allen Seiten betrachtet – oder auch: Wie man es ...?”',
    answers: [
      { text: 'dreht und wendet', correct: true },
      { text: 'hält an und fragt Passanten', correct: false },
      { text: 'biegt ab und verfährt sich', correct: false },
      { text: 'startet und gibt Gas', correct: false },
    ],
  },
  {
    question:
      'Beschäftigt der fünfmalige Tour-de-France-Sieger Hinault entsprechende Hausangestellte, dann arbeiten bei ... ?',
    answers: [
      { text: 'Re Pinnscher', correct: false },
      { text: 'Dallma Tiener', correct: false },
      { text: 'Bernard Diener', correct: true },
      { text: 'Focks Tärrier', correct: false },
    ],
  },
  {
    question:
      'Lässt man sich eine Beziehung mit einer Schönheitskönigin ein, hat man sozusagen …?',
    answers: [
      { text: 'ein Über-Maß', correct: false },
      { text: 'ein Miss-Verhältnis', correct: true },
      { text: 'eine Schief-Lage', correct: false },
      { text: 'ein Ungleich-Gewicht', correct: false },
    ],
  },
  {
    question: 'Gesundheitsbewusste Strandurlauber sind auch beim …?',
    answers: [
      { text: 'Sonnen besonnen', correct: true },
      { text: 'Sam achtsam', correct: false },
      { text: 'Sichtig umsichtig', correct: false },
      { text: 'Nünftig vernünftig', correct: false },
    ],
  },
  {
    question: 'Wer einen Kellner sucht, findet ihn buchstäblich im …?',
    answers: [
      { text: 'Oktober', correct: false },
      { text: 'September', correct: false },
      { text: 'Dezember', correct: true },
      { text: 'November', correct: false },
    ],
  },
  {
    question: 'Was ist die Hauptstadt von Portugal?',
    answers: [
      { text: 'Valencia', correct: false },
      { text: 'Lissabon', correct: true },
      { text: 'Madrid', correct: false },
      { text: 'Barcelona', correct: false },
    ],
  },
  {
    question: 'Wie heißt das größte Technologieunternehmen in Südkorea?',
    answers: [
      { text: 'Samsung Electronics', correct: true },
      { text: 'Hyundai Motor Company', correct: false },
      { text: 'LG Electronics', correct: false },
      { text: 'Huawei', correct: false },
    ],
  },
  {
    question: 'Wie lange dauerte der 30-jährige Krieg?',
    answers: [
      { text: '15 Jahre', correct: false },
      { text: '45 Jahre', correct: false },
      { text: '30 Jahre', correct: true },
      { text: '25 Jahre', correct: false },
    ],
  },
  {
    question: 'Welcher ist der „rote Planet“ unseres Sonnensystems?',
    answers: [
      { text: 'Jupiter', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Merkur', correct: false },
    ],
  },
  {
    question: 'Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?',
    answers: [
      { text: 'Merkur', correct: true },
      { text: 'Uranus', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Pluto', correct: false },
    ],
  },
  {
    question: 'Welches Land ist flächenmäßig das zweitgrößte der Erde?',
    answers: [
      { text: 'USA', correct: false },
      { text: 'Kanada', correct: true },
      { text: 'Russland', correct: false },
      { text: 'China', correct: false },
    ],
  },
  {
    question: 'Wie viele Planeten hat unser Sonnensystem?',
    answers: [
      { text: '9', correct: false },
      { text: '8', correct: true },
      { text: '10', correct: false },
      { text: '7', correct: false },
    ],
  },
  {
    question: 'Wie heißt Pippi Langstrumpfs Affe?',
    answers: [
      { text: 'Herr Peterson', correct: false },
      { text: 'Herr Nielson', correct: true },
      { text: 'Herr Mayer', correct: false },
      { text: 'Herr Schuler', correct: false },
    ],
  },
  {
    question: 'Wie viele Sekunden hat ein Tag?',
    answers: [
      { text: '86400', correct: true },
      { text: '32400', correct: false },
      { text: '24', correct: false },
      { text: '6400', correct: false },
    ],
  },
  {
    question: 'Wie nennt man einen jungen Hund?',
    answers: [
      { text: 'Kitz', correct: false },
      { text: 'Welpe', correct: true },
      { text: 'Fohlen', correct: false },
      { text: 'Ferkel', correct: false },
    ],
  },
  {
    question: 'Wer wählt den Bundespräsidenten?',
    answers: [
      { text: 'Bundesrat', correct: false },
      { text: 'Bundesversammlung', correct: true },
      { text: 'Bundestag', correct: false },
      { text: 'Bundeskanzler', correct: false },
    ],
  },
  {
    question: 'Wofür steht die Abkürzung KGaA?',
    answers: [
      { text: 'Kommanditgesellschaft auf Aktien', correct: true },
      { text: 'Kreditgesellschaft auf Aktien', correct: false },
      { text: 'Kompetenzgesellschaft auf Aktien', correct: false },
      { text: 'Kardinalgesellschaft auf Aktien', correct: false },
    ],
  },
  {
    question: 'Wer ist der derzeitige Bundestagspräsident? (2021)',
    answers: [
      { text: 'Petra Pau', correct: false },
      { text: 'Wolfgang Schäuble', correct: true },
      { text: 'Thomas Oppermann', correct: false },
      { text: 'Wolfgang Kubicki', correct: false },
    ],
  },
  {
    question: 'Welcher Partei gehörte der 16. US-Präsident Abraham Lincoln an?',
    answers: [
      { text: 'Grüne Partei', correct: false },
      { text: 'Republikanische Partei', correct: true },
      { text: 'Demokratische Partei', correct: false },
      { text: 'Parteilos', correct: false },
    ],
  },
  {
    question:
      'Gegen welchen US-Präsident wurden erstmals mehr als ein Impeachment-Verfahren gestartet?',
    answers: [
      { text: 'George H. W. Bush', correct: false },
      { text: 'Donald Trump', correct: true },
      { text: 'Richard Nixon', correct: false },
      { text: 'Dwight D. Eisenhower', correct: false },
    ],
  },
  {
    question: 'Was ist das beste Fach der Welt?',
    answers: [
      { text: 'Mathematik', correct: false },
      { text: 'Englisch', correct: false },
      { text: 'Soziologie', correct: false },
      { text: 'Informatik', correct: true },
    ],
  },
  {
    question: 'Was ist H2O?',
    answers: [
      { text: 'Sauerstoff', correct: false },
      { text: 'Helium', correct: false },
      { text: 'Wasser', correct: true },
      { text: 'Wasserstoff', correct: false },
    ],
  },
  {
    question: 'In welchem Land wohnen die meisten Menschen?',
    answers: [
      { text: 'USA', correct: false },
      { text: 'China', correct: true },
      { text: 'Russland', correct: false },
      { text: 'Kenia', correct: false },
    ],
  },
  {
    question: 'Auf welchem Kontinent liegt die Wüste Sahara?',
    answers: [
      { text: 'Amerika', correct: false },
      { text: 'Afrika', correct: true },
      { text: 'Asien', correct: false },
      { text: 'Europa', correct: false },
    ],
  },
  {
    question: 'Wie heißt der höchste Berg der Welt?',
    answers: [
      { text: 'Annapurna', correct: false },
      { text: 'Zugspitze', correct: false },
      { text: 'Mount Everest', correct: true },
      { text: 'Alpen', correct: false },
    ],
  },
  {
    question:
      'Wenn du die Buchstaben im Wort "Tatalink" anders anordnest, erhältst du den Namen...',
    answers: [
      { text: '... eines Ozeans', correct: true },
      { text: '... eines Baumes', correct: false },
      { text: '... einer Stadt', correct: false },
      { text: '... eines Landes', correct: false },
    ],
  },

  // medium
  {
    question: 'Die Freiheitsstatue in New York war ein Geschenk von:',
    answers: [
      { text: 'Großbritannien', correct: false },
      { text: 'Kanada', correct: false },
      { text: 'USA', correct: false },
      { text: 'Frankreich', correct: true },
    ],
  },
  {
    question: 'Wann ging der Erste Weltkrieg zu Ende?',
    answers: [
      { text: '1918', correct: true },
      { text: '1914', correct: false },
      { text: '1944', correct: false },
      { text: '1948', correct: false },
    ],
  },
  {
    question:
      'In welcher Sendung kamen unter anderem Jeanette Biedermann, Mark Forster und Lena Meyer-Landrut ins Tauschgeschäft?',
    answers: [
      { text: 'Bewohn mein Haus', correct: false },
      { text: 'Sing meinen Song', correct: true },
      { text: 'Koch mein Leibgericht', correct: false },
      { text: 'Verführ meine Frau', correct: false },
    ],
  },
  {
    question:
      'Was mancher selbst im nüchternen Zustand nicht hinbekommt: Korrekt schreibt sich der beliebte Cocktail …?',
    answers: [
      { text: 'Cajpirinha', correct: false },
      { text: 'Caipirinja', correct: false },
      { text: 'Caipirinha', correct: true },
      { text: 'Caijpiriña', correct: false },
    ],
  },
  {
    question:
      'Wobei wird vor einem sogenannten Rebound-Effekt gewarnt, der nicht selten zu einer Abhängigkeit führt?',
    answers: [
      { text: 'Deospray', correct: false },
      { text: 'Nasenspray', correct: true },
      { text: 'Haarspray', correct: false },
      { text: 'Pfefferspray', correct: false },
    ],
  },
  {
    question:
      'Die Darstellung welcher Figur wurde schon zweimal mit einem Schauspiel-Oscar prämiert?',
    answers: [
      { text: 'Joker', correct: true },
      { text: 'Forrest Gump', correct: false },
      { text: 'Truman Capote', correct: false },
      { text: 'Dr. Hannibal Lecter', correct: false },
    ],
  },
  {
    question:
      'Alfred Gíslason ist seit Februar 2020 bereits der zweite Isländer im Amt des deutschen Männer-Nationaltrainers im …?',
    answers: [
      { text: 'Handball', correct: true },
      { text: 'Basketball', correct: false },
      { text: 'Volleyball', correct: false },
      { text: 'Tennis', correct: false },
    ],
  },
  {
    question: 'Wie stark ist die Erdachse zur Umlaufbahn (Ekliptik) geneigt?',
    answers: [
      { text: '21.5°', correct: false },
      { text: '19.25°', correct: false },
      { text: '23.5°', correct: true },
      { text: '25°', correct: false },
    ],
  },
  {
    question: 'Wie viele Herzen besitzt ein Oktopus?',
    answers: [
      { text: 'drei', correct: true },
      { text: 'zwei', correct: false },
      { text: 'vier', correct: false },
      { text: 'fünf', correct: false },
    ],
  },
  {
    question:
      '1930 erhielten Albert Einstein und ein Kollege das US-Patent 1781541. Wofür war es?',
    answers: [
      { text: 'Kühlschrank', correct: true },
      { text: 'Mikrowelle', correct: false },
      { text: 'Brotbackautomat', correct: false },
      { text: 'Tauchsieder', correct: false },
    ],
  },
  {
    question:
      'Wie viele Weihnachtsbäume werden in Deutschland pro Jahr verkauft?',
    answers: [
      { text: 'Etwa 20 Millionen', correct: false },
      { text: 'Etwa 30 Millionen', correct: true },
      { text: 'Etwa 45 Millionen', correct: false },
      { text: 'Etwa 55 Millionen', correct: false },
    ],
  },
  {
    question: 'Wie viele Einkerbungen hat ein Golfball?',
    answers: [
      { text: '128', correct: false },
      { text: '336', correct: true },
      { text: '512', correct: false },
      { text: '256', correct: false },
    ],
  },
  {
    question: 'Wer war während des 2. Weltkriegs US-Präsident?',
    answers: [
      { text: 'Harry S. Truman', correct: false },
      { text: 'Roosevelt', correct: true },
      { text: 'Bill Clinton', correct: false },
      { text: 'John F. Kennedy', correct: false },
    ],
  },
  {
    question: 'Aus wie vielen Kräutern ist Jägermeister gemacht?',
    answers: [
      { text: '36', correct: false },
      { text: '46', correct: false },
      { text: '56', correct: true },
      { text: '54', correct: false },
    ],
  },
  {
    question: 'Wie viele Bandscheiben hat ein Mensch?',
    answers: [
      { text: '27', correct: false },
      { text: '23', correct: true },
      { text: '28', correct: false },
      { text: '22', correct: false },
    ],
  },
  {
    question: 'Woraus besteht ein Diamant?',
    answers: [
      { text: 'Kohlenstoff', correct: true },
      { text: 'Helium', correct: false },
      { text: 'Wasserstoff', correct: false },
      { text: 'Francium', correct: false },
    ],
  },
  {
    question: 'Wie viele Stachel hat ein Igel ungefähr?',
    answers: [
      { text: '1.000', correct: false },
      { text: '5.000', correct: true },
      { text: '500', correct: false },
      { text: '2.500', correct: false },
    ],
  },
  {
    question:
      'Wo fand 1816 die erste Sitzung des ersten Deutschen Bundestages statt?',
    answers: [
      { text: 'Frankfurt am Main', correct: true },
      { text: 'Berlin', correct: false },
      { text: 'Bonn', correct: false },
      { text: 'München', correct: false },
    ],
  },
  {
    question: 'J.R.R. Tolkien schrieb…',
    answers: [
      { text: '… Der Herr der Ringe', correct: true },
      { text: '… Die unendliche Geschichte', correct: false },
      { text: '… Alice im Wunderland', correct: false },
      { text: '… Hänsel und Gretel', correct: false },
    ],
  },
  {
    question: 'Wie heißt die Hauptstadt Lettlands?',
    answers: [
      { text: 'Riga', correct: true },
      { text: 'Rabat', correct: false },
      { text: 'Reykjavik', correct: false },
      { text: 'Riat', correct: false },
    ],
  },
  {
    question: 'Welches Land gehört nicht zu Afrika?',
    answers: [
      { text: 'Niger', correct: false },
      { text: 'Algerien', correct: false },
      { text: 'Paraguay', correct: true },
      { text: 'Kamerun', correct: false },
    ],
  },
  {
    question:
      'Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?',
    answers: [
      { text: 'Thermosphäre', correct: false },
      { text: 'Mesosphäre', correct: false },
      { text: 'Troposphäre', correct: true },
      { text: 'Stratosphäre', correct: false },
    ],
  },
  {
    question:
      'Wie viel Liter Luft kann die Lunge eines Blauwals maximal mit einmal einatmen fassen?',
    answers: [
      { text: '1.200 Liter', correct: false },
      { text: '3.000 Liter', correct: true },
      { text: '2.500 Liter', correct: false },
      { text: '3.900 Liter', correct: false },
    ],
  },
  {
    question: 'Womit sind viele Schneidebretter ausgestattet?',
    answers: [
      { text: 'Saftrille', correct: true },
      { text: 'Bierfurche', correct: false },
      { text: 'Weinkerbe', correct: false },
      { text: 'Wassergrube', correct: false },
    ],
  },
  {
    question:
      'Welchem Motto hat sich der als „Upcycling“ populär gewordene Trend verschrieben?',
    answers: [
      { text: 'ohne Moos nix los', correct: false },
      { text: 'klein, aber oho', correct: false },
      { text: 'aus Alt mach Neu', correct: true },
      { text: 'wer rastet, der rostet', correct: false },
    ],
  },
  {
    question:
      'Welches deutsche KFZ-Kennzeichenkürzel steht nicht für die einwohnerreichste deutsche Stadt, deren Name mit diesem Buchstaben beginnt?',
    answers: [
      { text: 'D', correct: true },
      { text: 'K', correct: false },
      { text: 'S', correct: false },
      { text: 'H', correct: false },
    ],
  },
  {
    question:
      'In welchem Staat ist Queen Elisabeth II. nicht das Staatsoberhaupt?',
    answers: [
      { text: 'Australien', correct: false },
      { text: 'Kanada', correct: false },
      { text: 'Jamaika', correct: false },
      { text: 'Costa Rica', correct: true },
    ],
  },
  {
    question: 'Wie lauten die ersten 7 Nachkommstellen von π?',
    answers: [
      { text: '3,1515821', correct: false },
      { text: '3,1415926', correct: true },
      { text: '2,7182818', correct: false },
      { text: '3,0425925', correct: false },
    ],
  },
  {
    question: 'Wann wurde das Hermann-Emanuel-Berufskolleg gegründet?',
    answers: [
      { text: '1904', correct: true },
      { text: '1917', correct: false },
      { text: '1909', correct: false },
      { text: '1899', correct: false },
    ],
  },
  {
    question: 'Wann endete das Zeitalter der Antike?',
    answers: [
      { text: '550 n. Christi', correct: false },
      { text: '700 n. Christi', correct: false },
      { text: '600 n. Christi', correct: true },
      { text: '400 n. Christi', correct: false },
    ],
  },
  {
    question: 'Welches Instrument hat Tasten, Pedale und Saiten?',
    answers: [
      { text: 'Klavier', correct: true },
      { text: 'Harfe', correct: false },
      { text: 'Gitarre', correct: false },
      { text: 'Violine', correct: false },
    ],
  },

  // hard
  {
    question: 'Wo befinden sich einige der höchsten Alpengipfel?',
    answers: [
      { text: 'Monte-Magenta-Kette', correct: false },
      { text: 'Monte-Rosa-Massiv', correct: true },
      { text: 'Monte-Purpur-Höhenzug', correct: false },
      { text: 'Monte-Lila-Gebirge', correct: false },
    ],
  },
  {
    question:
      'Was ist die durchschnittliche Oberflächentemperatur auf der Venus?',
    answers: [
      { text: '395 °C', correct: false },
      { text: '460 °C', correct: true },
      { text: '615 °C', correct: false },
      { text: '215 °C', correct: false },
    ],
  },
  {
    question:
      'Wie viel Prozent der Masse des Sonnensystems befindet sich in der Sonne auf 1 Prozent genau?',
    answers: [
      { text: '89 %', correct: false },
      { text: '85 %', correct: false },
      { text: '99 %', correct: true },
      { text: '96 %', correct: false },
    ],
  },
  {
    question:
      'Wo wurde der Schriftsteller geboren, der für den Roman „Herkunft“ 2019 mit dem Deutschen Buchpreis ausgezeichnet wurde?',
    answers: [
      { text: 'Ceylon', correct: false },
      { text: 'Jugoslawien', correct: true },
      { text: 'Rhodesien', correct: false },
      { text: 'Tibet', correct: false },
    ],
  },
  {
    question: 'Was war hierzulande bis in die 1950er noch gang und gäbe?',
    answers: [
      { text: 'Sekretärinnenbeichte', correct: false },
      { text: 'Beamtinnenkommunion', correct: false },
      { text: 'Lehrerinnenzölibat', correct: true },
      { text: 'Krankenschwesterkollekte', correct: false },
    ],
  },
  {
    question:
      'Das naturgegebene Schicksal welcher Pflanzen sieht vor, dass die Blüte bei den meisten Arten unweigerlich zu ihrem Tod führt?',
    answers: [
      { text: 'Eukalyptus', correct: false },
      { text: 'Bambus', correct: true },
      { text: 'Rhododendron', correct: false },
      { text: 'Gingko', correct: false },
    ],
  },
  {
    question:
      'Welches ist das einzige deutsche Bundesland, in dem keine kreisfreie Stadt existiert?',
    answers: [
      { text: 'Sachsen', correct: false },
      { text: 'Saarland', correct: true },
      { text: 'Bremen', correct: false },
      { text: 'Brandenburg', correct: false },
    ],
  },
  {
    question: 'Wer bekämpfte sich im „Falklandkrieg“?',
    answers: [
      { text: 'Kanada und Irland', correct: false },
      { text: 'Deutschland und Frankreich', correct: false },
      { text: 'Argentinien und Großbritannien', correct: true },
      { text: 'Süd- und Nordkorea', correct: false },
    ],
  },
  {
    question: 'Welcher Schweizer bekam 1901 den ersten Friedensnobelpreis?',
    answers: [
      { text: 'Ernst Abbe', correct: false },
      { text: 'Henry Dunant', correct: true },
      { text: 'Max Aub', correct: false },
      { text: 'Antonio Abetti', correct: false },
    ],
  },
  {
    question: 'Welche Farbe hat ein Regenbogen ganz außen (oben)?',
    answers: [
      { text: 'blau', correct: false },
      { text: 'gelb', correct: false },
      { text: 'rot', correct: true },
      { text: 'grün', correct: false },
    ],
  },
  {
    question: 'Wie lautet die Hauptstadt des US-Bundesstaates Alaska?',
    answers: [
      { text: 'Frankfort', correct: false },
      { text: 'Juneau', correct: true },
      { text: 'Denver', correct: false },
      { text: 'Atlanta', correct: false },
    ],
  },
  {
    question: 'Welche Ordnungszahl hat Kupfer im Periodensystem der Elemente?',
    answers: [
      { text: '31', correct: false },
      { text: '29', correct: true },
      { text: '30', correct: false },
      { text: '28', correct: false },
    ],
  },
  {
    question: 'Wer war der zweite Bundeskanzler Deutschlands (BRD)?',
    answers: [
      { text: 'Helmut Schmidt', correct: false },
      { text: 'Gerhard Schröder', correct: false },
      { text: 'Konrad Adenauer', correct: false },
      { text: 'Ludwig Erhard', correct: true },
    ],
  },
  {
    question: 'Welcher Schauspieler verkörperte im Jahr 1965 James Bond?',
    answers: [
      { text: 'Pierce Brosnan', correct: false },
      { text: 'Timothy Dalton', correct: false },
      { text: 'Sean Connery', correct: true },
      { text: 'Roger Moore', correct: false },
    ],
  },
  {
    question:
      'Wie viele Jahre dauert es in etwa bis der Jupiter die Sonne umrundet hat?',
    answers: [
      { text: '20 Jahre', correct: false },
      { text: '12 Jahre', correct: true },
      { text: '16 Jahre', correct: false },
      { text: '24 Jahre', correct: false },
    ],
  },
  {
    question: 'Wie lauten die ersten 4 Nachkommastellen der Eulerschen Zahl e?',
    answers: [
      { text: '2,5171', correct: false },
      { text: '2,7182', correct: true },
      { text: '2,8621', correct: false },
      { text: '3,1415', correct: false },
    ],
  },
  {
    question:
      'Wer hat einen Hammer und eine Feder auf den Mond fallen lassen, um zu demonstrieren, dass sie ohne Luft gleich schnell fallen?',
    answers: [
      { text: 'Neil Armstrong', correct: false },
      { text: 'David R. Scott', correct: true },
      { text: 'Buzz Lightyear', correct: false },
      { text: 'Jack Matthew', correct: false },
    ],
  },
  {
    question: 'Wie weit ist Alpha Centauri ungefähr von der Sonne entfernt?',
    answers: [
      { text: '3,105 Lichtjahre', correct: false },
      { text: '10,203 Lichtjahre', correct: false },
      { text: '4,367 Lichtjahre', correct: true },
      { text: '7,295 Lichtjahre', correct: false },
    ],
  },
  {
    question:
      'Die klassisch genormte Europalette EPAL1 besteht aus 78 Nägeln, neun Klötzen und insgesamt wie vielen Brettern?',
    answers: [
      { text: 'zwölf', correct: false },
      { text: 'zehn', correct: false },
      { text: 'elf', correct: true },
      { text: 'neun', correct: false },
    ],
  },
];
