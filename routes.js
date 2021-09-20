const routes = require('next-routes')();

routes
  // Fixed URL's
  .add('/campaigns/new', '/campaigns/new')
  // Dinamic URL's
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', 'campaigns/requests/index')
  .add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;
