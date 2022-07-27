import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("Verificar itens duplicados",() => {
      const check = checaItensDuplicados([123, 321, 123]);
      expect(check).toEqual(true);
    });

  test("Verificar itens duplicados",() => {
      const check = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
      expect(check).toEqual(true);
    });

  test("Verificar itens duplicados",() => {
      const check = checaItensDuplicados([]);
      expect(check).toEqual(false);
    });

  test("Verificar itens duplicados",() => {
      const check = checaItensDuplicados(["fa", "d", "e", "f"]);
      expect(check).toEqual(false);
    });

  test("Verificar itens duplicados",() => {
      const check = checaItensDuplicados([1]);
      expect(check).toEqual(false);
    });




















});
