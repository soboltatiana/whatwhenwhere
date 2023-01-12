import type { Author } from "@/interfaces/Author";

export interface Question {
  author: Author;
  question: string;
  description: string;
  picture?: string;
  answer: string;
}
