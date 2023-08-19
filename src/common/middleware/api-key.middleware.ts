import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
class ApiKeyMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    // const { headers } = request;
    // const ApiKey = headers['x-api-key'];
    // const url = request.url === `/`;
    // if (url) {
    //   next();
    //   return;
    // }
    // if (!ApiKey) {
    //   throw new ForbiddenException('Api Key is required');
    // }
    // if (
    //   !String(process.env.API_KEYS)
    //     .split(',')
    //     .map(String)
    //     .includes(String(ApiKey))
    // ) {
    //   throw new ForbiddenException('Invalid Api Key');
    // }
    // Logger.log(`[${ApiKey}]`);

    next();
  }
}

export default ApiKeyMiddleware;
