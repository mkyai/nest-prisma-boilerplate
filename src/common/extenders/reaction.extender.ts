import { Reaction } from '@prisma/client';

export const emoji = {
  result: {
    reaction: {
      emoji: {
        compute({ type }: Reaction) {
          switch (type) {
            case 'LIKE':
              return '👍';
            case 'LOVE':
              return '❤️';
            case 'HAHA':
              return '😂';
            case 'WOW':
              return '😮';
            case 'SAD':
              return '😢';
            case 'ANGRY':
              return '😡';
          }
        },
      },
    },
  },
};
