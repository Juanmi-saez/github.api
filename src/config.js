module.exports = {
    APPNAME:'gitHup-api',
    PORT:'3010',
    TOKEN_SECRET: process.env.TOKEN_SECRET || "ce3ff963-39a4-4a9a-ad35-cac22dbdf5a0",
    DB_CONNECTION:'mongodb://localhost:27017',
    DB_DATABASE: 'catalog',
    REDIS:{
        HOST:"127.0.0.1",
        PORT:6379
    }
};
