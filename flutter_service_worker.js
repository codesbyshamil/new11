'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "63b015cc3f7a9e30d4ea814507fe2c2d",
".git/config": "f5e560f14102cad023206637d1a0c8ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d28ead34e70f16aaa6234533653177af",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2ba1ac5ef7763d6a8ffb740ee30bf60b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61d41fb851fef720aa01626994124263",
".git/logs/refs/heads/main": "50a0aab61269a054d61eb3097245f4cd",
".git/logs/refs/remotes/origin/main": "449f44a15cd3959566cfe0d96e5a3eff",
".git/logs/refs/remotes/origin/master": "fe7c41334a854696f174c4a80edfe4fe",
".git/objects/02/6e0beb0b21bcf11e39df2e177aec52a69f272c": "f4ad82fd49df84427c7e2708b99087f4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/37c3acef4f47b60948aa37960e9aa221a1eaa8": "ba5f7eedd459a51bab182e6bebf73c09",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/888fc5034cca298a025dea4968f8e09041c10f": "746498004771553e99460f889f802266",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/1fc206d225ce15a702dc8df3230c7523f67a81": "b30228b9fde66b40baafd3db73f96c7f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/34/c9205a1b98b22a532cb27bddadd3026124b39f": "9217b8b9d7a471d08e592bae405eb22f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/d90992f498887dac6191b8c0ee2f18869ebe49": "384616a8970007aec346f4b48805d08b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/95a423ccfcb449764ce10d44ee31b11900b0c3": "fcc46a27a027f22c11136fa59945324a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/adb5916e6ac4165568bce925eb6df68175b57c": "cfd9318d1c22fd5475879f2746f75b79",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/57/7708cbffd11b1a110b8346930d49fd6388322b": "dfbdf0a76f6c1377af6d56a797714c46",
".git/objects/66/5e0de2b7aec1a33a7805454baffb0062ffd35a": "1d0b35b7f45a8e7f76ac2addb0ba9e65",
".git/objects/67/c762229a2631b964f702691005fd057e9bd5b9": "9d9e0c6fd3f6567816f1b46d4f3686ce",
".git/objects/6b/2dc364757135e188aa53bfeb153f8a47f15b00": "ee77a95a5a2e0bc0e2f86eeaaaf2bd85",
".git/objects/78/30b113091ac29496d801c28a6a6be50a6c464a": "58b26b7aa43012ee526ca8e66c67d9e1",
".git/objects/78/3d7dda51e4a43079e39dddeaaf8d80e4524b2e": "d1a41a75a7f5931e0af36fb6b8854a42",
".git/objects/79/9c409ce63fd362305da3b05f0a8d54401c8c6f": "0572d74a556d89ff350949f13ec5b0e1",
".git/objects/79/c689e4007b3642911073e402eaae3351e381d8": "448c1a3c0638bfa78868403448cbc6f8",
".git/objects/85/3aaf16a9b9fed39e2be5a155223baaf1870278": "991f1eef3a60dc305350dd764d30bbd0",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/c4a08da03e8af061be2a312502a66956922215": "f55eb99b19519c78d0033c49e24204f5",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/92/80cdb8d476ea76a7e50979139437c61e047bcb": "58572746e75568148a93b266a391939d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9b/66349bcfeb7ea8535f404639e0ff750af0416e": "d00bc5065d1758d0e2a01c0a0010d9e1",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/2350c7b45afda389b3b20eb6bee4cbfd9d4b15": "280151acc045f18015d7bcc93125ffbc",
".git/objects/a4/59cb105b451019fd21c8709e35325a204ca224": "9542cefad71e30863c37988bb4e1014b",
".git/objects/a6/dba5e930906a2eb07ff7b86b8cb6301ee155ed": "7b6dfb410d0f0fc2d2022d1b0d043a88",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/15ec1615f41ab5e5542a25ad3e1ca758f90fe3": "ec05dc02e15ee563624fc32acb432278",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/f3769533d00861a4828660062f5cde5aab33f1": "12529e8f9c7ddb5948db451ac0bcd226",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c7/34be04203ce336d7c1a98efe8cb262cbfdb2ef": "447e54f0419cfee991a37fd0e2f49e4b",
".git/objects/c8/ebfc0dac7186ff0279ba736f2f22eb507bfa90": "5915e7d755a623cef542a0e446a9a139",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/d6aa28d879e800aad0b86c750e9aa9196d0dec": "ec9bb66ab19a62f3e359b115743008a5",
".git/objects/da/82098768db9ca7ca0df333c736e53eb768e44d": "1b7739b6061d9fee16f4a873e79d827c",
".git/objects/da/99bb034b8ef66f886dc6ccce7069f95de666de": "dad31c258cb26b3c40ba3204e4268d76",
".git/objects/dd/d1668e781b6afa03e806287d56f6799fcbeac1": "df9d84394bd4abba2a9fe841de8880bd",
".git/objects/e3/990b9bde610ca50c66d9de5863e56d2d32367c": "0fccfaf0434fd6a65ae2e8b914d4d7c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/9a60cf3ae0009ea5a3170efae21557183a88c0": "379aeaebb9b06c23f3deda16a74e8c39",
".git/objects/f6/53ac753b19335815634fec930b63dbc1034a65": "2b439ad27610e1ad643abdb5539252ab",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/6aba2e0efca41e89cc608b2f8536f80eef0358": "71e5b4821a941c6772f817a94891ca86",
".git/objects/fc/b2374519df64f5a85c9111efddf98643a50320": "ff6ed6aea1898ef47339d5bfa660d2ad",
".git/ORIG_HEAD": "a7113d364b545c2e5ba8080a6fbee274",
".git/refs/heads/main": "ab8f3afe268e4fba476794b78a47f89b",
".git/refs/remotes/origin/main": "ab8f3afe268e4fba476794b78a47f89b",
".git/refs/remotes/origin/master": "a7113d364b545c2e5ba8080a6fbee274",
".github/workflows/static.yml": "cbc43916e863cc1e369120819c2c27c7",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "412345c92a6323da5161957c0c0c1a00",
"assets/NOTICES": "f8e76b077903daed457b50484bcd6b7f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4fec7d31bb56ca8136e3976a796f1ec",
"/": "c4fec7d31bb56ca8136e3976a796f1ec",
"main.dart.js": "fd87b54c8ec0b8fe0cb459865143302e",
"manifest.json": "d9b7173ee3582d1e0e1fe9ffbf0ae908",
"version.json": "608ff0d1f2325cdfb757682180da21df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
