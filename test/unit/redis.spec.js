
const redisModule = require('redis');
const sinon = require('sinon');

const mockClient = {
    set: ()=>{},
    del: ()=>{},
    on: ()=>{},
    get: () =>{}
}
sinon.stub(redisModule, "createClient").returns(mockClient);
sinon.stub(mockClient, "set").yieldsRight(null, "OK");
sinon.stub(mockClient, "get").yieldsRight(null, "OK");


const redis = require("../../src/common/db/redis");

describe('Redis', () => {

    beforeEach(function(){
    })

    afterEach(function(){
        sinon.reset();
    })

    test("setKeys", async function(){
        await redis.setKeys(["b", "a", "b"]);
        expect(mockClient.set.callCount).toEqual(2);
        expect(mockClient.set.getCall(0).args[0]).toEqual("b-Blocked");
        expect(mockClient.set.getCall(1).args[0]).toEqual("a-Blocked");
    });

});
