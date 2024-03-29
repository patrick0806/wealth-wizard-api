import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './src/config/database/schema.ts',
  out: './src/config/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL,
  },
} satisfies Config;
