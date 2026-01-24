import {config} from 'dotenv';
import process from 'node:process';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, 
    ARCJET_KEY, ATCJET_ENV, QSTASH_URL, QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY, QSTASH_NEXT_SIGNING_KEY
} = process.env;

console.log('DB_URI=', DB_URI);



