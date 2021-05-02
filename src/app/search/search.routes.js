const validator = require('express-joi-validation')({ passError: true });
const controller = require('./search.controller')
const schemas = require('./search.schemas')
const {ensureAuthenticated} = require('../../common/middleware')

function register(app) {
    app.get(
        '/search/starred',
        ensureAuthenticated,
        controller.getStarred
    );

    app.get(
        '/search/refreshStarred',
        ensureAuthenticated,
        controller.refreshStarred
    );

    app.get(
        '/search/searchByLicense/:licenseType',
        validator.params(schemas.licenseTypeSchema.params),
        ensureAuthenticated,
        controller.searchByLicense
    );
}


module.exports={
    register
}
