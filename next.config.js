const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        user: "stacktechagency@gmail.com",
        password: "ybtapqblkpwcoous",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      user: "stacktechagency@gmail.com",
      password: "ybtapqblkpwcoous",
    },
  };
};
