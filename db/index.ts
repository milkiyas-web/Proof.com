import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { projects, reviews } from "./schema";
import { number } from "zod";

const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/drizzle";

 export const client = postgres(connectionString);
 export const db = drizzle(client, {schema});