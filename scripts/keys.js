console.log('keys loaded');

exports.algolia = {
  APPLICATION_ID: process.env.APPLICATION_ID,
  SEARCH_ONLY_API_KEY: process.env.SEARCH_ONLY_API_KEY,
  ADMIN_API_KEY: process.env.ADMIN_API_KEY,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  MONITORING_API_KEY: process.env.MONITORING_API_KEY
};