import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>();

// Example of mocking a specific function (e.g, sum.create)
// export const prismaClient={
//     sum:{
//         creat:vi.fn()
//     }
// }