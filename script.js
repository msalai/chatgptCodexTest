const letterValues = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8
};

const vowelSet = new Set(["A", "E", "I", "O", "U", "Y"]);
const masterNumbers = new Set([11, 22, 33]);

const numberDescriptions = {
  1: "Broj 1 simbolizira pionirsku energiju, samopouzdanje i spremnost da se započne novo poglavlje. Potiče preuzimanje inicijative i poticanje drugih primjerom.",
  2: "Broj 2 naglašava suradnju, diplomatski pristup i njegu odnosa. Podsjeća na moć strpljivog slušanja i stvaranja mostova između ljudi.",
  3: "Broj 3 odiše kreativnošću, izražajnošću i razigranom komunikacijom. Potaknut će te da dijeliš radost, priče i umjetnički talent.",
  4: "Broj 4 donosi stabilnost, red i praktično razmišljanje. Uči te kako kroz disciplinu i planiranje gradiš trajne strukture.",
  5: "Broj 5 povezan je s promjenom, avanturom i neovisnošću. Podsjeća da se rast događa kada hrabro izlaziš iz zone komfora.",
  6: "Broj 6 simbolizira brigu, odgovornost i želju za skladnim domom. Poziva te da njeguješ odnose i stvaraš osjećaj sigurnosti.",
  7: "Broj 7 povezuje te s introspekcijom, učenjem i duhovnim istraživanjem. Potiče te da se osloniš na intuiciju i pronađeš vlastite odgovore.",
  8: "Broj 8 govori o ambiciji, materijalizaciji i strateškom vođenju. Uči te kako mudro upravljati resursima i ostaviti utjecajan trag.",
  9: "Broj 9 donosi humanost, suosjećanje i univerzalnu perspektivu. Podsjeća da je svrha dijeliti mudrost i širiti dobrotu.",
  11: "Broj 11 smatra se glasnikom intuicije i inspiracije. Donosi duboku osjetljivost na simboliku i potrebu da nadahneš druge svojim uvidima.",
  22: "Broj 22 poznat je kao glavni graditelj sna. Spaja viziju i praktičnost kako bi velike ideje pretvorio u opipljive rezultate.",
  33: "Broj 33 naziva se majstorskim učiteljem suosjećanja. Njegova vibracija potiče nesebičnu podršku, iscjeljenje i vodstvo srcem."
};

const aspectMeta = {
  lifePath: {
    title: "Životni put",
    icon: "🛤️",
    intro:
      "Broj životnog puta opisuje glavnu nit tvog iskustva i lekcije koje te vode prema osobnom sazrijevanju."
  },
  expression: {
    title: "Broj izražaja",
    icon: "🎯",
    intro:
      "Broj izražaja otkriva urođene talente, stil djelovanja i načine na koje ostavljaš trag u svijetu."
  },
  soulUrge: {
    title: "Broj duše",
    icon: "💗",
    intro:
      "Broj duše govori o onome što tvoje srce najdublje želi te koja te unutarnja motivacija pokreće."
  },
  personality: {
    title: "Broj osobnosti",
    icon: "✨",
    intro:
      "Broj osobnosti opisuje prvi dojam koji ostavljaš i način na koji te okolina doživljava."
  }
};

