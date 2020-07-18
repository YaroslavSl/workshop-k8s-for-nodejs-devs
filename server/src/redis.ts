import { once } from 'events';

import redisAdapter from 'socket.io-redis';

let redis: redisAdapter.RedisAdapter;

export function getRedisAdapter() {
  if (!redis) {
    redis = redisAdapter({ host: process.env.REDIS_HOST });
  }
  return redis;
}

export async function close(): Promise<void> {
  if (!redis) return;
  redis.pubClient.end(false);
  redis.subClient.end(false);
  await Promise.all([once(redis.pubClient, 'end'), once(redis.subClient, 'end')]);
}
