import { describe, expect, it, vi } from "vitest";
import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../__mocks__/db";

vi.mock("../db");

describe("POST/sum", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 2,
      result: 3,
    });
    vi.spyOn(prismaClient.sum, "create");

    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(prismaClient.sum.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        result: 3,
      },
    });

    // console.log(res);
    expect(res.body.id).toBe(1);
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return the sum of two numbers", async () => {
    const res = await request(app)
      .post("/sum")
      .send({
        a: ["absadfglkj"],
      });

    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe("Incorrect inputs");
  });
});
