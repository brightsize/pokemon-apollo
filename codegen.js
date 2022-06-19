module.exports = {
  schema: "https://graphql-pokemon2.vercel.app/",
  documents: ["./**/*.graphql"],
  generates: {
    "./generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};
