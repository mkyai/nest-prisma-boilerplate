import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request } from 'express';
import { NEW_ATTACHMENT } from '../constants/app.constants';
import { getUrlFromPath } from '../helpers/app.helper';

export const getAtachmentUrl = {
  result: {
    attachment: {
      key: {
        needs: { url: true },
        compute(attachment: any) {
          return `${attachment.url.split('/').pop()}`;
        },
      },
      url: {
        needs: { url: true },
        compute(attachment: any) {
          return getUrlFromPath(attachment);
        },
      },
      hd: {
        needs: { url: true },
        compute(attachment: any) {
          if (attachment.availability === 2) {
            return attachment.url.replace('sd.mp4', 'hd.mp4');
          }
          return null;
        },
      },
    },
  },
};

export const lambdaEvent = (emitter: EventEmitter2, req: Request) => ({
  query: {
    attachment: {
      async create({ args, query }: any) {
        const result = await query(args);
        const tenant = req.headers['x-tenant-id'] || process.env.DATABASE_NAME;
        const name = result.key;
        if (result.type) {
          emitter.emit(NEW_ATTACHMENT, {
            tenant,
            name,
            ...result,
          });
        }
        return result;
      },
    },
  },
});
