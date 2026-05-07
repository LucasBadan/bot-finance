import { drizzle } from "drizzle-orm";
import { Client } from "pg";
import "dotenv/config";
export const db = drizzle(
  new Client({
    connectionString: process.env.POSTGRES_HOST,
  }),
);
