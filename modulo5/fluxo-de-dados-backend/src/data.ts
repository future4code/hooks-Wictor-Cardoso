import { v4 as uuid} from "uuid"

// Ex2
export type arRay = {
  id: string;
  name: string;
  price: number;
};

export const arrayProducts: arRay[] = [
  {
    id: uuid(),
    name: "pêra",
    price: 11,
  },
  {
    id: uuid(),
    name: "maça",
    price: 6,
  },
  {
    id: uuid(),
    name: "uva",
    price: 9,
  },
  {
    id: uuid(),
    name: "abacaxi",
    price: 5,
  },
];
