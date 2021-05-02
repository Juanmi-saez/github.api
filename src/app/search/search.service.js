
const {delAsync} = require('../../common/db/redis')
const {listStarred,searchByLicenseType} = require('../search/search.repository')


async function getStarred(token) {
   return await listStarred(token)
}


async function refreshStarred(token) {
    await delAsync(token)
    return await listStarred(token)
}


async function searchLicense(token, licenseType) {
    return await searchByLicenseType(token,licenseType)
}


module.exports={
    getStarred,
    refreshStarred,
    searchLicense
}
