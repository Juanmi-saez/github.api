const redis = require('redis');
const { promisify } = require('util');
const {
  REDIS: {HOST, PORT}
} = require("../../config");

const redisClient = redis.createClient({
  host: HOST,
  port: PORT
});
const delAsync = promisify(redisClient.del).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);
const getAsync = promisify(redisClient.get).bind(redisClient);


redisClient.on('connect', () => {
  console.log("Redis connect")
});

redisClient.on('end', () => {
  console.log("Redis stop")
});

module.exports = {
  delAsync,
  setAsync,
  getAsync
};
