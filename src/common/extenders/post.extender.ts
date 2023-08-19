export const posts = {
  result: {
    postAttachments: {
      url: {
        needs: { attachment: true },
        compute({ attachment }: any) {
          return attachment.url;
        },
      },
    },
  },
};
export const myReaction = {
  result: {
    post: {
      myReaction: {
        compute(obj: any) {
          return obj.reactions[0] || null;
        },
      },
      reactions: {
        compute() {
          return undefined;
        },
      },
    },
  },
};
