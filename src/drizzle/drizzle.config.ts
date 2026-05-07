import { config } from "dotenv";
config();
import { defineConfig } from "drizzle-orm";
export default defineConfig({
  driver: "pg",
  connectionString: process.env.POSTGRES_HOST, // ajuste se usar string completa
  out: "./drizzle/data",
  schema: "./drizzle/schema",
});
