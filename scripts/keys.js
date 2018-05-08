console.log('keys loaded');

exports.algoliaKeys = {
  APPLICATION_ID: process.env.APPLICATION_ID,
  SEARCH_ONLY_API_KEY: process.env.SEARCH_ONLY_API_KEY,
  ADMIN_API_KEY: process.env.ADMIN_API_KEY,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  MONITORING_API_KEY: process.env.MONITORING_API_KEY
},

exports.alogoliaAdminKey = {
    ADMIN_API_KEY: process.env.ADMIN_API_KEY
},

exports.algoliaAppID = {
    APPLICATION_ID: process.env.APPLICATION_ID   
};