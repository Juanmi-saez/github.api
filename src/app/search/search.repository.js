const {setAsync, getAsync} = require('../../common/db/redis')
const github = require('octonode');
const jwt = require('jwt-simple');
const {TOKEN_SECRET} = require('../../config')

function gitHubClient(token){
    const payload = jwt.decode(token, TOKEN_SECRET);
    return github.client(payload.authtoken);
}

async function listStarred(token){
    const redisResult=await getAsync(token)
    if(redisResult){
        return JSON.parse(redisResult)
    }
    const client = await gitHubClient(token);
    const ghme=client.me();

    const result=await ghme.starredAsync()
    await setAsync(token, JSON.stringify(result[0]), 'NX', 'EX', 600)
    return result[0];
}

async function searchByLicenseType(token,licenseType){
    const client = await gitHubClient(token);
    const ghsearch=client.search()
    const results=await ghsearch.reposAsync({
        q: `license:${licenseType}`,
        sort: 'created',
        order: 'asc'
    })
    return results[0].items
}

module.exports={
    gitHubClient,
    listStarred,
    searchByLicenseType
}
