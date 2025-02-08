import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";
export const app = express();

app.use(express.json());

const SumInput = z.object({
  a: z.number(),
  b: z.number(),
});

// @ts-ignore
app.post("/Sum", async (req, res) => {
  const parsedResponse = SumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  const request = await prismaClient.sum.create({
    data: {
      a: parsedResponse.data.a,
      b: parsedResponse.data.b,
      result: answer,
    },
  });

  res.json({
    answer,
    id: request.id,
  });
});
