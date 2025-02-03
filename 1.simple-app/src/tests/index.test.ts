import { describe, expect, test } from "@jest/globals";
import { multiply, sum } from "../index";

describe("Testing all the calculator functionlity ", () => {
  describe("Testing sum function", () => {
    test("should sum 1 and 2 correctly ", () => {
      expect(sum(1, 2)).toBe(3);
    });

    test("should return the sum of negative numbers correctly ", () => {
      expect(sum(-1, -2)).toBe(-3);
    });
  });

  describe("Testing multipy function", () => {

    test("multiply 1 *2 to equal 2", () => {
      expect(multiply(1, 2)).toBe(2);
    });

  });
});

// describe and it
