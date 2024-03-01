import 'dotenv/config';
import path from 'node:path';
import { db } from '../database';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

(async () => {
  await migrate(db, { migrationsFolder: path.join(__dirname, './migrations') });
})();
