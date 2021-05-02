const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../../swagger_output.json')

function init(app) {
  app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use('/doc',swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

module.exports = {init};
