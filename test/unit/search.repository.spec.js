const searchRepository = require('../../src/app/search/search.repository');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFubWkuc2FlekBnbWFpbDMuY29tIiwiaWF0IjoxNjE5OTQwNjc3LCJleHAiOjE2MjAwMjcwNzcsImF1dGh0b2tlbiI6ImdocF9CVHNTODZGc0FYMVlhRW9TNjF2M1pZU3NWQWhCS2owOEM4Z3YifQ.VEXuFMg1Tk90l48klWjx_1o3IjoIDxCtlBGScIXPclU';

jest.mock('../../src/common/db/redis',() =>({
        setAsync: async ()=>{return []},
        delAsync: async()=>{return []},
        getAsync: async()=>{return null}
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
