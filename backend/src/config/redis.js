const { createClient } = require('redis');

// Redis configuration with fallback options
const redisConfig = {
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST || 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: process.env.REDIS_PORT || 19934,
        connectTimeout: 5000,
        lazyConnect: true
    },
    retry_strategy: (options) => {
        if (options.error && options.error.code === 'ECONNREFUSED') {
            console.log('Redis server connection refused.');
            return new Error('Redis server connection refused');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            console.log('Redis retry time exhausted.');
            return new Error('Retry time exhausted');
        }
        if (options.attempt > 3) {
            console.log('Redis max retry attempts reached.');
            return undefined;
        }
        return Math.min(options.attempt * 100, 3000);
    }
};

const redisClient = createClient(redisConfig);

// Error handling for Redis connection
redisClient.on('error', (err) => {
    console.log('Redis Client Error:', err.message);
});

redisClient.on('connect', () => {
    console.log('Redis client connected successfully');
});

redisClient.on('ready', () => {
    console.log('Redis client ready to use');
});

module.exports = redisClient;