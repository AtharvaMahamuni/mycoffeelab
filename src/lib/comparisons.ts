import { getDrink, type Drink } from "./drinks";

export interface Comparison {
  slug: string;
  h1: string;
  left: string;
  right: string;
  sentence: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "flat-white-vs-latte",
    h1: "Flat white vs latte",
    left: "flat-white",
    right: "latte",
    sentence: "The flat white is the smaller cup and the smaller milk mass. Foam thickness is a result of that recipe.",
  },
  {
    slug: "cortado-vs-flat-white",
    h1: "Cortado vs flat white",
    left: "cortado",
    right: "flat-white",
    sentence: "The Gibraltar cortado is the smaller drink. The Spanish cortado is a different pour and is not the left-hand drawing.",
  },
  {
    slug: "macchiato-vs-cortado",
    h1: "Macchiato vs cortado",
    left: "macchiato",
    right: "cortado",
    sentence: "A macchiato is an espresso marked with a little milk. A Gibraltar cortado is a full small milk drink.",
  },
  {
    slug: "cappuccino-vs-latte",
    h1: "Cappuccino vs latte",
    left: "cappuccino",
    right: "latte",
    sentence: "These house recipes use the same espresso yield. The cappuccino is smaller and aired more.",
  },
  {
    slug: "espresso-vs-americano",
    h1: "Espresso vs americano",
    left: "espresso",
    right: "americano",
    sentence: "An americano is the shot plus hot water. The water mass is on the page.",
  },
];

export const reverseComparisons: Record<string, string> = {
  "latte-vs-flat-white": "flat-white-vs-latte",
  "flat-white-vs-cortado": "cortado-vs-flat-white",
  "cortado-vs-macchiato": "macchiato-vs-cortado",
  "latte-vs-cappuccino": "cappuccino-vs-latte",
  "americano-vs-espresso": "espresso-vs-americano",
};

export function pairDrinks(comparison: Comparison): { left: Drink; right: Drink } {
  const left = getDrink(comparison.left);
  const right = getDrink(comparison.right);
  if (!left || !right) throw new Error(`Missing drink for ${comparison.slug}`);
  return { left, right };
}
