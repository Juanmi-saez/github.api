const searchService = require('../../src/app/search/search.service');

jest.mock('../../src/common/db/redis',() =>({
        setAsync: async ()=>{return []},
        delAsync: async()=>{return []},
        getAsync: async()=>{return null}
}))

jest.mock('../../src/app/search/search.repository',() =>({
    gitHubClient: async ()=>{return {}},
    listStarred: async()=>{return {repository:{name:'testRepository'}}},
    searchByLicenseType:async()=>{return {repository:{name:'testRepository'}}}
}))

describe('Search service', () => {

    beforeEach(function(){

        })

    afterEach(function(){

    })


    it('Search starred', async (done) => {
        const result= await searchService.getStarred(token)
        expect(result.repository.name).toEqual('testRepository')
        done()
    });

    it('Refresh starred', async (done) => {
        await searchService.refreshStarred(token)
        done()
    });

    it('Search by license', async (done) => {
        const result=await searchService.searchLicense(token,'MIT')
        expect(result.repository.name).toEqual('testRepository')
        done()
    });
})
