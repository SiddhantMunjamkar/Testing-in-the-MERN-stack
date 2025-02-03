import express from "express";
import { z } from "zod";
export const app = express();

app.use(express.json());

const SumInput = z.object({
  a: z.number(),
  b: z.number(),
});

// @ts-ignore
app.post("/Sum", (req, res) => {
  const parsedResponse = SumInput.safeParse(req.body);

  if (!parsedResponse.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const answer = parsedResponse.data.a + parsedResponse.data.b;

  res.json({
    answer,
  });
});
