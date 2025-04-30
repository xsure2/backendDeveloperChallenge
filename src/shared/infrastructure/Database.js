import dotenv from 'dotenv';

dotenv.config();

import knex from 'knex';
import config from '../../../knexfile.cjs';

const environment = process.env.NODE_ENV || 'development';
const knexInstance = knex(config[environment]);

export default knexInstance;