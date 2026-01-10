import {config} from 'dotenv';
import process from 'node:process';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN} = process.env;

console.log('DB_URI=', DB_URI);

