module.exports = {
  env: {
    SPACE_ID: 'hx2pnnu2mga3',
    CONTENT_DELIVERY_API: '3RPJQMCsQmaQU60855lFyVspIudJUGsZtILM6kPFuto',
  },
  typescript: {ignoreBuildErrors: true},
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};
