import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';


    config({path: ".env.development.local"})

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg', 
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!
    }
} satisfies Config;