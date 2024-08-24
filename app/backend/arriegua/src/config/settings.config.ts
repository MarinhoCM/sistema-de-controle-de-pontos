require('dotenv').config();

import * as env from 'env-var';

export const serverConfig = {
    port: env.get('GAME_PORT').default('3000').asPortNumber(),
    env: env.get('NODE_ENV').default('DEV').asString()
}

export const databaseConfig = {
    uri: env.get('DATABASE_URL').asString(),
}
