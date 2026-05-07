import { integer, text, numeric } from "drizzle-orm/sqlite-core";
// Se for Postgres, troque para `pg-int` ou `pg-bigint` etc.
// Exemplo com SQLite apenas para gerar schema inicial; depois use o driver PG.
export const insertBilling = integer("insert_billing_id").primaryKey();
export const clientPhone = text("client_phone");
export const proposalValue = numeric("proposal_value", {
  precision: 15,
  scale: 2,
});
export const status = text("status").default("pending");
