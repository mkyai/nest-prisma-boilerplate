export const member = {
  query: {
    community: {
      async create({ args, query }: any) {
        const result = await query(args);
        console.log({ result });
        return result;
      },
    },
  },
};

export const getCommunityUrl = {
  result: {
    community: {
      url: {
        needs: {},
        compute({ tenantId }: any) {
          return process.env.FRONTEND_URL?.toString().replace(
            '://',
            `://${tenantId}.`,
          );
        },
      },
    },
  },
};
