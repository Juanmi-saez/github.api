const searchRepository = require('../../src/app/search/search.repository');
const token = 'testToken';

jest.mock('../../src/common/db/redis',() =>({
        setAsync: async ()=>{return []},
        delAsync: async()=>{return []},
        getAsync: async()=>{return null}
}))

jest.mock('jwt-simple',()=>({
    decode: () => {return []}
}))

jest.mock('octonode',()=>({
    client: ()=>({
        me: ()=>({
            starredAsync: ()=>{return []}
        }),
        search: ()=>({
            reposAsync: ()=>{return []}
        })
    })
}))

describe('Search repository', () => {

    beforeEach(function(){

        })

    afterEach(function(){

    })


    it('List starred', async (done) => {
        await searchRepository.listStarred(token)
        done()
    });


    it('Search by license', async (done) => {
        await searchRepository.listStarred(token,'MIT')
        done()
    });
})
