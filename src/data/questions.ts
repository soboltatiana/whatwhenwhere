import type { Question } from "@/interfaces/question";

export const questions: Array<Question> = [
  {
    author: {
      name: "Dama din Franța",
    },
    description:
      'Aceasta "damă"  a apărut in 1889 ca să comemoreze 100 de ani de la revoluția franceză.  Nu a fost demontată doar datorită invenției radioului.',
    question: "Ce este ea?",
    answer: {
      pictures: ["/answers/turnul-eiffel.jpeg"],
    },
    active: true,
  },
  {
    author: {
      name: "Jupiter și Terra",
      picture: "/players/jupiter-and-terra.jpg",
    },
    description:
      "Există o teorie printre astronomi care susține că viața pe Pământ nu ar fi posibilă dacă nu ar exista gigantul Jupiter.",
    question: "Ce zice această teorie?",
    answer: {
      text: "Datorită gravitației sale, Jupiter atrage cea mai mare parte a asteroizilor ce ajung în Sistemul Solar.",
      pictures: ["/answers/jupiter-asteroids.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Legenda africană",
      picture: "/players/swahili.jpg",
    },
    description:
      "Conform legendei poporului african Swahili, primul om pe pământ a venit din cer.",
    question:
      "Cine l-a ajutat pe om să coboare din cer conform acestei legende?",
    answer: {
      pictures: ["/answers/giraffe.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "America",
    },
    description:
      'În America a fost tipărită o carte pentru copii cu mesajul "Învață să nu fii rasist cu <b>X</b>. <b>X</b> este alb, negru si asiatic".',
    question: "Ce a fost înlocuit prin X?",
    answer: {
      text: "Panda",
      pictures: ["/answers/panda-book.png"],
    },
    active: true,
  },
  {
    author: {
      name: "Japonia",
      picture: "/players/tsunami-word.png",
    },
    description: '<b>X</b> din japoneză se traduce "val mare în port".',
    question: "Ce a fost înlocuit prin X?",
    answer: {
      text: "Tsunami",
      pictures: ["/answers/tsunami-earthquake.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Sacii de făină",
      picture: "/players/flour-sacs.jpg",
    },
    description:
      "În timpul Marii Depresiuni, companiile care distribuiau făină au observat că oamenii folosesc sacii goi într-un anumit mod. De aceea au început să distribuie făina în saci colorați și cu diferite ornamente.",
    question: "Cum anume utilizau oamenii sacii goi de făină?",
    answer: {
      text: "Făceau haine",
      pictures: ["/answers/girls-dresses.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Grădinile zoologice",
    },
    description:
      "Marile orașe ale lumii de regulă au doar o singură grădină zoologică mare și poate altele mai mici. Acest oraș european are însă două grădini zoologice mari, prima fondată în 1844, a doua în 1955.",
    question: "Despre ce oraș european merge vorba?",
    answer: {
      text: "Berlin",
      pictures: ["/answers/zoo-berlin.jpg", "/answers/Tierpark-Berlin.jpg"],
    },
    active: true,
  },
  {
    author: {
      name: "Corăbiile și ciuma",
      picture: "/players/italian-ports.jpg",
    },
    description:
      "La începutul perioadei moderne, corăbiile care erau suspectate că erau purtătoare ale ciumei negre erau supuse unei perioade de izolare înainte de a li se permite accesul în porturile italiene.",
    question: "Câte zile dura această perioadă de izolare?",
    answer: {
      text: "40 zile - carantina",
    },
    active: true,
  },
  {
    author: {
      name: "Regele leu",
      picture: "/players/regele-leu.jpeg",
    },
    description:
      'Desenul animat "Regele leu" la început trebuia să se numească "Regele junglei".',
    question: "De ce totuși producătorii au hotărât să-i schimbe numele?",
    answer: {
      text: "Leul trăiește în savană",
    },
    active: true,
  },
  {
    author: {
      name: "Socrate",
      picture: "/players/socrate.jpg",
    },
    description:
      "Socrate sfătuia bărbații să se însoare, fiindcă dacă vor găsi o soție bună vor fi fericiți, dacă vor găsi una rea vor deveni X.",
    question: "Ce a fost înlocuit prin X?",
    answer: {
      text: "Filosofi",
    },
    active: true,
  },
  {
    author: {
      name: "Volkswagen",
      picture: "/players/Volkswagen_logo.png",
    },
    description:
      'Sloganul acestei publicități, care aparține companiei Volkswagen, spune <i>"Nu te baza pe ceva doar pentru că se potrivește"</i>.',
    question: "La ce făcea apel compania?",
    pictures: [
      "/questions/volkswagen-original-parts.jpg",
      "/questions/volkswagen-original-parts2.jpg",
    ],
    answer: {
      text: "Utilizarea pieselor originale pentru reparație",
    },
    active: true,
  },
  {
    author: {
      name: "Marea Britanie și Republica Moldova",
    },
    description:
      "În Republica Moldova, X a fost schimbat cu cel curent în 1995. În Marea Britanie, X a suferit o modificare minoră în 1953 și anul trecut.",
    question: "Ce a fost înlocuit prin X??",
    answer: {
      text:
        "<b>Imnul de stat</b>.<br><br>" +
        "În Marea Britanie, imnul se modifică in funție de sexul monarhului.<br><br> Înainte de stabilirea imnului curent, Republica Moldova a avut pentru câțiva ani același imn de stat ca și România, imnul „Deșteaptă-te, române!”. ",
    },
    active: true,
  },
];
