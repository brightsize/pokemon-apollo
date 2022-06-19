const GRAPHQL_API = require("./config/constants").GRAPHQL_API;

module.exports = {
  schema: GRAPHQL_API,
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
