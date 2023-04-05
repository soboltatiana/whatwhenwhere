import type { Author } from "@/interfaces/author";
import type { Answer } from "@/interfaces/answer";

export interface Question {
  author: Author;
  question: string;
  description?: string;
  pictures?: Array<string>;
  answer: Answer;
  active: boolean;
}