const aspectInterpretations = {
  lifePath: {
    1: {
      headline:
        "Put života 1 naglašava pionirski duh i potrebu da samostalno trasiraš vlastitu stazu.",
      strengths: [
        "Brzo prepoznaješ prilike i spremno ih pretvaraš u konkretne korake.",
        "Samopouzdano preuzimaš vodstvo kada treba donijeti odluku.",
        "Tvoj entuzijazam motivira druge da prate tvoj primjer."
      ],
      challenges: [
        "Možeš postati nestrpljiv prema onima koji razmišljaju sporije.",
        "Tvrdoglavost te ponekad sprječava da prihvatiš tuđe prijedloge.",
        "Osjećaj da moraš sve napraviti sam vodi u iscrpljenost."
      ],
      guidance:
        "Suradnja ne umanjuje tvoju snagu – nauči delegirati i dijeliti zasluge."
    },
    2: {
      headline:
        "Put života 2 usmjerava te prema partnerstvu, suosjećanju i stvaranju sklada.",
      strengths: [
        "Pronicljivo osjećaš tuđe potrebe i brzo uspostavljaš povjerenje.",
        "Odličan si posrednik u situacijama u kojima treba smiriti tenzije.",
        "Radiš strpljivo i ustrajno, cijeneći svaki mali napredak."
      ],
      challenges: [
        "Preosjetljivost te može navesti da potiskuješ vlastite želje.",
        "Strah od sukoba dovodi do odgađanja važnih odluka.",
        "Ponekad preuzimaš previše tuđih briga."
      ],
      guidance:
        "Njeguj jasne granice – diplomatska riječ ima veću težinu kad dolazi iz stabilnog ja."
    },
    3: {
      headline:
        "Put života 3 naglašava izražavanje, radost i kreativno dijeljenje ideja.",
      strengths: [
        "Lako pronalaziš riječi kojima ohrabruješ druge.",
        "Inspiriraš okruženje humorom i optimizmom.",
        "Talentiran si za umjetnost, pisanje ili javni nastup."
      ],
      challenges: [
        "Raspršen fokus otežava dovršavanje projekata.",
        "Osjetljiv si na kritiku pa se povremeno povlačiš.",
        "Sklon si pretjerivanju kada želiš zablistati."
      ],
      guidance:
        "Struktura i plan pomoći će tvojoj kreativnosti da ostavi trajniji trag."
    },
    4: {
      headline:
        "Put života 4 gradi na disciplini, odgovornosti i postupnom napretku.",
      strengths: [
        "Pouzdan si i ljudi znaju da se na tebe mogu osloniti.",
        "Voliš razvijati sustave i procedure koje donose stabilnost.",
        "Ustrajan si i sposoban izdržati dugoročne procese."
      ],
      challenges: [
        "Previše fokusiranja na detalje može zakočiti fleksibilnost.",
        "Strah od promjene stvara osjećaj ukočenosti.",
        "Ponekad zaboravljaš proslaviti male uspjehe."
      ],
      guidance:
        "Dopusti si povremene improvizacije – one osvježavaju tvoju marljivu prirodu."
    },
    5: {
      headline:
        "Put života 5 traži kretanje, slobodu i istraživanje različitih iskustava.",
      strengths: [
        "Rado prihvaćaš promjene i brzo se prilagođavaš.",
        "Tvoja znatiželja vodi te prema neočekivanim prilikama.",
        "Posjeduješ dar da oslobađaš druge od rutine."
      ],
      challenges: [
        "Nestrpljivost može dovesti do nedovršenih projekata.",
        "Traženje uzbuđenja zna odvesti u impulzivne odluke.",
        "Teško ti je držati se jednog smjera kada se pojavi nešto novo."
      ],
      guidance:
        "Definiraj osobne vrijednosti koje će ti biti kompas dok istražuješ."
    },
    6: {
      headline:
        "Put života 6 usmjeren je na brigu, služenje i izgradnju toplih odnosa.",
      strengths: [
        "Stvaraš ugodnu atmosferu i potičeš osjećaj pripadnosti.",
        "S lakoćom preuzimaš odgovornost kada treba pomoći.",
        "Posjeduješ snažan osjećaj za estetiku i sklad."
      ],
      challenges: [
        "Možeš se previše žrtvovati za druge i zaboraviti sebe.",
        "Perfekcionizam stvara nepotreban pritisak.",
        "Ponekad očekuješ da se svi ponašaju prema tvojim standardima."
      ],
      guidance:
        "Briga o drugima je snažnija kada njeguješ vlastite potrebe jednako predano."
    },
    7: {
      headline:
        "Put života 7 vodi prema introspekciji, znanju i duhovnom razumijevanju.",
      strengths: [
        "Duboko analiziraš situacije i vidiš skrivene obrasce.",
        "Istražuješ teme koje drugi zanemaruju.",
        "Intuitivno osjećaš što je autentično i istinito."
      ],
      challenges: [
        "Povlačenje u sebe može stvoriti osjećaj usamljenosti.",
        "Sklon si sumnji i pretjeranom preispitivanju.",
        "Teško dijeliš osobne misli s okolinom."
      ],
      guidance:
        "Dopusti drugima da te upoznaju – dijeljenje uvida može biti tvoje najveće služenje."
    },
    8: {
      headline:
        "Put života 8 govori o ambiciji, učinkovitosti i stvaranju utjecaja.",
      strengths: [
        "Imaš dar za strateško planiranje i upravljanje resursima.",
        "Odlučno koračaš prema financijskoj i profesionalnoj sigurnosti.",
        "Autoritet ti prirodno dolazi i drugi te slijede."
      ],
      challenges: [
        "Težiš kontroli pa teško delegiraš.",
        "Pretjerana usmjerenost na rezultate može zanemariti emocije.",
        "Rizik je da uspjeh mjeriš isključivo materijalnim pokazateljima."
      ],
      guidance:
        "Uskladi ambiciju s integritetom – istinski utjecaj gradi se kroz poštovanje."
    },
    9: {
      headline:
        "Put života 9 naglašava humanost, empatiju i širinu pogleda.",
      strengths: [
        "Brineš za dobrobit zajednice i inspiriraš nesebičnošću.",
        "Lako uočavaš širu sliku i povezuješ različite ideje.",
        "Prirodno pružaš podršku onima kojima je najpotrebnija."
      ],
      challenges: [
        "Teško puštaš prošlost i stare emotivne rane.",
        "Osjećaš krivnju ako ne pomažeš svakome.",
        "Ponekad zanemariš vlastite granice u želji da svima udovoljiš."
      ],
      guidance:
        "Prihvati da je dovoljno pomoći onoliko koliko možeš – održivost čini tvoju misiju jačom."
    },
    11: {
      headline:
        "Put života 11 donosi intenzivnu intuiciju, vizionarstvo i želju da probudiš svijest.",
      strengths: [
        "Brzo spajaš intuitivne uvide s praktičnim koracima.",
        "Inspiriraš druge karizmom i snažnim idealizmom.",
        "Osjetljiv si na energiju okoline i znaš je pročistiti."
      ],
      challenges: [
        "Visoka očekivanja mogu stvoriti unutarnju napetost.",
        "Preuzimanje tuđih emocija zna iscrpiti tvoju energiju.",
        "Ponekad sumnjaš u svoje darove zbog straha od neuspjeha."
      ],
      guidance:
        "Njeguj rutine koje uzemljuju tvoju intuiciju i dijeli svoje vizije postupno."
    },
    22: {
      headline:
        "Put života 22 spaja velike snove s izuzetnom sposobnošću realizacije.",
      strengths: [
        "Vidiš dugoročnu sliku i znaš je pretočiti u izvedive korake.",
        "Prirodno organiziraš ljude oko zajedničke misije.",
        "Stvaraš projekte koji ostavljaju trajnu vrijednost."
      ],
      challenges: [
        "Osjećaš težinu odgovornosti i strah da nećeš ispuniti potencijal.",
        "Ponekad se izgubiš u detaljima velikih planova.",
        "Teško je pronaći ravnotežu između rada i osobnog života."
      ],
      guidance:
        "Postavljaj realne rokove i okruži se timom – tvoja vizija zaslužuje podršku."
    },
    33: {
      headline:
        "Put života 33 nosi energiju učitelja suosjećanja i iscjeliteljskog vodstva.",
      strengths: [
        "Duboko razumiješ emocionalne potrebe drugih.",
        "Tvoja prisutnost donosi utjehu i inspiraciju.",
        "Spreman si dijeliti znanje bez zadrške."
      ],
      challenges: [
        "Možeš preuzeti previše tuđih tereta.",
        "Perfekcionizam u služenju vodi u iscrpljenost.",
        "Zaboravljaš tražiti podršku kada je tebi potrebna."
      ],
      guidance:
        "Uči se puniti vlastitu čašu – kad si ti dobro, tvoja se sposobnost iscjeljivanja pojačava."
    }
  },
  expression: {
    1: {
      headline:
        "Broj izražaja 1 otkriva da se najviše ističeš kada predvodiš i pokrećeš inicijative.",
      strengths: [
        "Improviziraš rješenja i hrabro preuzimaš odgovornost.",
        "Prirodno te privlače uloge pionira, inovatora ili poduzetnika.",
        "Tvoj govor tijela i način komunikacije odišu sigurnošću."
      ],
      challenges: [
        "Nerado prihvaćaš tuđe ideje kad nisi ti na čelu.",
        "Možeš zvučati autoritativno čak i kada to ne želiš.",
        "Teško ti je usporiti tempo radi timskog dogovora."
      ],
      guidance:
        "Vježbaj aktivno slušanje – jasna vizija lakše se ostvari uz podršku drugih."
    },
    2: {
      headline:
        "Broj izražaja 2 naglašava dar za suradnju, podršku i diplomatsko djelovanje.",
      strengths: [
        "Sjajno radiš u paru ili manjim timovima.",
        "Instinktivno harmoniziraš komunikaciju i osiguravaš da svi budu saslušani.",
        "Posjeduješ elegantan osjećaj za estetiku i detalje."
      ],
      challenges: [
        "Često previđaš vlastite potrebe kako bi održao mir.",
        "Neodlučnost se javlja kada treba preuzeti glavnu riječ.",
        "Prikrivaš nezadovoljstvo umjesto da ga jasno izraziš."
      ],
      guidance:
        "Jasno izrečen stav jača tvoju sposobnost posredovanja."
    },
    3: {
      headline:
        "Broj izražaja 3 donosi talenat za riječi, umjetnost i inspirativnu prezentaciju.",
      strengths: [
        "Prirodno zabavljaš i angažiraš publiku.",
        "Originalno kombiniraš ideje i znaš ih pretvoriti u priču.",
        "Tvoj izraz lica i glas prenose emocije vrlo uvjerljivo."
      ],
      challenges: [
        "Održiš pozornost drugih, ali ti je teško ostati fokusiran na jedan projekt.",
        "Preosjetljiv si na tuđe reakcije.",
        "Ponekad izbjegavaš ozbiljne teme kako bi ostao 'vedra osoba'."
      ],
      guidance:
        "Postavi jasne ciljeve za svoje projekte – publika želi vidjeti tvoj završni produkt."
    },
    4: {
      headline:
        "Broj izražaja 4 otkriva da se najbolje ostvaruješ kroz strukturu, pouzdanost i konkretne rezultate.",
      strengths: [
        "Izvrsno organiziraš procese i optimiziraš resurse.",
        "Tvoja komunikacija je jasna, precizna i utemeljena.",
        "Drugi se oslanjaju na tvoju dosljednost i profesionalizam."
      ],
      challenges: [
        "Teško prihvaćaš neočekivane promjene u planu.",
        "Možeš djelovati kruto ili pretjerano ozbiljno.",
        "Ponekad se uloviš u detaljima i zaboraviš širu sliku."
      ],
      guidance:
        "Dopusti malo fleksibilnosti – struktura može biti čvrsta, a ipak kreativna."
    },
    5: {
      headline:
        "Broj izražaja 5 pokazuje da napreduješ kroz raznolikost, putovanja i dijeljenje iskustava.",
      strengths: [
        "Odlično se snalaziš u komunikaciji s različitim ljudima.",
        "Brzo učiš i voliš eksperimentirati s novim alatima ili okruženjima.",
        "Tvoja energija motivira druge na promjenu."
      ],
      challenges: [
        "Rutina te guši pa možeš djelovati nepouzdan.",
        "Nerijetko započneš više projekata nego što ih dovršiš.",
        "Impulzivnost ti zna stvoriti dodatni posao."
      ],
      guidance:
        "Uvedi male rituale koji će ti pomoći da zadržiš pravac bez gubitka slobode."
    },
    6: {
      headline:
        "Broj izražaja 6 naglašava poziv na služenje, mentorstvo i stvaranje sigurnih prostora.",
      strengths: [
        "Prirodno preuzimaš brigu za tim i njeguješ suradnju.",
        "Imaš talent za dizajn interijera, glazbu ili rad s djecom.",
        "Paziš da proces bude human i uravnotežen."
      ],
      challenges: [
        "Teško kažeš 'ne' pa preuzimaš previše zadataka.",
        "Možeš djelovati zaštitnički i gušiti tuđu autonomiju.",
        "Visoki standardi dovode do samokritike."
      ],
      guidance:
        "Postavi jasne granice i vjeruj da drugi također mogu doprinositi."
    },
    7: {
      headline:
        "Broj izražaja 7 pokazuje da se ističeš u analizi, istraživanju i prenošenju znanja.",
      strengths: [
        "Duboko proučavaš teme i dijeliš uvide s jasnoćom.",
        "Privlače te znanstvena, tehnološka ili duhovna područja.",
        "Cijeniš kvalitetu i autentičnost više od površnog sjaja."
      ],
      challenges: [
        "Znaš se povući iz timskog rada ako smatraš da drugi nisu dovoljno predani.",
        "Često tražiš savršen odgovor prije nego što ga podijeliš.",
        "Možeš djelovati distancirano."
      ],
      guidance:
        "Vježbaj dijeljenje ideja u ranijoj fazi – povratne informacije potaknut će tvoju briljantnost."
    },
    8: {
      headline:
        "Broj izražaja 8 govori o vještini upravljanja, financijske inteligencije i strateškog nastupa.",
      strengths: [
        "Prirodno vodiš projekte prema mjerljivim rezultatima.",
        "Razumiješ vrijednost resursa i znaš kako ih multiplicirati.",
        "Tvoja prisutnost ulijeva povjerenje u ozbiljnim situacijama."
      ],
      challenges: [
        "Možeš zvučati strogo ili zahtjevno.",
        "Postoji tendencija da rad staviš iznad osobnih odnosa.",
        "Teško priznaješ kada ti je potrebna pomoć."
      ],
      guidance:
        "Transparentna komunikacija i zahvalnost jačaju tvoj autoritet."
    },
    9: {
      headline:
        "Broj izražaja 9 donosi humanistički pristup, empatiju i globalnu perspektivu.",
      strengths: [
        "Radije biraš projekte koji imaju društvenu ili umjetničku vrijednost.",
        "Lako okupljaš zajednicu oko ideala.",
        "Tvoja poruka inspirira i potiče suosjećanje."
      ],
      challenges: [
        "Ponekad zanemaruješ praktične detalje.",
        "Možeš se osjećati razočarano ako rezultati nisu idealni.",
        "Teško ti je naplatiti svoj rad."
      ],
      guidance:
        "Uravnoteži idealizam i pragmatizam kako bi tvoja misija bila održiva."
    },
    11: {
      headline:
        "Broj izražaja 11 naglašava karizmu, vizionarsku komunikaciju i intuitivno vodstvo.",
      strengths: [
        "S lakoćom prenosiš složene duhovne ili kreativne ideje.",
        "Tvoja prisutnost magnetizira pažnju publike.",
        "Osjećaš ritam trenutka i znaš kada djelovati."
      ],
      challenges: [
        "Preplavljenost energijom drugih može te iscrpiti.",
        "Povremeno sumnjaš u vlastitu vrijednost unatoč talentima.",
        "Teško održavaš rutinu koja podržava tvoje darove."
      ],
      guidance:
        "Kreiraj umjetničke ili edukativne projekte koji ti omogućuju strukturirano dijeljenje uvida."
    },
    22: {
      headline:
        "Broj izražaja 22 spaja arhitekta vizije i praktičnog izvršitelja.",
      strengths: [
        "Uočavaš kako velike ideje pretvoriti u sustave i infrastrukturu.",
        "Pouzdano koordiniraš ljude i resurse na višoj razini.",
        "Posjeduješ poslovnu intuiciju i osjećaj za društvenu svrhu."
      ],
      challenges: [
        "Osjećaš pritisak da uvijek razmišljaš veliko.",
        "Teško prihvaćaš manje projekte jer ti ne djeluju dovoljno značajno.",
        "Možeš izgorjeti ako nemaš timsku potporu."
      ],
      guidance:
        "Dijeli viziju po fazama i proslavi svaku postignutu stepenicu."
    },
    33: {
      headline:
        "Broj izražaja 33 ukazuje na dar za iscjeljujuće podučavanje i inspiraciju.",
      strengths: [
        "Tvoje riječi i umjetnost imaju terapeutski učinak.",
        "Prirodno služiš kao mentor koji ohrabruje srcem.",
        "Spajaš mudrost i praktične savjete u jedan tok."
      ],
      challenges: [
        "Možeš se previše vezati za probleme svojih učenika.",
        "Osjećaš odgovornost da uvijek budeš 'u visokoj vibraciji'.",
        "Teško odustaješ od projekata čak i kada su iscrpljujući."
      ],
      guidance:
        "Odredi jasne granice i njeguj vlastitu kreativnu energiju."
    }
  },
  soulUrge: {
    1: {
      headline:
        "Broj duše 1 otkriva duboku želju za autonomijom i samoinicijativom.",
      strengths: [
        "Iznutra te pokreće potreba da budeš jedinstven i autentičan.",
        "Osjećaš strast kad možeš donositi vlastite odluke.",
        "Unutarnji glas te potiče da prevladavaš prepreke."
      ],
      challenges: [
        "Možeš odbiti pomoć čak i kada bi ti olakšala put.",
        "Ponekad ti je teško priznati ranjivost.",
        "Osjetljiv si na bilo kakva ograničenja."
      ],
      guidance:
        "Vjeruj da dijeljenje odgovornosti ne umanjuje tvoju neovisnost – biraš saveznike, ne nadzornike."
    },
    2: {
      headline:
        "Broj duše 2 želi harmoniju, bliskost i siguran osjećaj zajedništva.",
      strengths: [
        "Srce te vodi da njeguješ odnose s nježnošću.",
        "Uživanje pronalaziš u dijeljenju, slušanju i zajedničkom stvaranju.",
        "Intuitivno znaš kako stvoriti atmosferu mira."
      ],
      challenges: [
        "Strah od odbacivanja navodi te da previše popuštaš.",
        "Teško donosiš odluke bez potvrde voljenih.",
        "Ponekad se skrivaš iza tuđih želja."
      ],
      guidance:
        "Otvori se ideji da si vrijedna osoba čak i kad zauzmeš drugačiji stav."
    },
    3: {
      headline:
        "Broj duše 3 sanja o izražavanju radosti i kreativne inspiracije.",
      strengths: [
        "Najživlje se osjećaš kada dijeliš ideje kroz umjetnost, humor ili pisanu riječ.",
        "Tvoj unutarnji svijet bogat je bojama i simbolima.",
        "Voliš uveseljavati ljude i širiti optimizam."
      ],
      challenges: [
        "Osjećaš krivnju kad nisi 'vedar', pa potiskuješ ozbiljne emocije.",
        "Teško se discipliniraš bez kreativnog poticaja.",
        "Ponekad tražiš potvrdu kroz reakcije publike."
      ],
      guidance:
        "Dopusti si cijeli spektar emocija – autentičan izraz je najprivlačniji."
    },
    4: {
      headline:
        "Broj duše 4 teži stabilnosti, sigurnoj strukturi i osjećaju postignuća kroz trud.",
      strengths: [
        "U srcu želiš graditi nešto trajno.",
        "Sreću pronalaziš u rutini koja donosi rezultate.",
        "Voliš jasne korake i mjerljive ciljeve."
      ],
      challenges: [
        "Strah od nepoznatog može zaustaviti potrebne promjene.",
        "Teško se opuštaš kad nema plana.",
        "Ponekad osjećaš da ne zaslužuješ odmor dok sve nije savršeno."
      ],
      guidance:
        "Pronađi rituale koji kombiniraju strukturu i užitak – i odmor je produktivan kada puni tvoje baterije."
    },
    5: {
      headline:
        "Broj duše 5 žudi za slobodom, pustolovinom i raznolikošću.",
      strengths: [
        "Unutarnji glas te poziva da iskušavaš nove horizonte.",
        "Uživanje ti donose putovanja, novi jezici i neočekivane ideje.",
        "Spontanost ti puni srce."
      ],
      challenges: [
        "Bojazan od rutine može spriječiti gradnju stabilnih temelja.",
        "Ponekad naglo prekidaš situacije čim osjetiš ograničenje.",
        "Teško podnosiš obveze koje drugi očekuju od tebe."
      ],
      guidance:
        "Definiraj slobodu na način koji te podržava – jasna vizija omogućuje ti da biraš avanture koje te zaista hrane."
    },
    6: {
      headline:
        "Broj duše 6 sanja o toplom domu, međusobnoj brizi i ljepoti oko sebe.",
      strengths: [
        "Najispunjeniji si kad njeguješ voljene i vidiš ih sretne.",
        "Cijeniš estetski sklad i uživaš u stvaranju ugodnih prostora.",
        "Srce te vodi prema služenju i terapijskom radu."
      ],
      challenges: [
        "Možeš očekivati savršenstvo od sebe i drugih.",
        "Ponekad zaboraviš izraziti vlastite potrebe.",
        "Teško podnosiš disharmoniju pa radi mira pristaješ na previše."
      ],
      guidance:
        "Sjeti se da i ti zaslužuješ istu razinu njege koju daruješ drugima."
    },
    7: {
      headline:
        "Broj duše 7 traga za istinom, tišinom i dubljim razumijevanjem.",
      strengths: [
        "Uživanje pronalaziš u meditaciji, čitanju i istraživanju misterija.",
        "Voliš promatrati život iz filozofske perspektive.",
        "Unutarnji mir dolazi iz povezanosti s intuicijom."
      ],
      challenges: [
        "Možeš se osjećati neshvaćeno pa se povlačiš.",
        "Ne vjeruješ lako ljudima dok se ne dokažu.",
        "Teško dijeliš osobne emocije."
      ],
      guidance:
        "Stvori krug povjerljivih ljudi s kojima možeš dijeliti svoje uvide – dijalog hrani tvoju dušu jednako kao i tišina."
    },
    8: {
      headline:
        "Broj duše 8 želi osobnu moć, ostvarenja i konkretan utjecaj.",
      strengths: [
        "U srcu osjećaš želju da stvoriš nasljeđe.",
        "Motivira te ideja o financijskoj i emocionalnoj neovisnosti.",
        "Veseli te kada vidiš rezultate svog rada."
      ],
      challenges: [
        "Strah od gubitka kontrole stvara napetost.",
        "Ponekad mjeriš vrijednost kroz status.",
        "Teško primaš pomoć jer želiš dokazati da možeš samostalno."
      ],
      guidance:
        "Definiraj vlastitu verziju uspjeha koja uključuje i unutarnje zadovoljstvo."
    },
    9: {
      headline:
        "Broj duše 9 teži univerzalnoj ljubavi, služenju i plemenitoj svrsi.",
      strengths: [
        "Srce ti se otvara kad pomažeš drugima.",
        "Prirodno suosjećaš i razumiješ različite životne priče.",
        "Voliš projekte s humanitarnim, umjetničkim ili duhovnim pečatom."
      ],
      challenges: [
        "Teško postavljaš granice prema onima kojima pomažeš.",
        "Možeš osjećati tugu zbog nepravde u svijetu.",
        "Ponekad idealiziraš ljude i razočaraš se."
      ],
      guidance:
        "Pamti da tvoja empatija vrijedi najviše kada je usmjerena i na tebe."
    },
    11: {
      headline:
        "Broj duše 11 čezne za nadahnućem, duhovnom povezanosti i prenošenjem svjetlosti.",
      strengths: [
        "Osjećaš snažnu misiju da probudiš svijest u drugima.",
        "Tvoja intuicija je iznimno fina i vodi te pravim sinhronicitetima.",
        "Srce ti se otvara uz umjetnost, meditaciju ili mentorski rad."
      ],
      challenges: [
        "Preosjetljiv si na energiju okoline.",
        "Možeš osjećati teret očekivanja da uvijek budeš 'na visini zadatka'.",
        "Sklon si perfekcionizmu u duhovnom radu."
      ],
      guidance:
        "Uzemljuj se kroz rituale i jednostavne radosti – tvoja svjetlost blista najjače kada si dobro ukorijenjen."
    },
    22: {
      headline:
        "Broj duše 22 želi izgraditi nešto monumentalno što služi zajednici.",
      strengths: [
        "Motivira te ideja da ostaviš opipljiv doprinos.",
        "Srce ti se otvara kada strategija i altruizam idu ruku pod ruku.",
        "Voliš projekte koji spajaju ljude oko zajedničke vizije."
      ],
      challenges: [
        "Možeš osjećati pritisak da konstantno radiš velike stvari.",
        "Strah od neuspjeha te ponekad paralizira.",
        "Teško prihvaćaš male korake jer želiš savršenu izvedbu."
      ],
      guidance:
        "Dopusti si fazni razvoj – i najveće građevine nastaju ciglu po ciglu."
    },
    33: {
      headline:
        "Broj duše 33 sanja o iscjeljenju, služenju srcem i prenošenju bezuvjetne ljubavi.",
      strengths: [
        "Duboko suosjećaš i razumiješ bol drugih.",
        "Veliku radost ti donosi kada nekome pomogneš da ozdravi ili pronađe smisao.",
        "Unutarnje vodstvo te potiče na umjetničko ili terapeutsko izražavanje."
      ],
      challenges: [
        "Možeš zaboraviti na vlastite potrebe dok brineš za sve ostale.",
        "Osjećaš odgovornost da uvijek budeš dostupan.",
        "Preuzimaš tuđe emocije kao svoje."
      ],
      guidance:
        "Postavi duhovne i emocionalne granice kako bi tvoja ljubav ostala čista i obnovljiva."
    }
  },
  personality: {
    1: {
      headline:
        "Osobnost 1 ostavlja dojam samouvjerenog, dinamičnog i odlučnog pojedinca.",
      strengths: [
        "Ljudi te vide kao inicijatora koji zna što želi.",
        "Tvoj stil komunikacije je direktan i motivirajući.",
        "Zračiš energijom lidera."
      ],
      challenges: [
        "Drugi te mogu doživjeti kao dominantnog.",
        "Nerijetko zaboraviš ublažiti ton.",
        "Očekuješ brze reakcije pa djeluješ nestrpljivo."
      ],
      guidance:
        "Uključi više pitanja u razgovorima – otvorenost stvara povjerenje."
    },
    2: {
      headline:
        "Osobnost 2 zrači toplinom, taktom i susretljivošću.",
      strengths: [
        "Lako stvaraš ugodnu atmosferu.",
        "Drugi te vide kao pouzdanog partnera.",
        "Tvoj glas i držanje djeluju umirujuće."
      ],
      challenges: [
        "Možeš ostaviti dojam nesigurnosti ako ne izraziš jasno mišljenje.",
        "Ponekad se previše povlačiš kako bi izbjegao sukob.",
        "Preuzimaš ulogu posrednika čak i kad to ne želiš."
      ],
      guidance:
        "Vježbaj postavljanje granica – poštovanje je jednako važno kao i ljubaznost."
    },
    3: {
      headline:
        "Osobnost 3 ostavlja vedar, društven i maštovit dojam.",
      strengths: [
        "Tvoj smisao za humor brzo osvaja publiku.",
        "Volja za druženjem otvara ti mnoga vrata.",
        "Zračiš kreativnošću u načinu odijevanja i govora."
      ],
      challenges: [
        "Drugi te mogu doživjeti kao površnog ako ne vide tvoju ozbiljniju stranu.",
        "Ponekad preuzimaš pozornost na sebe.",
        "Teško skrivaš emocije pa si vrlo transparentan."
      ],
      guidance:
        "Podijeli i dublje misli – ljudi će te cijeniti zbog autentičnosti."
    },
    4: {
      headline:
        "Osobnost 4 odiše pouzdanošću, ozbiljnošću i praktičnim pristupom.",
      strengths: [
        "Ljudi ti vjeruju jer djeluješ stabilno i organizirano.",
        "Tvoja pojava ulijeva osjećaj reda i sigurnosti.",
        "Pažljivo biraš riječi i ne pretjeruješ u gestama."
      ],
      challenges: [
        "Ponekad ostavljaš dojam krutosti ili distance.",
        "Teško pokazuješ razigranost.",
        "Možeš djelovati pretjerano kritično."
      ],
      guidance:
        "Dodaj malo ležernosti u nastup – osmijeh i opušten govor čine čuda."
    },
    5: {
      headline:
        "Osobnost 5 doživljava se kao živahna, svestrana i nepredvidiva.",
      strengths: [
        "Privlačiš pažnju svojom spontanom energijom.",
        "Lako se povezuješ s različitim skupinama.",
        "Tvoj stil je razigran i moderan."
      ],
      challenges: [
        "Drugi mogu posumnjati u tvoju stabilnost.",
        "Znaš prebacivati temu prije nego što drugi budu spremni.",
        "Teško se prilagođavaš formalnim pravilima."
      ],
      guidance:
        "Jasno objasni svoje namjere – ljudi će lakše pratiti tvoj tempo."
    },
    6: {
      headline:
        "Osobnost 6 zrači brižnošću, pristupačnošću i osjećajem za estetiku.",
      strengths: [
        "Ljudi te vide kao nekoga tko stvara sigurnost.",
        "Tvoj stil je njegovan i topao.",
        "Znaš prepoznati potrebe drugih i djelovati preventivno."
      ],
      challenges: [
        "Možeš djelovati prezaštitnički.",
        "Preuzimaš odgovornost i kad nije tvoja.",
        "Ponekad zaboraviš naglasiti vlastite granice."
      ],
      guidance:
        "Daj do znanja da i ti imaš prioritete – to dodatno jača povjerenje."
    },
    7: {
      headline:
        "Osobnost 7 ostavlja dojam promatrača, analitičara i osobe dubokih misli.",
      strengths: [
        "Ljudi te smatraju mudrim i pronicljivim.",
        "Tvoja tišina budi poštovanje.",
        "Rado dijeliš zanimljive uvide kada progovoriš."
      ],
      challenges: [
        "Možeš se činiti nedostupnim ili hladnim.",
        "Drugi možda ne znaju kako te uključiti u opušten razgovor.",
        "Sklon si kritičkom pogledu pa djeluješ zahtjevno."
      ],
      guidance:
        "Povremeno podijeli osobnu priču – to razbija zidove i potiče povjerenje."
    },
    8: {
      headline:
        "Osobnost 8 djeluje autoritativno, odlučno i usmjereno na rezultat.",
      strengths: [
        "Tvoja prisutnost ulijeva sigurnost u poslovnim situacijama.",
        "Govoriš jasno i bez suvišnih riječi.",
        "Zračiš ambicijom i snagom."
      ],
      challenges: [
        "Drugi se mogu zastrašiti tvojom ozbiljnošću.",
        "Ponekad djeluješ nedostupno ili hladno.",
        "Očekuješ visok standard od svih."
      ],
      guidance:
        "Uključi humor i priznanja prema drugima – to humanizira tvoj snažan nastup."
    },
    9: {
      headline:
        "Osobnost 9 ostavlja human, empatičan i inspirativan dojam.",
      strengths: [
        "Ljudi osjećaju da ih iskreno razumiješ.",
        "Tvoja komunikacija je puna idealizma i velikodušnosti.",
        "Često preuzimaš ulogu moralnog kompasa."
      ],
      challenges: [
        "Teško skrivaš razočaranje kad nečije ponašanje ne prati tvoje ideale.",
        "Ponekad djeluješ kao da si iznad svakodnevnih briga.",
        "Možeš se umoriti od stalne podrške drugima."
      ],
      guidance:
        "Dopusti drugima da i oni podrže tebe – ravnoteža čini tvoju toplinu održivom."
    },
    11: {
      headline:
        "Osobnost 11 zrači karizmom, senzitivnošću i duhovnom aurom.",
      strengths: [
        "Drugi osjećaju da ih vidiš dublje od površine.",
        "Tvoja prisutnost je inspirativna i magnetična.",
        "Često prenosiš intuitivne poruke kroz riječi, pogled ili stil."
      ],
      challenges: [
        "Možeš djelovati nestalno zbog promjenjive energije.",
        "Neki ljudi osjećaju da su 'pročitani', pa se povlače.",
        "Osjetljiv si na atmosferu i brzo se umoriš u gužvi."
      ],
      guidance:
        "S jasnim granicama lakše održavaš balans između dostupnosti i osobnog prostora."
    },
    22: {
      headline:
        "Osobnost 22 ostavlja dojam strateškog graditelja i osobe koja zna što je moguće.",
      strengths: [
        "Ljudi ti vjeruju velike projekte jer djeluješ sposobno.",
        "Tvoja pojava kombinira pragmatizam i vizionarski pogled.",
        "Znaš motivirati druge konkretnim planom."
      ],
      challenges: [
        "Možeš djelovati zahtjevno ili perfekcionistički.",
        "Ponekad zaboravljaš pokazati emocionalnu stranu.",
        "Drugi se mogu osjećati nedoraslo tvojim standardima."
      ],
      guidance:
        "Podijeli i ranjiviju stranu – suradnici će se povezati s tobom još snažnije."
    },
    33: {
      headline:
        "Osobnost 33 zrači brigom, mudrošću i duhovnom toplinom.",
      strengths: [
        "Ljudi te doživljavaju kao prirodnog vodiča i savjetnika.",
        "Tvoj glas i pogled ulijevaju povjerenje.",
        "Spremno pružaš ohrabrenje i nježno usmjeravanje."
      ],
      challenges: [
        "Možeš preuzeti ulogu spasitelja i osjećati teret.",
        "Ponekad zaboravljaš na vlastite potrebe tijekom pomaganja.",
        "Teško pokazuješ umor ili frustraciju."
      ],
      guidance:
        "Dijeli svoje granice s okolinom – autentičnost je dio tvoje ljekovite prisutnosti."
    }
  }
};

