import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './src/config/database/schema.ts',
  out: './src/config/database/migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;
