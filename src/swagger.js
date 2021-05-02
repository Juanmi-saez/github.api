const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/app/auth/auth.routes.js','./src/app/search/search.routes.js']

swaggerAutogen(outputFile, endpointsFiles)
