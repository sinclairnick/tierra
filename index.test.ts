import shortid from "shortid";
import Tierra from "./index";

describe("tierra", () => {
  test("returns shortid code", () => {
    const tierra = Tierra(10);
    const code = tierra.get(new Error("A new error"));
    expect(shortid.isValid(code)).toBe(true);
  });
  test("returns same code if already exists", () => {
    const tierra = Tierra(20);
    const error = new Error("Another error");
    const code1 = tierra.get(error);
    const code2 = tierra.get(error);
    expect(code1).toEqual(code2);
  });
  test("returns different codes according to seeds", () => {
    const tierra1 = Tierra(2);
    const tierra2 = Tierra(3);
    const error = new Error("Another one");
    expect(tierra1.get(error)).not.toEqual(tierra2.get(error));
  });
  test("returns table of codes", () => {
    const tierra = Tierra(20);
    const x = new Error("New Error");
    const y = tierra.get(x);
    tierra.get(new Error());
    tierra.get(new TypeError("Wrong type"));
    const table = tierra.table();
    console.log(tierra.table());
    expect(table).toHaveProperty(y.toString(), x.toString());
  });
});
