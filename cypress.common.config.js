const { defineConfig } = require('cypress');

const users = {
  // has access to all courses
  testUser1: 'johnathan@gmail.com',
  testUser1Pass: 'Admin123',

  testAdminUser1: 'mirza@gmail.com',
  testAdminUser1Pass: 'Admin123',
};

const commonConfig = {
  env: {
    ...users,

    usersVerifyInDb: [users.testUser1, users.testUser2, users.testAdminUser1],
    usersMakeAdminInDb: [users.testAdminUser1],
    usersClearStateInDb: [users.testUser1, users.testUser2],
    usersWithAllAccess: [users.testUser1],
  },

  chromeWebSecurity: false,

  viewportHeight: 1080,
  viewportWidth: 1920,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
};

function makeConfig({ env, e2e, config }) {
  const cfg = {
    ...commonConfig,
    ...config,
  };
  cfg.env = { ...commonConfig.env, ...env };
  cfg.e2e = { ...commonConfig.e2e, ...e2e };

  return defineConfig(cfg);
}

module.exports = {
  commonConfig: commonConfig,
  makeConfig: makeConfig,
};
