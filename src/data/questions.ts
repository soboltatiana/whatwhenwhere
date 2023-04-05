import type { Question } from "@/interfaces/question";

export const questions: Array<Question> = [
  {
    author: {
      name: "Dama din Franța",
    },
    description:
      'Aceasta "damă"  a apărut in 1889 ca sa comemoreze 100 de ani de la revoluția franceză.  Nu a fost demontată doar datorită invenției radioului. ',
    question: "Ce este ea?",
    answer: {
      text: "Turnul Eiffel",
      pictures: ["/answers/turnul-eiffel.jpeg"],
    },
    active: true,
  },
];
