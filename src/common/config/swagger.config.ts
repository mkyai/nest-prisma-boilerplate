import { JWT_BEARER } from '@micro-nest/rest';
import { INestApplication } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import { API_KEY } from '../constants/app.constants';
import { JwtPayloadType } from '../constants/auth.constants';

export const SwaggerSetup = async (app: INestApplication) => {
  const user = await new PrismaClient().user.findUnique({
    where: { email: 'admin@allyhq.ai' },
  });
  const token = new JwtService().sign(
    {
      email: user?.email,
      identifier: user?.identifier,
      type: JwtPayloadType.ACCESS_TOKEN,
    },
    { secret: process.env.JWT_SECRET },
  );

  const documents = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('ALLY | API Documentation ')
      .setDescription(
        `Last Updated : ${new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          timeZoneName: 'short',
        })}`,
      )
      .setExternalDoc('changelogs', `${process.env.BASE_URL}/changelogs`)
      .setVersion('1.0.1')
      .addServer(<string>process.env.BASE_URL, 'dev')
      .addApiKey(
        {
          type: 'apiKey',
          scheme: 'apiKey',
          name: API_KEY,
          in: 'header',
          description: 'Your API key, Eg : test712439',
        },
        API_KEY,
      )
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: JWT_BEARER,
          description: `Example : ${token}`,
        },
        JWT_BEARER,
      )
      .build(),
  );

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: `Ally-API [Swagger]`,
    swaggerOptions: {
      persistAuthorization: true,
    },
    // eslint-disable-next-line no-script-url
    customJsStr: `javascript:(function(){ function customFn(input){return input.toString();}})();`,
  };

  return SwaggerModule.setup('/swagger', app, documents, customOptions);
};
