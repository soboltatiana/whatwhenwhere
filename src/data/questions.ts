import type { Question } from "@/interfaces/question";

export const questions: Array<Question> = [
  {
    author: {
      name: "Charles Dickens",
      picture: "/players/charles-dickens.jpg",
    },
    question: "De ce anume așa am început nuvela?",
    description:
      "Ca să începem cu începutul, Marley murise. În această privință nu încăpea îndoială.",
    answer: {
      text: "Ca să nu existe nici o îndoială că fantoma lui Marley este într-adevăr o fantomă.",
    },
  },
  {
    author: {
      name: "Spiritul Crăciunului din trecut",
      picture: "/answers/ghost-of-christmas-past.jpg",
    },
    question: "Ce lecție asociată fiecarei viziuni a învățat Scrooge?",
    description: undefined,
    pictures: [
      "/questions/past-vision-1.jpg",
      "/questions/past-vision-2.jpg",
      "/questions/past-vision-3.jpg",
      "/questions/past-vision-4.jpg",
      "/questions/past-vision-5.jpg",
    ],
    answer: {
      text:
        "1. toleranța către cei mai puțin norocoși decât el<br/>" +
        "2. importanța familiei<br/>" +
        "3. bunătatea și generozitatea către subalterni<br/>" +
        "4. importanța iubirii<br/>" +
        "5. cum lipsa iubirii, familiei, prietenilor l-a lăsat pe Scrooge singur pe lume",
    },
  },
  {
    author: {
      name: "Anastasia Arkhipova",
      picture: "/players/anastasia-arkhipova.jpg",
    },
    question:
      "Cu ce obiect din poveste autorul aseamănă acest corn al abundenței?",
    description:
      "Cornul abundenței desemnează simbolul belșugului. Este reprezentat printr-un corn umplut cu flori și fructe.",
    pictures: ["/questions/cornul-abundentei.jpg"],
    answer: {
      pictures: ["/answers/cornul-abundentei-craciunul-din-prezent.jpg"],
    },
  },
  {
    author: {
      name: "Spiritul Crăciunului din Trecut",
      picture: "/answers/ghost-of-christmas-past.jpg",
    },
    question:
      "Din ce personaje simboluri sunt inspirate celelalte două spirite?",
    description:
      "Se consideră că personajul meu este inspirat de Îngerul de Crăciun.",
    pictures: ["/questions/christmas-angel.jpg"],
    answer: {
      pictures: ["/answers/grimm-reaper.jpg", "/answers/father-christmas.jpg"],
    },
  },
  {
    author: {
      name: "Spiritul Crăciunului din Prezent",
      picture: "/players/craciunul-din-prezent.jpg",
    },
    question: "Cine sunt ei?",
    description:
      "Ei doi reprezintă sărăcia și greutățile care există în societate. " +
      "Arătându-i lui Scrooge, am vrut să-i explic ce înseamnă neglijarea și desconsiderarea celor aflați în nevoie.",
    pictures: undefined,
    answer: {
      text: "Copiii Ignoranța și Lipsa",
      pictures: ["/answers/ignorance-and-want.jpg"],
    },
  },
  {
    author: {
      name: "Paramount și Disney",
      picture: "/players/disney.jpg",
    },
    question:
      'Cine sunt personajele și din ce personaje din "O Poveste de Crăciun" sunt inspirate?',
    description: undefined,
    pictures: ["/questions/jimmy-valmer.png", "/questions/scrooge-mcduck.jpg"],
    answer: {
      text: "1.Jimmy din South Park - inspirat de Micul Tim<br/>2.Scrooge McDuck din The Duck Tales - inspirat de Scrooge<br/>",
    },
  },
  {
    author: {
      name: "Soția lui Bob Cratchit",
      picture: "/players/mrs-cratchit.jpg",
    },
    question: "Despre ce pasăre merge vorba?",
    description:
      "Despre momentul în care am pus gâsca pe masa de sărbatoare,\n" +
      "Charles Dickens scrie:\n" +
      "<br/><br/><i>Așa un tumult a urmat, încât ai fi zis că o gâscă e cea mai rară dintre păsări, un adevărat fenomen înaripat, și că, prin comprație cu ea, <b>X</b> este ceva banal.</i>\n" +
      "<br/><br/>Natalie Portman a jucat rolul de <b>X</b> in filmul cu același nume în 2010.",
    pictures: undefined,
    answer: {
      pictures: ["/answers/black-swan.jpg"],
      text: "Pe vremea lui Dickens, lebăda neagră era sinonimă cu pasărea rară.",
    },
  },
  {
    author: {
      name: "Bob Cratchit",
      picture: "/players/bob-cratchit.jpg",
    },
    question: "De ce Charles Dickens era împotriva legii săracilor?",
    description:
      "Până in 1834 săracii primeau ajutoare din bugetul statului.  Întrucât bugetul era format din impozitele clasei de sus și mijlocii, aceștia au început să se revolte precum că banii lor sunt irosiți de niște leneși care nu vor să lucreze. \n" +
      "\n" +
      "În 1834 a fost adoptată o lege care prevedea ca toți săracii să fie cazați în case de muncă, să fie îmbrăcați și hraniți. În schimbul acestor servicii, săracii trebuiau să lucreze în timpul zilei.\n" +
      "\n" +
      'Însă nu toți erau de acord cu această lege nouă. Unii numeau aceste case de muncă niște închisori pentru săraci. Charles Dickens critică această lege in "O Poveste de Crăciun".',
    pictures: undefined,
    answer: {
      text: "Săracii nu erau ajutați de casele de muncă. Condițiile din casele de muncă erau adesea dure și inumane, iar separarea familiilor și lipsa de sprijin pentru bolnavi, vârstnici și copiii nou născuți au făcut ca mulți oameni să sufere și mai mult.",
    },
  },
  {
    author: {
      name: "Cutia neagră",
      picture: "/players/black-box.jpg",
    },
    question:
      "Ce se află în cutia neagră și ce a însemnat furtul acestui obiect?",
    description:
      "În tabloul 4 se descrie cum trei persoane merg sa vândă lucrurile furate de la răposatul Scrooge. În cutia neagră se află un lucru extrem de personal care a fost furat de la el.",
    pictures: undefined,
    answer: {
      text: "Furtul cămeșii de pe el a însemnat că Scrooge a murit singur și nimeni nu stătea să-l vegheze pe patul lui de mort.",
    },
  },
  {
    author: {
      name: "Fan - sora lui Scrooge",
      picture: "/players/fan.jpg",
    },
    question:
      "Ce personaje sunt inspirate de copilăria dificilă a lui Charles Dickens?",
    description:
      "Dickens a avut o relație complicată cu tatăl său, John Dickens. Când avea 12 ani, Charles Dickens a fost scos de la școală și forțat să lucreze la fabrică timp de 10 ore pe zi, șase zile pe săptămână. Motivul: tatăl său, John Dickens, fusese condamnat la Închisoarea Datornicilor pentru că nu putea plăti o datorie de 40 de lire sterline; soția și copiii mai mici i s-au alăturat acolo, în timp ce Charles locuia singur în chirie.",
    pictures: undefined,
    answer: {
      text: "Familia lui Bob Cratchit",
    },
  },
  {
    author: {
      name: "Inteligența artificială - Chatgpt",
      picture: "/players/chatgpt.png",
    },
    question: "Ce credeți că a răspuns AI-ul?",
    description:
      "Există vreo modalitate de a face Crăciunul să dureze tot anul? Nu sunt încă pregătită să-mi iau rămas bun de la sezonul sărbătorilor.<br/>",
    pictures: undefined,
    answer: {
      text: "Eu sunt Spiritul Crăciunului din Prezent, nu Spiritul Crăciunului Permanent.<br/>",
    },
  },
];
