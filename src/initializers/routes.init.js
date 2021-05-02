const { authRoutes } = require('../app/auth');
const { searchRoutes} = require('../app/search')

function init(app) {
  authRoutes.register(app);
  searchRoutes.register(app);
}

module.exports = { init };
