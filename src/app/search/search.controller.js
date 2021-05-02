const service = require('./search.service')

function getStarred(req,res,next){
    service.getStarred(req.headers.authorization)
        .then((starred) =>
            res.status(200).json(starred)
        )
        .catch(err => next(err))
}

function refreshStarred(req,res,next){
    service.refreshStarred(req.headers.authorization)
        .then((starred) =>
            res.status(200).json(starred)
        )
        .catch(err => next(err))
}

function searchByLicense(req,res,next){
    service.searchLicense(req.headers.authorization, req.params.licenseType)
        .then((array) =>
            res.status(200).json(array)
        )
        .catch(err =>
            next(err)
        )
}

module.exports={
    getStarred,
    refreshStarred,
    searchByLicense
}
