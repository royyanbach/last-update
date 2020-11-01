// TO DO FILES
import { precaching } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

const CACHE_FIRST_ASSET_TYPE = ['font', 'image'];

registerRoute(
  ({ request }) => CACHE_FIRST_ASSET_TYPE.includes(request.destination),
  new CacheFirst({
    cacheName: 'cache-first',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      })
    ],
  })
);
