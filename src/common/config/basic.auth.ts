import { INestApplication } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';
const { HOST_USERNAME, HOST_PASSWORD, PROJECT_NAME } = process.env;

export const BasicAuth = (app: INestApplication) => {
  const isProduction = process.env.NODE_ENV === 'production';
  app.use(
    ['/swagger', '/bullboard'],
    basicAuth({
      challenge: isProduction,
      realm: `${PROJECT_NAME} API [${process.env.NODE_ENV}]`,

      users: {
        [HOST_USERNAME]: HOST_PASSWORD,
      },
    }),
  );
};
