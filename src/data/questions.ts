import type { Question } from "@/interfaces/question";

export const questions: Array<Question> = [
  {
    author: {
      name: "Testul Turing",
      picture: "/players/turing.png",
    },
    description:
      "Eu nu mă tem de un computer care trece testul Turing. Eu mă tem de unul care îl pică <b>X</b>",
    question: "Ce cuvânt a fost înlocuit prin X?",
    answer: {
      text: "intenționat",
    },
    active: true,
  },
  {
    author: {
      name: "Furtuni de zăpadă",
    },
    description:
      "Pe timpul furtunilor de zăpadă, în satele rusești făceau asta pentru a-i ajuta pe cei prinși pe câmpuri să găsească satul.",
    question: "Ce acțiune făceau?",
    answer: {
      text: "Băteau clopotele",
    },
    active: true,
  },
  {
    author: {
      name: "Balto",
      picture: "/players/balto.jpg",
    },
    description:
      "În Parcul Central din New York găsim statuia lui Balto care, împreună cu alți câini, a salvat în 1925 câteva localități de la o epidemie de difterie.",
    question: "În care stat SUA se aflau aceste localități?",
    answer: {
      text: "Alaska",
    },
    active: true,
  },
  {
    author: {
      name: "Gaz M-20",
      picture: "/players/gaz-m20.jpg",
    },
    description:
      'Inițial modelul gaz M-20 se numea <b>X</b>. După ce Stalin a întrebat "Deci, cu cât vindeți <b>X</b>?", modelul a fost redenumit în Pobeda (Victorie).',
    question: "Ce a fost înlocuit prin X? (Cum se numea inițial acest model?)",
    answer: {
      text: "Patria",
    },
    active: true,
  },
  {
    author: {
      name: "5kg",
    },
    description:
      "Oamenii de știință au constatat că pe parcursul vieții sale, barbatul consumă în medie aproximativ 5kg din acest produs. " +
      "În pofida faptului că produsul în sine nu este comestibil, procesul consumării este plăcut și benefic pentru sănătate.",
    question: "Despre ce produs este vorba?",
    answer: {
      text: "Ruj",
      pictures: ["/answers/lipstick.jpeg"],
    },
    active: true,
  },
  {
    author: {
      name: "Daltoniștii",
    },
    description:
      "Contrar opiniei publice, pe ei nu-i deranjează culoarea, întrucât sunt daltoniști, ci mișcările bruște și provocatoare. ",
    question: "Cine sunt ei?",
    answer: {
      text: "Taurii",
      pictures: ["/answers/bull.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Pixurile BIC",
      picture: "/players/bic.jpg",
    },
    description:
      "În anul 1991 compania BIC a făcut o schimbare mimoră în designul pixurilor, schimbare care mai apoi a salvat viața a sute de copii și chiar adulți.",
    question: "Despre ce modificare este vorba?",
    answer: {
      text: "Au făcut o gaură în dopul pixurilor.",
      pictures: ["/answers/bic-pen-hole.jpeg"],
    },
    active: true,
  },
  {
    author: {
      name: "Culmea puterii",
    },
    description:
      "Conform unei glume, să tragi cu el este culmea puterii. Cel din Chișinău se află pe strada Ștefan cel Mare, cel din București se află în piața cu același nume," +
      " iar cel din Paris în Piața Stelei.",
    question: "Ce este el?",
    answer: {
      text: "Arc de triumf",
      pictures: ["/answers/arcul_de_triumf.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Fanii din Napoli",
      picture: "/players/napoli.jpeg",
    },
    description:
      "În 1987, când echipa de fotbal din Napoli a câștigat pentru prima oară în istorie titlul de campioană a Italiei, bucuria fanilor nu avea margini, iar pe un gard din oraș a apărut inscripția" +
      ' "Nici nu știți ce ați pierdut."',
    question: "Ce anume împrejmuia acel gard?",
    answer: {
      text: "Un cimitir",
      pictures: ["/answers/napoli-cimitery.jpeg"],
    },
    active: true,
  },
  {
    author: {
      name: "Accesoriu",
    },
    description:
      "Conform unei versiuni, această expresie românească vine de la un accesoriu pe care îl purtau fetele în zilele de sărbătoare, " +
      "accesoriu care atunci însemna că viața lor e simplă și lipsită de griji.",
    question: "Care este această expresie din 3 cuvinte?",
    answer: {
      text: "Floare la ureche",
      pictures: ["/answers/floare-la-ureche.png"],
    },
    active: true,
  },
  {
    author: {
      name: "Expresie românească",
      picture: "/players/colac-peste-pupaza.png",
    },
    description: "",
    question: "Ce expresie românească este codificată în această imagine?",
    answer: {
      text: "Colac peste pupăză",
      pictures: ["/answers/colac-peste-pupaza.jpeg"],
    },
    active: true,
  },

  {
    author: {
      name: "Mitologia greacă",
      picture: "/players/vertebra-atlas.png",
    },
    description:
      "Prima vertebră verticală, cea care susține craniul, poartă numele unui personaj din mitologia greacă.",
    question: "Care e numele vertebrei?",
    answer: {
      text: "Atlas",
      pictures: ["/answers/atlas.JPG"],
    },
    active: true,
  },
];