const form = document.getElementById("numerology-form");
const resultsSection = document.getElementById("results");
const resultsGrid = document.getElementById("results-grid");
const descriptionsContainer = document.getElementById("number-descriptions");
const errorEl = document.getElementById("form-error");

const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

function normalizeName(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\uFE20-\uFE2F]/g, "")
    .replace(/[^A-Za-z\s]/g, "")
    .toUpperCase()
    .trim();
}

function sumDigits(value) {
  return value
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

function reduceNumber(total) {
  let value = total;

  while (value > 9 && !masterNumbers.has(value)) {
    value = sumDigits(value);
  }

  return value;
}

function calculateLifePath(dateString) {
  if (!dateString) return null;

  const digitsOnly = dateString.replace(/[^0-9]/g, "");
  if (!digitsOnly) return null;

  const total = digitsOnly.split("").reduce((acc, char) => acc + Number(char), 0);
  return reduceNumber(total);
}

function lettersToNumbers(name, filterFn = () => true) {
  const sanitized = normalizeName(name);
  const letters = sanitized.split("").filter((char) => /[A-Z]/.test(char));

  const filtered = letters.filter((char) => filterFn(char));

  if (!filtered.length) return null;

  const sum = filtered.reduce((acc, char) => acc + (letterValues[char] || 0), 0);
  return reduceNumber(sum);
}

function calculateExpression(name) {
  return lettersToNumbers(name, () => true);
}

function calculateSoulUrge(name) {
  return lettersToNumbers(name, (char) => vowelSet.has(char));
}

function calculatePersonality(name) {
  return lettersToNumbers(name, (char) => !vowelSet.has(char));
}

function createListSection(title, items) {
  if (!items || !items.length) return null;

  const section = document.createElement("div");
  section.className = "result-card__section";

  const heading = document.createElement("h4");
  heading.textContent = title;
  section.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "result-card__list";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  section.appendChild(list);
  return section;
}

function buildResultCard({ key, number, missingNote }) {
  const meta = aspectMeta[key];
  const article = document.createElement("article");
  article.className = "result-card";

  const header = document.createElement("div");
  header.className = "result-card__title";

  const heading = document.createElement("div");
  heading.className = "result-card__heading";

  if (meta?.icon) {
    const icon = document.createElement("span");
    icon.className = "result-card__icon";
    icon.textContent = meta.icon;
    heading.appendChild(icon);
  }

  if (meta?.title) {
    const titleEl = document.createElement("span");
    titleEl.className = "result-card__label";
    titleEl.textContent = meta.title;
    heading.appendChild(titleEl);
  }

  header.appendChild(heading);

  const numberContainer = document.createElement("div");
  numberContainer.className = "result-card__number-wrapper";

  const numberEl = document.createElement("span");
  numberEl.className = "result-card__number";
  numberEl.textContent = number != null ? number : "—";
  numberContainer.appendChild(numberEl);

  if (number != null && masterNumbers.has(number)) {
    const badge = document.createElement("span");
    badge.className = "result-card__master";
    badge.textContent = "Glavni broj";
    numberContainer.appendChild(badge);
  }

  header.appendChild(numberContainer);
  article.appendChild(header);

  if (meta?.intro) {
    const intro = document.createElement("p");
    intro.className = "result-card__intro";
    intro.textContent = meta.intro;
    article.appendChild(intro);
  }

  if (number == null) {
    if (missingNote) {
      const note = document.createElement("p");
      note.className = "result-card__note";
      note.textContent = missingNote;
      article.appendChild(note);
    }
    return article;
  }

  const interpretation = aspectInterpretations[key]?.[number];

  if (interpretation?.headline) {
    const summary = document.createElement("p");
    summary.className = "result-card__summary";
    summary.textContent = interpretation.headline;
    article.appendChild(summary);
  }

  const strengthsSection = createListSection("Što te podupire", interpretation?.strengths);
  if (strengthsSection) {
    article.appendChild(strengthsSection);
  }

  const challengesSection = createListSection("Na što pripaziti", interpretation?.challenges);
  if (challengesSection) {
    article.appendChild(challengesSection);
  }

  if (interpretation?.guidance) {
    const guidanceSection = document.createElement("div");
    guidanceSection.className = "result-card__section result-card__section--guidance";

    const guidanceHeading = document.createElement("h4");
    guidanceHeading.textContent = "Savjet za ravnotežu";

    const guidanceParagraph = document.createElement("p");
    guidanceParagraph.className = "result-card__guidance";
    guidanceParagraph.textContent = interpretation.guidance;

    guidanceSection.append(guidanceHeading, guidanceParagraph);
    article.appendChild(guidanceSection);
  }

  return article;
}

function renderNumberDescriptions(numbers) {
  descriptionsContainer.innerHTML = "";
  const uniqueNumbers = [...new Set(numbers.filter((value) => value != null))].sort(
    (a, b) => a - b
  );

  uniqueNumbers.forEach((number) => {
    const text = numberDescriptions[number];
    if (!text) return;

    const article = document.createElement("article");
    const heading = document.createElement("h4");
    heading.textContent = `Broj ${number}`;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    if (masterNumbers.has(number)) {
      const badge = document.createElement("span");
      badge.className = "result-card__master";
      badge.textContent = "Glavni broj";
      heading.appendChild(document.createTextNode(" "));
      heading.appendChild(badge);
    }

    article.append(heading, paragraph);
    descriptionsContainer.appendChild(article);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  errorEl.textContent = "";

  const nameInput = document.getElementById("full-name");
  const birthDateInput = document.getElementById("birth-date");

  const nameValue = nameInput.value.trim();
  const dateValue = birthDateInput.value;

  if (!nameValue) {
    errorEl.textContent = "Unesi puno ime i prezime.";
    resultsSection.hidden = true;
    return;
  }

  if (!dateValue) {
    errorEl.textContent = "Odaberi datum rođenja.";
    resultsSection.hidden = true;
    return;
  }

  const normalizedName = normalizeName(nameValue);

  if (!normalizedName) {
    errorEl.textContent = "Ime mora sadržavati slova.";
    resultsSection.hidden = true;
    return;
  }

  const lifePath = calculateLifePath(dateValue);
  const expression = calculateExpression(nameValue);
  const soulUrge = calculateSoulUrge(nameValue);
  const personality = calculatePersonality(nameValue);

  resultsGrid.innerHTML = "";

  const cards = [
    {
      key: "lifePath",
      number: lifePath,
      missingNote: "Provjeri je li datum rođenja ispravno unesen."
    },
    {
      key: "expression",
      number: expression,
      missingNote:
        "Potrebno je da ime sadrži barem jedno slovo kako bi se broj izražaja izračunao."
    },
    {
      key: "soulUrge",
      number: soulUrge,
      missingNote:
        "Ime ne sadrži samoglasnike, pa broj duše ne može biti izračunan."
    },
    {
      key: "personality",
      number: personality,
      missingNote:
        "Ime se sastoji samo od samoglasnika, pa broj osobnosti ne može biti izračunan."
    }
  ];

  const numbersForDescriptions = [];

  cards.forEach((card) => {
    if (card.number != null) {
      numbersForDescriptions.push(card.number);
    }

    const detail = buildResultCard(card);
    resultsGrid.appendChild(detail);
  });

  renderNumberDescriptions(numbersForDescriptions);

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}
