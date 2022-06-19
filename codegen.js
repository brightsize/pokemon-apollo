module.exports = {
  schema: "https://graphql-pokemon2.vercel.app/",
  documents: ["./**/*.graphql"],
  generates: {
    "./index.ts": {
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
