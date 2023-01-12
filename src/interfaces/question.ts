import type { Author } from "@/interfaces/author";

export interface Question {
  author: Author;
  question: string;
  description?: string;
  picture?: string;
  answer: string;
}
