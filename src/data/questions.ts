import type { Question } from "@/interfaces/Question";

export const questions: Array<Question> = [
  {
    author: {
      name: "Charles Dickens",
      picture: "/players/charles-dickens.jpg",
    },
    question: "De ce anume așa începe nuvela?",
    description:
      "Ca să începem cu începutul, Marley murise. În această privință nu încăpea îndoială.",
    answer: {
      text: "Ca să nu existe nici o îndoială că fantoma lui Marley este într-adevăr o fantomă.",
    },
  },
  {
    author: {
      name: "Spiritul Crăciunului din trecut",
      picture: "/answers/ghost-of-christmas-past-2.JPG",
    },
    question: "Ce lecție asociată fiecarei viziuni a învățat Scrooge?",
    description: null,
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
        "3. bunătate și generozitatea către subalterni<br/>" +
        "4. importanța iubirii<br/>" +
        "5. cum lipsa iubirii, familiei, pritenilor l-a lăsat pe Scrooge singur pe lume",
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
      picture: "/answers/cornul-abundentei-craciunul-din-prezent.jpg",
    },
  },
];
